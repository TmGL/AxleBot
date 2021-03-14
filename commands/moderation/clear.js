const Discord = require('discord.js');

module.exports = {
    name: "clear",
    description: "Bulk deletes messages.",
    syntax: '/clear [number]',
    category: 'Moderation',
    async execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')){
            return message.reply("You don't have permission to manage messages!");
        }
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
            return message.reply("I don't have permission to manage messages!");
        }
        if(args[1] > 100){
            return message.channel.send("The number of messages must be under 100!")
        }
        async function clear() {
            var int = Number(args[1]);
            int++;
            const fetched = await message.channel.messages.fetch({limit: int});
            message.channel.bulkDelete(fetched);
        }
        try {
            clear();   
        } catch (error) {
            message.channel.send("I was unable to clear the messages!")
        }

    }
}