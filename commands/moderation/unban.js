const Discord = require('discord.js');

module.exports = {
    name: "unban",
    description: "Unbans a specified user.",
    syntax: '/unban [user]',
    category: 'Moderation',
    execute(message, args) {
        let reason = args.slice(2).join(" ");
        const member1 = (args[1]).replace('<@','');
        const member = (member1.replace('>', ''))
        console.log(member)

        //If author doesn't have permissions
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            message.reply("You don't have permission to unban members!");
            return;
        }
        //If bot doesn't have permissions
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) {
            message.reply("I don't have permission to ban members!");
            return;
        }
        //If author doesn't specify a valid user
        if (!member) {
            message.reply("Please specify a valid user to unban!");
            return;
        }
        //If author attempts to unban themself
        if (message.author.id === member.id) {
            message.reply("You can't unban yourself")
            return;
        } 
        //If targeted user exists
        if (member) {
            //Attempts to unban the targeted user
            try {
                message.guild.members.unban(member);
                //If there is a reason
                if (reason) {
                    message.channel.send(`<@${member}> has been unbanned by ${message.author} for ${reason}.`);
                };
                //If there isn't a reason
                if (!reason) {
                    message.reply(`<@${member}> was unbanned.`);
                };
                console.log(`<@${member}> was unbanned`);
                //If there's an error, it gets logged and an error message is sent
            }catch(e){
                console.log(e)
                message.reply(`${member} was unable to be unbanned`)}
        } else {
            message.reply(`${member} was unable to be unbanned`)
        }
    }
}