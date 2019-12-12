const { ActivityHandler, UserState, MemoryStorage, ConversationState, MessageFactory } = require('botbuilder');
const fetch = require('node-fetch');

// importing other modules
const { MSWidgets } = require('./ms_widgets');
const { WFDialog } = require('./waterfall_dialog');
const { QnABot } = require('./qna');

const logger = console;
const mswidgets = new MSWidgets();
const dialog = new WFDialog();
// const qna = new QnABot(logger)

// to have temp memory
//will be cleared on restart
const memoryStorage = new MemoryStorage();
const conversationState = new ConversationState(memoryStorage);
const userState = new UserState(memoryStorage);
const dialogState = conversationState.createProperty('dialogState');

var WIDGETS = ['cardprompt', 'hero', 'adaptive', 'animation', 'audio', 'receipt', 'signin', 'thumbnail', 'video', 'sugg', 'suggcarousel', 'carousel',
'siq date time', 'siq time', 'siq loc', 'siq range cal', 'siq cal', 'siq range slider', 'siq slider', 'siq multiselect', 'siq singleselect', 'siq like', 'siq star', 'siq happy',
'siq article', 'siq image', 'siq link',
'siq sugg', 'siq fwd', 'siq end', 'siq opbusy'
];

class AnswerBot extends ActivityHandler {
    constructor() {
        super();
        this.onMessage(async (context, next) => {
            var res = MessageFactory.text('Response' + ' : '+`vs code | v: 0.1 | context :`+JSON.stringify(context.activity) );
            console.log(`wjdlz | inside onMessage ... `);
            //await context.sendActivity({text:`testing in onMsg`});
            if (context.activity.type === 'message' && context.activity.text) {
                console.log(`wjdlz | inside onMessage | receive msg  : `+context.activity.text);
                let text = context.activity.text.toLocaleLowerCase();
                switch(text)
                {
                    case 'hello':
                    case 'hi':
                    case 'echo':
                        await context.sendActivity({ text : `You said : "${ context.activity.text }"`, channelData:{ zohosalesiq:{
                            replies:[
                                {
                                    "text": "1 | rkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfj"
                                },
                                {
                                    "text": "2 | rkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfj"
                                },
                                {
                                    "text": "3 | rkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfj"
                                },
                                {
                                    "text": "4 | rkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfj"
                                },
                                {
                                    "text": "5 | rkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfjrkjhfd vcjh dhjf chj j fjh dj jh fhd hc hj fjhld h j fh sdc dfscjlh efhjs jh jhfchjhjfj"
                                },
                                {
                                    "text": "6 | Hello there, I'm Happy. "
                                },
                                {
                                    "links": [
                                        {
                                            "url": "http://zylker.com/help/home.png",
                                            "icon": "https://www.marketdirect.co.za/l/government-saqa-certified-how-to-tender-workshop-class-course/?utm_source=zobot&utm_medium=link&utm_campaigns=the+tender+master+class",
                                            "text": "The Tender Master Class"
                                        },
                                        {
                                            "url": "https://www.marketdirect.co.za/l/tender-finance/index.php",
                                            "icon": "http://zylker.com/help/discounts.png",
                                            "text": "Tender Finance"
                                        }
                                    ],
                                    "type": "links",
                                    "image": "http://zylker.com/help/common.png",
                                    "text": "How may I help you today?"
                                }
                            ],
                            suggestions:['hello', 'hi', 'widgets', 'waterfall',
                            'hero', 'adaptive', 'animation', 'audio', 'receipt', 'signin', 'thumbnail', 'video', 'sugg', 'suggcarousel', 'carousel',
                            'siq date time', 'siq time', 'siq loc', 'siq range cal', 'siq cal', 'siq range slider', 'siq slider', 'siq multiselect', 'siq singleselect', 'siq like', 'siq star', 'siq happy',
                            'siq article', 'siq image', 'siq link',
                            'siq sugg', 'siq fwd', 'siq end', 'siq opbusy'
                            ]}} 
                        });
                        break;
                    case 'widgets':
                        mswidgets.sendWidget('widgets', context);
                        break;
                    case 'waterfall':
                        await dialog.run(context, dialogState);
                        break;
                    default:
                        // await context.sendActivity(`type *intro * waterfall`);
                        if(WIDGETS.indexOf(text) > -1)
                        {
                            mswidgets.sendWidget(text, context);
                        }
                        else
                        {
                            //calling exteran services
                            // this.callingExternalservice(context);
                            var isanssend = false;//qna.getAnsfromQnA(context);
                            if(!isanssend)
                            {
                                await dialog.run(context, dialogState);
                            }
                        }
                }
            }
            else if(context.activity.attachments)
            {
                await context.sendActivity(` Name : '${ context.activity.attachments[0].name }'`);
                await context.sendActivity(`contentType : '${ context.activity.attachments[0].contentType }'`);
                await context.sendActivity(`contentUrl : '${ context.activity.attachments[0].contentUrl }'`);
            }
            else
            {
                await context.sendActivity(`unable to process :(`);
            }
            // By calling next() you ensure that the next BotHandler is run.
            
            console.log(`wjdlz | end of onMsg ...`);
            
            await next();
        });
        
        this.onDialog(async (context, next) => {
            // Save any state changes. The load happened during the execution of the Dialog.
            await conversationState.saveChanges(context, false);
            await userState.saveChanges(context, false);
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    //await context.sendActivity('Hello and welcome!');
                    // await next();
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }

    callingExternalservice(context)
    {
        var url = 'https://webhook.site/eaebe3cb-e3a8-4307-bc66-104695be5141';
        var text = context.activity.text;
        var _body = JSON.stringify([{ 'Text': text }])
        return fetch(url, {
                method: 'POST',
                body: _body,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(responseBody => {
                logger.log('[callingExternalservice]: |  responseBody :'+JSON.stringify(responseBody));
                return;
        });
    }
}

module.exports.AnswerBot = AnswerBot;
