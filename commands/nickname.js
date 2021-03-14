const Discord = require('discord.js');

module.exports = {
    name: "nickname",
    description: "Sets the bot's nickname.",
    execute(message, args) {

        if (!message.member.hasPermission('MANAGE_NICKNAMES')) {
            message.reply("You don't have permission to manage nicknames!");
            return;
        } else {
            let nickname = message.content.slice(10);
            message.guild.me.setNickname(nickname);
            message.channel.send(`Set nickname to **${nickname}**`)
        }
    }
}