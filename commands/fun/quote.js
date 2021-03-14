const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: "quote",
    description: "Sends a random message from the server.",
    category: 'Fun',
    syntax: '/quote',
    execute(message, args) {

        message.channel.messages.fetch({
            limit: 50
        }).then((messages => {
            try {

                let arr = messages.array();

                let response = arr[Math.floor(Math.random() * arr.length)];

                if (response.attachments.size > 0) {
                    const attach = response.attachments.array()[0].url;

                        message.channel.send(`> ${response.content} ${attach} \n${response.author}`);
                        return;
                } else {
                    message.channel.send(`> ${response.content} \n${response.author}`);
                }
            } catch (error) {
                console.log(error)
            }
        }));
    }
}