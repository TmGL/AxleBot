const Discord = require('discord.js');

module.exports = {
    name: "pin",
    syntaxt: '/pin',
    category: 'Utility',
    description: "Pins a message lol.",
    execute(message, args) {
        //If the message author doesn't have permission to pin messages
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to pin messages!");
        //Collects the two most recent messages (The message to pin and the command)
        message.channel.messages.fetch({limit: 2}).then((messages => {
            //Creates a constant for the last message (The message before the command)
            const pinMessage = messages.last();
            //Pins the message
            pinMessage.pin();
        }));
    }
}