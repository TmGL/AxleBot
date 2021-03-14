const Discord = require('discord.js');

module.exports = {
    name: "cursed",
    description: "Sends a randomly selected cursed image.",
    execute(message, args) {
        let cursedImage = ["Cursed1.jpg", "Cursed2.jpg", "Cursed3.jpg", "Cursed4.jpg", "Cursed5.jpg", "Cursed6.png", "Cursed7.jpeg", "Cursed8.jpg", "Cursed9.jpg", "Cursed10.png", "Cursed11.jpg", "Cursed12.jpg", "Cursed13.jpeg", "Cursed14.jpg", "Cursed15.jpg", "Cursed16.jpg", "Cursed17.png", "Cursed18.jpg", "Cursed19.jpg", "Cursed20.jpg", "Cursed21.jpg", "Cursed22.jpg", "Cursed23.png", "Cursed24.jpg", "Cursed25.jpg", "Cursed26.jpg", "Cursed27.jpg", "Cursed28.jpg", "Cursed29.jpg", "Cursed30.jpg", "Cursed31.jpg", "Cursed32.jpg", "Cursed33.jpg", "Cursed34.jpg", "Cursed35.png", "Cursed36.jpg", "Cursed37.jpg", "Cursed38.jpg", "Cursed39.jpg", "Cursed40.jpg", "Cursed41.jpg", "Cursed42.jpg", "Cursed43.jpg", "Cursed44.jpg", "Cursed45.jpg", "Cursed46.png", "Cursed47.jpg", "Cursed48.jpg", "Cursed49.jpg", "Cursed50.jpg", ]

        let cursedSend = cursedImage[Math.floor(Math.random() * cursedImage.length)];

        message.channel.send({
            files: [`./images/Memes/Cursed/${cursedSend}`]
        });
    }
}