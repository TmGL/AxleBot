const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: "coinflip",
    syntax: '/coinflip',
    category: 'RNG',
    description: "Flips a coin.",
    execute(message, args) {

        let choices = [`Heads`, `Tails`];
        let coin = choices[Math.floor(Math.random() * choices.length)];

        message.channel.send("**Flipping coin...**");
        setTimeout(function() {
            message.channel.send(`The coin landed on **${coin}**!`);
        }, 2000);
    }
}