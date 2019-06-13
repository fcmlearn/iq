const { ActivityHandler, CardFactory, MessageFactory, AttachmentLayoutTypes, ActionTypes } = require('botbuilder');

const siqwidgetformat = {
    image : {
        "zohosalesiq": {
            "replies": [
              {
                "text": "Beef Katsudon",
                "image": "https://media.giphy.com/media/KqYslPraZqyuQ/giphy.gif"
              }
            ]
        }
    },
    article : {
        "zohosalesiq": {
            "replies": [
              {
                "text": "Here are your reference articles",
                "type": "articles",
                "image": "http://zylker.com/help/common.png",
                "title": "Articles about discount in home needs",
                "articles": [
                  "121212121",
                  "123434343",
                  "123334678"
                ]
              }
            ]
        }
    },
    link : {
        "zohosalesiq": {
            "replies": {
              "text": "Sumire Karaage Roll",
              "type": "links",
              "image": "https://media.giphy.com/media/HSSJphsM5t744/giphy.gif",
              "links": [
                {
                  "url": "https://i.pinimg.com/originals/5c/19/59/5c195929e62b8b3097d25a1a9d7ffc7c.png",
                  "icon": "https://i.pinimg.com/originals/5c/19/59/5c195929e62b8b3097d25a1a9d7ffc7c.png",
                  "text": "Spicy Meat & Vegetables Curry served with Rice & Herbs!"
                },
                {
                  "url": "https://i.pinimg.com/474x/48/98/34/4898341237a7efbf3c10e315b35c107c.jpg",
                  "icon": "https://i.pinimg.com/474x/48/98/34/4898341237a7efbf3c10e315b35c107c.jpg",
                  "text": "Cheesy Bean Tacos served with French Fries! 🍟"
                }
              ]
            }
        }
    },
    happy:{
        "zohosalesiq": {
            "input": {
             "type": "happiness-rating",
             "level": "3"
           },
           "replies":[{
               "text" : "Gotcha Pork Roast",
               "image": "https://i.ytimg.com/vi/GAdob1t4Nyk/maxresdefault.jpg"
           },"rating plz"]
         }
    },
    star:{
        "zohosalesiq": {
            "input": {
              "type": "star-rating",
              "level": "5"
            },
            "replies":[{
                "text" : "Ratatouille",
                "image": "https://cdn.bluefoot.com/starvin/images/Ratatouille/pinterest-ratatouille.png"
            },"rating plz"] 
          }
    },
    like:{
        "zohosalesiq": {
            "input": {
              "type": "like"
            },
            "replies":[{
                "text" : "Char Okakiage",
                "image": "https://vignette.wikia.nocookie.net/shokugekinosoma/images/8/83/Char_Okakiage_%28anime%29.png"
            },"rating plz"] 
        }
    },
    singleselect:{
        "zohosalesiq": {
            "input": {
              "type": "select",
              "options": [
                "Char Okakiage",
                "Ratatouille",
                "Mapo Curry Noodles"
              ]
            },
            "replies":[{
                "text" : "Single select"
            }]
        }
    },
    multiselect:{
        "zohosalesiq": {
            "input": {
              "type": "multiple-select",
              "options": [
                "Char Okakiage",
                "Ratatouille",
                "Mapo Curry Noodles"
              ],
              "max_selection": "2"
            },
            "replies":[{
                "text" : "multi select"
            }] 
        }
    },
    slider:{
        "zohosalesiq": {
            "input": {
              "type": "slider",
              "values": [
                "Sad",
                "Neutral",
                "Happy"
              ]
            },
            "replies":[{
                "text" : "slider"
            }] 
        }
    },
    rangeslider:{
        "zohosalesiq": {
            "input": {
              "type": "range-slider",
              "values": [
                "$100",
                "$200",
                "$300",
                "$400",
                "$500",
                "$600"
              ]
            },
            "replies":["range slider"]
        }
    },
    calender:{
        "zohosalesiq": {
            "input": {
              "to": "+5",
              "tz": true,
              "from": "-5",
              "time": true,
              "type": "calendar",
              "label": "Schedule a meeting",
              "select_label": "Choose a slot"
            },
            "replies":["cal"]
        }
    },
    rangecal:{
        "zohosalesiq": {
            "input": {
              "to": "+5",
              "tz": true,
              "from": "-5",
              "time": true,
              "type": "range-calendar",
              "label": "Schedule a meeting",
              "select_label": "Choose a slot"
            },
            "replies":["range cal"]
        }
    },
    location:{
        "zohosalesiq": {
            "input": {
              "lat": "90.1",
              "lng": "20.3",
              "type": "location",
              "label": "Share Location",
              "radius": "2 kms",
              "select_label":"Send my locale"
            },
            "replies":["location"]
        }
    },
    timeslot:{
        "zohosalesiq": {
            "input": {
              "tz": true,
              "type": "timeslots",
              "label": "Book a slot",
              "slots": [
                "09:00",
                "09:30",
                "10:00",
                "10:30",
                "11:00",
                "11:30"
              ]
            },
            "replies":["time slot"]
        }
    },
    datetimeslot:{
        "zohosalesiq": {
            "input": {
              "tz": true,
              "type": "date-timeslots",
              "label": "Select a time ",
              "slots": {
                "24/08/2018": [
                  "09:00",
                  "09:30",
                  "10:00",
                  "10:30",
                  "11:00",
                  "11:30"
                ]
              }
            },
            "replies":["date time slot"]
        }
    },
    suggestions:{
        "replies":[{
            "text": "Rainbow Terrine",
            "image": "https://i.pinimg.com/originals/2b/85/22/2b8522719ee02017a66f41314af7c682.jpg"
          }],
        "suggestions":['Temari Bento', 'Frittata', 'Souffle Omelette', 'Sumire Karaage Roll', 'Onigiri']
    },
    forward:{
        "action" : "forward",
        "replies":["forwading ..."]
    }
}

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
            case 'siq link':
                context.sendActivity({ channelData: siqwidgetformat.link });
                break;
            case 'siq image':
                context.sendActivity({ channelData: siqwidgetformat.image });
                break;
            case 'siq article':
                context.sendActivity({ channelData: siqwidgetformat.article });
                break;
            case 'siq happy':
                context.sendActivity({ channelData: siqwidgetformat.happy });
                break;
            case 'siq star':
                context.sendActivity({ channelData: siqwidgetformat.star });
                break;
            case 'siq like':
                context.sendActivity({ channelData: siqwidgetformat.like});
                break; 
            case 'siq singleselect':
                context.sendActivity({ channelData: siqwidgetformat.singleselect });
                break;
            case 'siq multiselect':
                context.sendActivity({ channelData: siqwidgetformat.multiselect });
                break;
            case 'siq slider':
                context.sendActivity({ channelData: siqwidgetformat.slider });
                break;
            case 'siq range slider':
                context.sendActivity({ channelData: siqwidgetformat.rangeslider });
                break;
            case 'siq cal':
                context.sendActivity({ channelData: siqwidgetformat.calender });
                break;
            case 'siq range cal':
                context.sendActivity({ channelData: siqwidgetformat.rangecal });
                break;
            case 'siq loc':
                context.sendActivity({ channelData: siqwidgetformat.location });
                break;
            case 'siq time':
                context.sendActivity({ channelData: siqwidgetformat.timeslot });
                break;
            case 'siq date time':
                context.sendActivity({ channelData: siqwidgetformat.datetimeslot });
                break;
            case 'siq sugg':
                context.sendActivity({ channelData: siqwidgetformat.suggestions });
                break;
            case 'siq fwd':
                context.sendActivity({ channelData: siqwidgetformat.forward });
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
            'Food Wars!',
            'For those out of the loop (or who just aren\'t interest in anime) Shokugeki no Soma, or Food Wars!, is one of the hottest manga adaptations on television (and Netflix) at the moment. While most people consider it just another NSFW anime (there are a lot of boobs, not gonna lie) it actually has a pretty solid plot and some pretty amazing foodporn. Whether you\'re a fan of the show or just like experimenting in the kitchen you should definitely try these unbelievable dishes from Food Wars!',
            ['https://blog.williams-sonoma.com/wp-content/uploads/2016/12/jan-15-Shoyu-Ramen-with-Pork-Belly.jpg'],
            [
                {
                    type: ActionTypes.OpenUrl,
                    title: 'Gotcha Pork Roast',
                    value: 'https://media.giphy.com/media/WDuKqiuUPETYI/giphy.gif'
                },
                {
                    type: ActionTypes.OpenUrl,
                    title: 'Souffle Omelette',
                    value: 'https://media.giphy.com/media/W3jb1UC5Zt4pq/giphy.gif'
                },
                {
                    type: ActionTypes.OpenUrl,
                    title: 'Sumire Karaage Roll',
                    value: 'https://media.giphy.com/media/HSSJphsM5t744/giphy.gif'
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
                    'Frittata',
                    [
                        { url: 'https://media.giphy.com/media/TL060X7wVIfOU/giphy.gif' }
                    ],
                    [],
                    {
                        subtitle: 'Frittata is an egg-based Italian dish similar to an omelette or crustless quiche or scrambled eggs, enriched with additional ingredients such as meats, cheeses or vegetables. The word frittata is Italian and roughly translates to "fried."'
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
                'What is the best food?'
            )
        );
    }

    async suggCarousel(content){
        const cardActions = [
            {
                type: ActionTypes.PostBack,
                title: 'Duck Katsu Curry',
                value: 'Duck Katsu Curry'
            },
            {
                type: ActionTypes.PostBack,
                title: 'Eggs Benedict',
                value: 'Eggs Benedict'
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
