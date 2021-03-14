const Discord = require('discord.js');

module.exports = {
    name: "dank",
    description: "Sends a randomly selected dank meme.",
    execute(message, args) {
        let dankImage = ["Meme1.png", "Meme2.png", "Meme3.png", "Meme4.png", "Meme5.png", "Meme6.png", "Meme7.png", "Meme8.png", "Meme9.jpg", "Meme10.png", "Meme11.jpg", "Meme12.jpg", "Meme13.png", "Meme14.jpg", "Meme15.jpg", "Meme16.jpg", "Meme17.jpg", "Meme18.jpg", "Meme19.jpg", "Meme20.jpg", "Meme21.jpg", "Meme22.png", "Meme23.png", "Meme24.jpg", "Meme25.jpg", "Meme26.jpg", "Meme27.jpg", "Meme28.jpg", "Meme29.jpg", "Meme30.png", "Meme31.jpg", "Meme32.jpg", "Meme33.jpg", "Meme34.jpg", "Meme35.jpg", "Meme36.jpg", "Meme37.jpg", "Meme38.png", "Meme39.jpg", "Meme40.png", "Meme41.jpg", "Meme42.jpg", "Meme43.jpg", "Meme44.jpg", "Meme45.png", "Meme46.jpg", "Meme47.jpg", "Meme48.jpg", "Meme49.png", "Meme50.png"]

        let dankSend = dankImage[Math.floor(Math.random() * dankImage.length)];

        message.channel.send({
            files: [`./images/Memes/Dank/${dankSend}`]
        });
    }
}