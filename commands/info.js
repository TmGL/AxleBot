const Discord = require('discord.js');
const {
    prefix,
    token,
    activity,
    botinfo
} = require('../config/config.json');

module.exports = {
    name: "info",
    description: "Gives info about anything about the bot.",
    execute(message, args, bot) {

        //Ban
        if (args[1] == "ban") {
            var name = "Ban";
            var syntax = "`/ban [user]`"
            var description = "Bans the specified user from the server"
            var aliases = "[Coming soon] `/bean` `/kill` `/b`"
            var category = "Moderation"
        };

        //Card
        if (args[1] == "card") {
            var name = "Card";
            var syntax = "`/card`"
            var description = "Draws a random card"
            var aliases = "[Coming soon] `/draw`"
            var category = "RNG"
        };

        //Clear
        if (args[1] == "clear") {
            var name = "Clear";
            var syntax = "`/clear [number]`"
            var description = "Deletes the specified number of messages"
            var aliases = "[Coming soon] `/purge` `/delete`"
            var category = "Moderation"
        };

        //Coinflip
        if (args[1] == "coinflip") {
            var name = "Coinflip";
            var syntax = "`/coinflip`"
            var description = "Deletes the specified number of messages"
            var aliases = "[Coming soon] `/purge` `/delete`"
            var category = "RNG"
        };

        //Dice
        if (args[1] == "dice") {
            var name = "Dice";
            var syntax = "`/dice`"
            var description = "Rolls a die"
            var aliases = "[Coming soon] `/die` `/roll`"
            var category = "RNG"
        };

        //GD
        if (args[1] == "gd") {
            var name = "GD";
            var syntax = "`/gd [valid field]`"
            var fields = "`Profile`"
            var description = "Does a whole bunch of GD stuff"
            var aliases = "[Coming soon] `/geometrydash`"
            var category = "Utility"
        };

        //Info
        if (args[1] == "info") {
            var name = "Info";
            var syntax = "`/info [valid field]`"
            var fields = "`Server`, `User`, `Commands`, `Version` `Stats`"
            var description = "Gives lots of info about Axle"
            var aliases = "`/help`"
            var category = "Info"
        };

        //Invite
        if (args[1] == "invite") {
            var name = "Invite";
            var syntax = "`/invite`"
            var description = "Sends the links to invite Axle to your server and to join the support/dev server"
            var aliases = "[Coming soon] `/join`"
            var category = "Info"
        };

        //Kick
        if (args[1] == "kick") {
            var name = "Kick";
            var syntax = "`/kick [user]`"
            var description = "Kicks the specified user from the server"
            var aliases = "[Coming soon] `/boot`"
            var category = "Moderation"
        };

        //Meme
        if (args[1] == "meme") {
            var name = "Meme";
            var syntax = "`/meme [valid field]`"
            var fields = "`Cursed`, `Blursed`, `Dank`"
            var description = "Does funny meme stuff"
            var aliases = "[Coming soon] `/funny`"
            var category = "Images"
        };

        //Nickname
        if (args[1] == "nickname") {
            var name = "Nickname";
            var syntax = "`/nickname [nick]`"
            var description = "Changes the bot's nickname"
            var aliases = "[Coming soon] `/name`"
            var category = "Config"
        };

        //Pin
        if (args[1] == "pin") {
            var name = "Pin";
            var syntax = "`/pin`"
            var description = "Pins the most recent message from that channel"
            var aliases = "[Coming soon] `/tack`"
            var category = "Utility"
        };

        //Ping
        if (args[1] == "ping") {
            var name = "Ping";
            var syntax = "`/ping`"
            var description = "Displays the bot's latency + a funny"
            var aliases = "`/latency`"
            var category = "Utility"
        };

        //Poll
        if (args[1] == "poll") {
            var name = "Poll";
            var syntax = "`/poll [question]`"
            var description = "Creates a poll"
            var aliases = "[Coming soon] `/question`"
            var category = "Utility"
        };

        //Quote
        if (args[1] == "quote") {
            var name = "Quote";
            var syntax = "`/quote`"
            var description = "Quotes a random message"
            var aliases = "[Coming soon] `/message`"
            var category = "Fun"
        };

        //RNG
        if (args[1] == "rng") {
            var name = "RNG";
            var syntax = "`/rng [max number]`"
            var description = "Picks a random number from one to the specified number"
            var aliases = "[Coming soon] `/number`"
            var category = "RNG"
        };

        //Say
        if (args[1] == "say") {
            var name = "Say";
            var syntax = "`/say [message]`"
            var description = "Makes Axle say something"
            var aliases = "[Coming soon] `/mimic`"
            var category = "Fun"
        };

        //Selfie
        if (args[1] == "selfie") {
            var name = "Selfie";
            var syntax = "`/selfie`"
            var description = "Uses high-tech webhooks and data streams to connect to your webcam and take a selfie"
            var aliases = "[Coming soon] `/picture`"
            var category = "Fun"
        };

        //Unban
        if (args[1] == "unban") {
            var name = "Unban";
            var syntax = "`/unban [user]`";
            var description = "Unbans the specified user from the server";
            var aliases = "[Coming soon] `/unbean`, `/unkill`, `/ub`";
            var category = "Moderation";
        };

        //If one of the command infos were triggered
        if (name) {
            //If there are different fields
            if (fields) {
                //Creates embed
                let infoEmbed = new Discord.MessageEmbed()
                    .setColor("#7289d9")
                    .setTitle(name)
                    .addField("Command", name, true)
                    .addField("Syntax", syntax, true)
                    .addField("Fields", fields)
                    .addField("Description", description)
                    .addField("Aliases", aliases, true)
                    .addField("Category", category, true);
                //Sends embed
                return message.channel.send(infoEmbed);
            };
            //Creates embed
            let infoEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle(name)
                .addField("Command", name, true)
                .addField("Syntax", syntax, true)
                .addField("Description", description)
                .addField("Aliases", aliases, true)
                .addField("Category", category, true);
            //Sends embed
            return message.channel.send(infoEmbed);
        }

        //Server
        if (args[1] === "server") {
            //Creates embed
            let serverEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle(`${message.guild.name}`)
                .setThumbnail(`${message.guild.iconURL()}`)
                .addField("Server ID: ", `\n${message.guild.id}`)
                .addField("Server owner: ", "<@" + `${message.guild.owner.id}` + ">", true)
                .addField("Server members: ", `\n${message.guild.memberCount}`, true)
                .addField("Verification Level: ", `\n${message.guild.verificationLevel}`, true)
                .addField("Server boosts: ", `\n${message.guild.premiumSubscriptionCount}`, true)
                .addField("Verified: ", `\n${message.guild.verified}`, true)
                .addField("Region: ", `\n${message.guild.region}`, true)
                .addField("Server created on: ", `\n${message.guild.createdAt.toDateString()}`)
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(serverEmbed);
            return;
        }
        //User
        if (args[1] === "user") {
            const taggedUser = message.mentions.users.first();

            if (!taggedUser) {
                let invalidMemberEmbed = new Discord.MessageEmbed()
                    .setColor("ff0000")
                    .setTitle("ERROR")
                    .addField("**Invalid user ID**", "The user ID you provided was not valid!")
                    .addField("**Syntax**", "Please do `/info user [tag]`")
                    .setFooter("Please be sure to report any bugs!");
                message.channel.send(invalidMemberEmbed);
                return;
            }
            if (taggedUser) {
                if (taggedUser.presence.status === "online") {
                    userStatus = "Online"
                };
                if (taggedUser.presence.status === "idle") {
                    userStatus = "Idle"
                };
                if (taggedUser.presence.status === "dnd") {
                    userStatus = "Do Not Disturb"
                };
                if (taggedUser.presence.status === "offline") {
                    userStatus = "Offline"
                };
                let memberEmbed = new Discord.MessageEmbed()
                    .setColor("#7289d9")
                    .setTitle(`${taggedUser.username}`)
                    .setThumbnail(`${taggedUser.avatarURL()}`)
                    .setFooter("Please be sure to report any bugs!")

                    .addField(`User ID:`, `\n${taggedUser.id}`)
                    .addField(`Tag:`, `\n${taggedUser.tag}`, true)
                    .addField(`Status`, `\n${userStatus}`, true)
                    .addField(`Display Name`, `\n${taggedUser}`, true)
                    .addField(`Avatar URL:`, `\n${taggedUser.avatarURL()}`)
                    .addField(`Registered on:`, `\n${taggedUser.createdAt.toDateString()}`);
                //Sends embed
                message.channel.send(memberEmbed);
                return;
            }
        }
        //Commands
        if (args[1] === "commands") {
            //Creates embed
            let commandsEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Commands")
                .addField("Info Commands: ", "`/info`, `/invite`, `/ping`", true)
                .addField("Utility Commands: ", "`/gd`, `/pin`, `/poll`", true)
                .addField("Server Commands: ", "\n`Coming soon!`", true)
                .addField("Moderation Commands: ", "`/ban`, `/clear`, `/kick`, `/unban`", true)
                .addField("Config Commands: ", "`/nickname`", true)
                .addField("Fun Commands: ", "`/quote`, `/say`, `/selfie`", true)
                .addField("Image Commands: ", "`/meme`", true)
                .addField("XP Commands: ", "\n`Coming soon!`", true)
                .addField("Currency Commands: ", "\n`Coming soon!`", true)
                .addField("Music Commands: ", "\n`Coming soon!`", true)
                .addField("Auto Commands: ", "\n`Creeper` `Hotel?` `Dad`", true)
                .addField("RNG Commands: ", "`/card`, `/coinflip`, `/dice`, `/rng`", true)
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(commandsEmbed);
            return;
        }
        //Version
        if (args[1] === "version") {
            //Creates variables for the bot version and the last time it was updated from the config file
            let botversion = (botinfo.version);
            let botupdated = (botinfo.updatedLast);
            //Creates embed
            let versionEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Version")
                .addField("Bot Version :", `\n${botversion}`)
                .addField("Last Updated: ", `\n${botupdated}`)
                .setFooter("Please be sure to report any bugs!");
            //Sends embed
            message.channel.send(versionEmbed);
            return;
        }
        //Stats
        if (args[1] == "stats") {
            //Creates uptime variables
            let totalSeconds = (bot.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            //Creates embed
            let botStatsEmbed = new Discord.MessageEmbed()
                .setColor("#7289d9")
                .setTitle("Axle Stats")
                .addField("Uptime", `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
                .addField("Servers", `${bot.guilds.cache.size} servers`, true);
            //Sends embed
            return message.channel.send(botStatsEmbed);

        } else { //If the command isn't valid
            //If the arguement is invalid
            if (args[1]) {
                errMsg1 = '**Invalid arguement!**';
                errMsg2 = `"${args[1]}" is an invalid arguement!`;
            }
            //If there is no arguement
            if (!args[1]) {
                errMsg1 = "**Missing arguement!**";
                errMsg2 = "Please include an arguement into the command!";
            }
            //Creates embed
            let errEmbed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("ERROR")
                .addField(`${errMsg1}`, `\n${errMsg2}`)
                .setFooter("For a list of commands, please do /info commands");
            //Sends embed
            message.channel.send(errEmbed);
        }
    }
}