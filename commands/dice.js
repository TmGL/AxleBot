const Discord = require('discord.js');

module.exports = {
    name: "dice",
    description: "Rolls a die.",
    execute(message, args) {

        let choices = ["1", "2", "3", "4", "5", "6"]
        let response = choices[Math.floor(Math.random() * choices.length)];

        message.channel.send("**Rolling dice...**")
        setTimeout(function(){
            message.channel.send(`You rolled a **${response}**!`);
        }, 2000);
    }
}