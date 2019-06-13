// const { ActivityHandler } = require('botbuilder');
// const { QnAMaker } = require('botbuilder-ai');

// class QnA extends ActivityHandler {
//     constructor(logger) {
//         super();
//         if (!logger) {
//             logger = console;
//             logger.log('[QnaMakerBot]: logger not passed in, defaulting to console');
//         }

//         try {
//             this.qnaMaker = new QnAMaker({
//                 knowledgeBaseId: process.env.QnAKnowledgebaseId,
//                 endpointKey: process.env.QnAAuthKey,
//                 host: process.env.QnAEndpointHostName
//             });
//         } catch (err) {
//             logger.warn(`QnAMaker Exception: ${ err } Check your QnAMaker configuration in .env`);
//         }
//         this.logger = logger;
//     }

//     async getAnsfromQnA(_content){
//         const qnaResults = await this.qnaMaker.getAnswers(_context);
        
//         // If an answer was received from QnA Maker, send the answer back to the user.
//         if (qnaResults[0]) {
//             await _context.sendActivity(qnaResults[0].answer);
//             return true;
//         // If no answers were returned from QnA Maker, reply with help.
//         } else {
//             // await context.sendActivity('No QnA Maker answers were found.');
//             return false;
//         }
//     }
// }

// module.exports.QnA = QnA;