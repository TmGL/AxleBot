const Discord = require('discord.js');

module.exports = {
    name: "invite",
    syntax: '/invite',
    category: 'Info',
    description: "Sends a link to invite Axle to your server.",
    execute(message, args) {

        let inviteEmbed = new Discord.MessageEmbed()
        .setColor("#7289d9")
        .addField(`Click here to invite me to your server!`, `[Invite!](https://discord.com/api/oauth2/authorize?client_id=616382189059178508&permissions=8&scope=bot)`)
        .addField(`Click this link to join the development/support server!`, `[Join!](https://discord.gg/eFVWFn8)`)
        .setFooter("Be sure to tell your friends, your teachers, and even your mom!")
    message.channel.send(inviteEmbed);
    }
}