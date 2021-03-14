const { MessageEmbed } = require('discord.js');
const { botinfo } = require('../../config/config.json');

module.exports = {
    name: "info",
    description: "Gives info about anything about the bot.",
    alises: ['help'],
    execute(message, args, bot) {
        if (!args[0]) {
            return message.channel.send(
                new MessageEmbed()
                    .setTitle('ERROR')
                    .addField('Missing arguement!', 'Please include an arguement into the command!')
                    .setColor('ff0000')
                    .setFooter('For a list of commands, please do /info commands')
            );
        }

        const commandName = args[0];
        const command = bot.commands.get(commandName);

        if (command?.name) {
            const name = command.name.charAt(0).toUpperCase() + command.name.slice(1);
            const description = command.description;
            const syntax = command.syntax;
            const aliases = '[Coming Soon]';
            const category = command.category;

            const embed = new MessageEmbed()
                .setColor("#7289d9")
                .addField("Command", name, true)
                .addField("Syntax", `\`${syntax}\``, true)
                .addField("Description", description)
                .addField("Aliases", aliases, true)
                .addField("Category", category, true)
                .setTitle(name);

            return message.channel.send(embed);
        } else {
            //Server
            if (args[0] === "server") {
                //Creates embed
                let serverEmbed = new MessageEmbed()
                    .setColor("#7289d9")
                    .setTitle(`${message.guild.name}`)
                    .setThumbnail(`${message.guild.iconURL()}`)
                    .addField("Server ID: ", `\n${message.guild.id}`)
                    .addField("Server owner: ", "<@" + `${message.guild.ownerId}` + ">", true)
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
            if (args[0] === "user") {
                const taggedUser = message.mentions.users.first();

                if (!taggedUser) {
                    let invalidMemberEmbed = new MessageEmbed()
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
                    let memberEmbed = new MessageEmbed()
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
            if (args[0] === "commands") {
                //Creates embed
                let commandsEmbed = new MessageEmbed()
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
            if (args[0] === "version") {
                //Creates variables for the bot version and the last time it was updated from the config file
                let botversion = (botinfo.version);
                let botupdated = (botinfo.updatedLast);
                //Creates embed
                let versionEmbed = new MessageEmbed()
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
            if (args[0] == "stats") {
                //Creates uptime variables
                let totalSeconds = (bot.uptime / 1000);
                let days = Math.floor(totalSeconds / 86400);
                totalSeconds %= 86400;
                let hours = Math.floor(totalSeconds / 3600);
                totalSeconds %= 3600;
                let minutes = Math.floor(totalSeconds / 60);
                let seconds = Math.floor(totalSeconds % 60);
                //Creates embed
                let botStatsEmbed = new MessageEmbed()
                    .setColor("#7289d9")
                    .setTitle("Axle Stats")
                    .addField("Uptime", `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
                    .addField("Servers", `${bot.guilds.cache.size} servers`, true);
                //Sends embed
                return message.channel.send(botStatsEmbed);

            } else { //If the command isn't valid
                //If the arguement is invalid
                if (args[0]) {
                    errMsg1 = '**Invalid arguement!**';
                    errMsg2 = `"${args[1]}" is an invalid arguement!`;
                }
                //If there is no arguement
                if (!args[0]) {
                    errMsg1 = "**Missing arguement!**";
                    errMsg2 = "Please include an arguement into the command!";
                }
                //Creates embed
                let errEmbed = new MessageEmbed()
                    .setColor("#ff0000")
                    .setTitle("ERROR")
                    .addField(`${errMsg1}`, `\n${errMsg2}`)
                    .setFooter("For a list of commands, please do /info commands");
                //Sends embed
                message.channel.send(errEmbed);
            }
        }
    }
}