const Discord = require('discord.js');
module.exports = class Menu {
    constructor(channel = new Discord.TextChannel(), uid, pages = [], time = 120000, reactions = {first: '⏪', back: '◀', next: '▶', last: '⏩', stop: '⏹'}) {
        this.channel = channel;
        this.pages = pages;
        this.time = time;
        this.reactions = reactions;
        this.page = 1;
        channel.send(pages[0]).then(msg => {
            this.msg = msg;
            this.addReactions();
            this.createCollector(uid);
        });
    }
    select(pg = 1) {
        this.page = pg;
        this.msg.edit(this.pages[pg-1]);
    }
    createCollector(uid) {
        const collector = this.msg.createReactionCollector((r, u) => u.id == uid, {time: this.time});
        this.collector = collector;
        collector.on('collect', r => {
            if(r.emoji.name == this.reactions.first) {
                if(this.page != 1) this.select(1);
            } else if(r.emoji.name == this.reactions.back) {
                if(this.page != 1) this.select(this.page - 1);
            } else if(r.emoji.name == this.reactions.next) {
                if(this.page != this.pages.length) this.select(this.page + 1);
            } else if(r.emoji.name == this.reactions.last) {
                if(this.page != this.pages.length) this.select(this.pages.length);
            } else if(r.emoji.name == this.reactions.stop) {
                collector.stop();
            }
            r.remove(uid);
        });
        collector.on('end', () => {
            this.msg.clearReactions();
        });
    }
    async addReactions() {
        if(this.reactions.first) await this.msg.react(this.reactions.first);
        if(this.reactions.back)  await this.msg.react(this.reactions.back);
        if(this.reactions.next)  await this.msg.react(this.reactions.next);
        if(this.reactions.last)  await this.msg.react(this.reactions.last);
        if(this.reactions.stop)  await this.msg.react(this.reactions.stop);
    }
}
