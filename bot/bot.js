const { Telegraf } = require("telegraf");
const TOKEN = "6329502820:AAH6d4sjorHVgauynYHhlvinrWVp4O56WgA";
const bot = new Telegraf(TOKEN);

const web_link = "https://food-montano.netlify.app/";

bot.start((ctx) =>
    ctx.reply("Bem Vindo !", {
        reply_markup: {
            keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
        },
    })
);

bot.launch();