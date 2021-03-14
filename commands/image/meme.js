const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "meme",
    description: "Lots of meme stuff.",
    category: 'Images',
    syntax: '/meme [valid field]',
    async execute(message, args) {

        if (args[1] == "blursed") {
            let choices = Array.from(Array(50).keys());
            let response = choices[Math.floor(Math.random() * choices.length)];
            message.channel.send({
                files: [`http://trigamyt.com/discord-bots/axle/axle-memes/Blursed/Blursed${response}.png`]
            });
        }
        if (args[1] == "cursed") {
            let choices = Array.from(Array(50).keys());
            let response = choices[Math.floor(Math.random() * choices.length)];
            message.channel.send({
                files: [`http://trigamyt.com/discord-bots/axle/axle-memes/Cursed/Cursed${response}.png`]
            });
        }
        if (args[1] == "dank") {
            let choices = Array.from(Array(50).keys());
            let response = choices[Math.floor(Math.random() * choices.length)];
            message.channel.send({
                files: [`http://trigamyt.com/discord-bots/axle/axle-memes/Dank/Dank${response}.png`]
            });
        }
        if (!args[1]) {
            let errEmbed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("ERROR")
                .addField(`Missing Arguement!`, `Please include an arguement`)
                .setFooter("Valid arguements are dank, blursed, and cursed");
            //Sends embed
            message.channel.send(errEmbed);
        }
    }
}