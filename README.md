# discord.js-reaction-menu
Discord.js reaction menu

`npm i discord.js-reaction-menu`

## Usage
```js
const rm = require('discord.js-reaction-menu');
new rm.menu(message.channel, message.author.id, [new Discord.RichEmbed({title:'test'}), new Discord.RichEmbed({title:'test2'}),
    new Discord.RichEmbed({title:'test3'}), new Discord.RichEmbed({title:'test4'}), new Discord.RichEmbed({title:'test5'})]);
```

```js
const rm = require('discord.js-reaction-menu');
new rm.menu(message.channel, message.author.id, ['test', 'test2', 'test3'], 60000);
```

```js
new rm.menu(channel = new Discord.TextChannel(), uid, pages = [], time = 120000, reactions = {first: '⏪', back: '◀', next: '▶', last: '⏩', stop: '⏹'})
```