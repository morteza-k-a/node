const Telegraph = require('telegraf');

const bot = new Telegraph('304694590:AAFT_FllrfjRjNx9M6Ss8vG6e-LUNjU_sFc');
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})

bot.launch();