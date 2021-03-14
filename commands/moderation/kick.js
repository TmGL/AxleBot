const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "Kicks the user from the server.",
    syntax: '/kick [user]',
    category: 'Moderation',
    execute(message, args) {
        const member = message.mentions.members.first();
        let reason = args.slice(2).join(" ");

        //If author doesn't have permissions
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.reply("You don't have permission to kick members!");
            return;
        } 
        //If bot doesn't have permissions
        if(!message.guild.me.hasPermission('KICK_MEMBERS')){
            message.reply("I don't have permission to kick members!");
            return;
        }
        //If author doesn't specify a valid user
        if (!member) {
            message.reply("Please specify a valid user to kick!");
            return;
        }
        //If author attemots to kick themself
        if (message.author.id === member.id){
            message.reply("You can't kick yourself")
            return;
        }
        //If targeted user has higher permission
        if(!member.kickable){
            message.reply("That user has higher permission than you!")
            return;
        }
        //If targeted user exists
        if (member) {
            //Attempts to kick the targeted user
            try {
                    member.kick();
                    //If there is a reason
                    if(reason){
                        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}.`);
                    };
                    //If there isn't a reason
                    if(!reason){
                        message.reply("<@" + member + ">" + " was kicked.");
                    };
                    console.log(member + " was kicked.");
                //If there's an error, it gets logged and an error message is sent
                } catch (err) {
                    message.reply(`${member} was unable to be kicked`)
                }
            } else {
                message.reply(`${member} was unable to be kicked`)
            }
        }
    }