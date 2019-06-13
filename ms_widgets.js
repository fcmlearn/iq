const { ActivityHandler, CardFactory, MessageFactory, ActionTypes } = require('botbuilder');

class MSWidgets extends ActivityHandler {
    constructor() {
        super();
    }

    async sendWidget(type, context){
        switch(type)
        {
            case 'hero':
            case 'herocard':
                this.heroCard(context);
                break;
            case 'adaptive':
                this.adaptiveCard(context);
                break;
            case 'animation':
                this.animationCard(context);
                break;
            case 'audio':
                this.audioCard(context);
                break;
            case 'receipt':
                this.receiptCard(context);
                break;
            case 'signin':
                this.signInCard(context);
                break;
            case 'thumbnail':
                this.thumbnailCard(context);
                break;
            case 'video':
                this.videoCard(context);
                break;
            case 'cardprompt':
                this.cardPrompt(context);
                break;
            case 'sugg':
                this.suggestedActions(context);
                break;
            case 'suggcarousel':
                this.suggCarousel(context);
                break;
            default:
                await context.sendActivity({
                    attachments: [
                        this.adaptiveCard(context),
                        this.animationCard(context),
                        this.audioCard(context),
                        this.heroCard(context),
                        this.receiptCard(context),
                        this.signInCard(context),
                        this.thumbnailCard(context),
                        this.videoCard(context)
                    ],
                    attachmentLayout: AttachmentLayoutTypes.Carousel
                });
        }
    }
    
    // widget methods
    async heroCard(context) {
        const card = CardFactory.heroCard(
            'Welcome to Bot Framework!',
            'Welcome to Welcome Users bot sample! This Introduction card is a great way to introduce your Bot to the user and suggest some things to get them started. We use this opportunity to recommend a few next steps for learning more creating and deploying bots.',
            ['https://blog.williams-sonoma.com/wp-content/uploads/2016/12/jan-15-Shoyu-Ramen-with-Pork-Belly.jpg'],
            [
                {
                    type: ActionTypes.OpenUrl,
                    title: 'Get an overview',
                    value: 'https://docs.microsoft.com/en-us/azure/bot-service/?view=azure-bot-service-4.0'
                },
                {
                    type: ActionTypes.OpenUrl,
                    title: 'Ask a question',
                    value: 'https://stackoverflow.com/questions/tagged/botframework'
                },
                {
                    type: ActionTypes.OpenUrl,
                    title: 'Learn how to deploy',
                    value: 'https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-howto-deploy-azure?view=azure-bot-service-4.0'
                }
            ]
        );
        context.sendActivity({ attachments: [card] });
    }

    async cardPrompt(context){
        // context.sendActivity({ attachments: [this.createSignInCard()] });
    }
    async adaptiveCard(context){
        context.sendActivity({ attachments: [ 
            CardFactory.adaptiveCard({
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                "type": "AdaptiveCard",
                "version": "1.0",
                "body": [
                  {
                    "type": "Image",
                    "url": "http://adaptivecards.io/content/cats/1.png"
                  }
                ]
              }) 
        ] });
    }
    
    async animationCard(content){
        content.sendActivity({
            attachments:[
                CardFactory.animationCard(
                    'Microsoft Bot Framework',
                    [
                        { url: 'https://i.giphy.com/Ki55RUbOV5njy.gif' }
                    ],
                    [],
                    {
                        subtitle: 'Animation Card'
                    }
                )
            ]
        });
    }

    async audioCard(content){
        content.sendActivity({
            attachments:[
                CardFactory.audioCard(
                    'I am your father',
                    ['https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_yourfather.wav'],
                    CardFactory.actions([
                        {
                            type: 'openUrl',
                            title: 'Read more',
                            value: 'https://en.wikipedia.org/wiki/The_Empire_Strikes_Back'
                        }
                    ]),
                    {
                        subtitle: 'Star Wars: Episode V - The Empire Strikes Back',
                        text: 'The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) is a 1980 American epic space opera film directed by Irvin Kershner. Leigh Brackett and Lawrence Kasdan wrote the screenplay, with George Lucas writing the film\'s story and serving as executive producer. The second installment in the original Star Wars trilogy, it was produced by Gary Kurtz for Lucasfilm Ltd. and stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.',
                        image: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
                    }
                )
            ]
        });
    }

