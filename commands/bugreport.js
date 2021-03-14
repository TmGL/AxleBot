const Discord = require('discord.js');

module.exports = {
    name: "bugreport",
    description: "Reports bugs.",
    async execute(message, args, bot) {

        //Convert command into an array of variables
        let report = message.content.split(" | ");
        report[0] = report[0].slice(11);

        //Creates the embed
        let bugEmbed = new Discord.MessageEmbed()
            .setColor("#7289d9")
            .setTitle("Bug Report")
            .setDescription(`Sent by ${message.author}`)
            .addFields({
                name: 'Bug',
                value: report[0]
            }, {
                name: 'Command',
                value: report[1]
            }, {
                name: 'Description',
                value: report[2]
            });
        //Sends the embed into the dev/support server
        bot.channels.cache.get('753251109929484388').send(bugEmbed);
    }
}