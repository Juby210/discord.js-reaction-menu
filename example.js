const Discord = require('discord.js');
const rm = require('./src/index');
const client = new Discord.Client();

client.on('message', message => {
    if(message.content == '!test') {
        new rm.menu(message.channel, message.author.id, [new Discord.RichEmbed({title:'test'}), new Discord.RichEmbed({title:'test2'}), new Discord.RichEmbed({title:'test3'}), new Discord.RichEmbed({title:'test4'}), new Discord.RichEmbed({title:'test5'})]);
    }
});

client.login('token')