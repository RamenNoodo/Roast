//const Discord = require('discord.js'); //<-- without library   //loading discord //const = var except unchangeable
//const bot = new Discord.Client();

const commando = require('discord.js-commando'); //command library
const bot = new commando.Client(); //creating bot

//bot.registry.registerGroup('random', 'Random');
//bot.registry.registerDefaults(); //registers a few default commands(help,etc)
//bot.registry.registerCommands(__dirname + "/commands");

bot.login('NDE4NTYzNzc2NDcyOTQwNTQ0.DYWt8g.5xmBLPzaiRmgnqyuTosbO-Uu3lk'); //bot logging in

bot.on('message', (message) => {

    if(message.content == 'ping') {
        //message.reply('pong');
        message.channel.sendMessage('pong')
    }

});