    async receiptCard(content){
        content.sendActivity({
            attachments:[
                CardFactory.receiptCard({
                    title: 'John Doe',
                    facts: [
                        {
                            key: 'Order Number',
                            value: '1234'
                        },
                        {
                            key: 'Payment Method',
                            value: 'VISA 5555-****'
                        }
                    ],
                    items: [
                        {
                            title: 'Data Transfer',
                            price: '$38.45',
                            quantity: 368,
                            image: { url: 'https://github.com/amido/azure-vector-icons/raw/master/renders/traffic-manager.png' }
                        },
                        {
                            title: 'App Service',
                            price: '$45.00',
                            quantity: 720,
                            image: { url: 'https://github.com/amido/azure-vector-icons/raw/master/renders/cloud-service.png' }
                        }
                    ],
                    tax: '$7.50',
                    total: '$90.95',
                    buttons: CardFactory.actions([
                        {
                            type: 'openUrl',
                            title: 'More information',
                            value: 'https://azure.microsoft.com/en-us/pricing/details/bot-service/'
                        }
                    ])
                })
            ]
        });
    }

    async signInCard(content){
        content.sendActivity({
            attachments:[
                CardFactory.signinCard(
                    'BotFramework Sign in Card',
                    'https://login.microsoftonline.com',
                    'Sign in'
                )
            ]
        });
    }

    async thumbnailCard(content){
        content.sendActivity({
            attachments:[
                CardFactory.thumbnailCard(
                    'BotFramework Thumbnail Card',
                    [{ url: 'https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg' }],
                    [{
                        type: 'openUrl',
                        title: 'Get started',
                        value: 'https://docs.microsoft.com/en-us/azure/bot-service/'
                    }],
                    {
                        subtitle: 'Your bots — wherever your users are talking.',
                        text: 'Build and connect intelligent bots to interact with your users naturally wherever they are, from text/sms to Skype, Slack, Office 365 mail and other popular services.'
                    }
                )
            ]
        });
    }

    async videoCard(content){
        content.sendActivity({
            attachments:[
                CardFactory.videoCard(
                    '2018 Imagine Cup World Championship Intro',
                    [{ url: 'https://sec.ch9.ms/ch9/783d/d57287a5-185f-4df9-aa08-fcab699a783d/IC18WorldChampionshipIntro2.mp4' }],
                    [{
                        type: 'openUrl',
                        title: 'Lean More',
                        value: 'https://channel9.msdn.com/Events/Imagine-Cup/World-Finals-2018/2018-Imagine-Cup-World-Championship-Intro'
                    }],
                    {
                        subtitle: 'by Microsoft',
                        text: 'Microsoft\'s Imagine Cup has empowered student developers around the world to create and innovate on the world stage for the past 16 years. These innovations will shape how we live, work and play.'
                    }
                )
            ]
        });
    }

    async suggestedActions(content){
        content.sendActivity(
            MessageFactory.suggestedActions(
                ['Temari Bento', 'Frittata', 'Souffle Omelette', 'Sumire Karaage Roll', 'Onigiri'],
                // 'What is the best food?'
            )
        );
    }

    async suggCarousel(content){
        const cardActions = [
            {
                type: ActionTypes.PostBack,
                title: 'Español',
                value: 'englishSpanish'
            },
            {
                type: ActionTypes.PostBack,
                title: 'English',
                value: 'englishEnglish'
            }
        ];
        content.sendActivity(
            MessageFactory.suggestedActions(
                cardActions,
                'What is the best food?'
            )
        );
    }
}

module.exports.MSWidgets = MSWidgets;
