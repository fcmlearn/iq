// Imports dependencies
const dotenv = require('dotenv');
const path = require('path');
const restify = require('restify');
const { BotFrameworkAdapter } = require('botbuilder');

// importing other modules
const { AnswerBot } = require('./bot');

// Import required bot configuration.
const ENV_FILE = path.join(__dirname, '.env');
dotenv.config({ path: ENV_FILE });

// Creating instances
const server = restify.createServer();
const adapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});
const bot = new AnswerBot();

// Catch-all for errors.
adapter.onTurnError = async (context, error) => {
    // This check writes out errors to console log .vs. app insights.
    console.error(`\n [onTurnError]: ${ error }`);
    // Send a message to the user
    await context.sendActivity(`Oops. Something went wrong!`);
};

//stating server
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log(`\n${ server.name } listening to ${ server.url }`);
});

// Listening to incoming requests
server.post('/api/messages', (req, res) => {
    adapter.processActivity(req, res, async (context) => {
        // Route to main dialog.
        await bot.run(context);
    });
});

// const conversationReferences = {};
// Listen for incoming notifications and send proactive messages to users.
server.get('/api/notify', async (req, res) => {
    // for (let conversationReference of Object.values(conversationReferences)) {
    //     await adapter.continueConversation(conversationReference, async turnContext => {
    //         await turnContext.sendActivity('proactive hello');
    //     });
    // }

    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.write('<html><body><h1>Proactive messages have been sent.</h1></body></html>');
    res.end();
});