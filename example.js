const { Client, MessageEmbed, Intents } = require('discord.js')
const rm = require('./src/index')
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]})

client.on('messageCreate', message => {
    if(message.content == '!test') {
        // rm.reactions.back = '👈'
        // rm.reactions.next = '👉'
        new rm.menu({
            channel: message.channel,
            userID: message.author.id,
            pages: [
                new MessageEmbed({ title:'test'  }),
                new MessageEmbed({ title:'test2' }),
                new MessageEmbed({ title:'test3' }),
                new MessageEmbed({ title:'test4' }),
                new MessageEmbed({ title:'test5' })
            ]
        })
    }
});

client.login('token')
