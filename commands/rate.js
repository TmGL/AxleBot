const Discord = require('discord.js');

module.exports = {
    name: "rate",
    description: "Rates things.",
    async execute(message, args) {

        let halfStar = ("<:HalfStar:752551841937752075>")
        let darkStar = ("<:DarkStar:752551865073401937>")
        let rateMessage = message.content.slice(6);
        //Randomized ratings
        let choices = [`1/2 Stars \n${halfStar}${darkStar}${darkStar}${darkStar}${darkStar}`
        , `1 Star \n :star:${darkStar}${darkStar}${darkStar}${darkStar}`
        , `1 1/2 Stars \n :star:${halfStar}${darkStar}${darkStar}${darkStar}`
        , `2 Stars \n :star::star:${darkStar}${darkStar}${darkStar}`
        , `2 1/2 Stars \n :star::star:${halfStar}${darkStar}${darkStar}`
        , `3 Stars \n :star::star::star:${darkStar}${darkStar}`
        , `3 1/2 Stars \n :star::star::star:${halfStar}${darkStar}`
        , `4 Stars \n :star::star::star::star:${darkStar}`
        , `4 1/2 Stars \n :star::star::star::star:${halfStar}`
        , `5 Stars \n :star::star::star::star::star:`];
        //Randomizes the choices
        let response = choices[Math.floor(Math.random() * choices.length)];

        message.channel.send(`I rate **${rateMessage}** ${response}`)

    }
}