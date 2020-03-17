const { Client, MessageEmbed } = require('discord.js')
const rm = require('./src/index')
const client = new Client()

client.on('message', message => {
    if(message.content == '!test') {
        new rm.menu(
            message.channel,
            message.author.id,
            [
                new MessageEmbed({ title:'test'  }),
                new MessageEmbed({ title:'test2' }),
                new MessageEmbed({ title:'test3' }),
                new MessageEmbed({ title:'test4' }),
                new MessageEmbed({ title:'test5' })
            ]
        )
    }
});

client.login('token')
