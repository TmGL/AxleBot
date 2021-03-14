const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

module.exports = {
    name: "urban",
    description: "Gets definitions from the Urban Dictionary.",
    async execute(message, args) {

        if (!args.length) {
            return message.channel.send("Please supply a search term!")
        };

        const query = querystring.stringify({
            term: args.join(' ').slice(6)
        });

        const {
            list
        } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

        if (!list.length) {
            return message.channel.send(`No results found for **${args.join(' ').slice(6)}**`)
        }

        const [answer] = list;
        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        if (answer.example) {
            const urbanEmbed1 = new Discord.MessageEmbed()
                .setColor('#7289d9')
                .setTitle(answer.word)
                .setURL(answer.permalink)
                .addFields({
                    name: 'Definition',
                    value: trim(answer.definition.replace(/[\[\]]+/g, ''), 1024)
                }, {
                    name: 'Example',
                    value: trim(answer.example.replace(/[\[\]]+/g, ''), 1024)
                }, {
                    name: 'Rating',
                    value: `👍 ${answer.thumbs_up}\n\n👎 ${answer.thumbs_down}`
                });
            message.channel.send(urbanEmbed1);
            return;
        };
        if (!answer.example) {
            const urbanEmbed2 = new Discord.MessageEmbed()
                .setColor('#EFFF00')
                .setTitle(answer.word)
                .setURL(answer.permalink)
                .addFields({
                    name: 'Definition',
                    value: trim(answer.definition.replace(/[\[\]]+/g, ''), 1024)
                }, {
                    name: 'Rating',
                    value: `${answer.thumbs_up} thumbs up. \n${answer.thumbs_down} thumbs down.`
                });
            message.channel.send(urbanEmbed2);
            return;
        };
    }
}