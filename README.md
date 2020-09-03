# discord.js-reaction-menu
Discord.js reaction menu

**Breaking Change**: 02.09.2020 - changed method arguments to object

`npm i discord.js-reaction-menu`

## Usage
```js
const rm = require('discord.js-reaction-menu')
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
```

```js
const rm = require('discord.js-reaction-menu')
new rm.menu({
    channel: message.channel,
    userID: message.author.id,
    pages: ['test', 'test2', 'test3'],
    time: 60000
})
```

Custom default reactions:
```js
const rm = require('discord.js-reaction-menu')
rm.reactions.back = '👈'
rm.reactions.next = '👉'
```
