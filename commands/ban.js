const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "Bans a specified user.",
    execute(message, args) {
        const member = message.mentions.members.first();
        let reason = args.slice(2).join(" ");

        //If author doesn't have permissions
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            message.reply("You don't have permission to ban members!");
            return;
        }
        //If bot doesn't have permissions
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
            message.reply("I don't have permission to ban members!");
            return;
        }
        //If author doesn't specify a valid user
        if (!member) {
            message.reply("Please specify a valid user to ban!");
            return;
        }
        //If author attempts to ban themself
        if (message.author.id === member.id) {
            message.reply("You can't ban yourself")
            return;
        }
        //If targeted user has higher permission
        if (!member.bannable) {
            message.reply("That user has higher permission than you!")
            return;
        }
        //If targeted user exists
        if (member) {
            //Attempts to ban the targeted user
            try {
                member.ban({
                    reason: reason
                });
                //If there is a reason
                if (reason) {
                    message.channel.send(`${member} has been banned by ${message.author} for ${reason}.`);
                };
                //If there isn't a reason
                if (!reason) {
                    message.reply(`${member} was banned.`);
                };
                console.log(`${member} was banned`);
                //If there's an error, it gets logged and an error message is sent
            } catch (err) {
                message.reply(`${member} was unable to be banned`)
            }
        } else {
            message.reply(`${member} was unable to be banned`)
        }
    }
}