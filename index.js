const Telegraph = require('telegraf');

const bot = new Telegraph('5743218335:AAGXZxq2xif4a53bOFz7YoB6mnfWyu59DyA');
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})

bot.launch();