const Discord = require('discord.js');

module.exports = {
    name: "blursed",
    description: "Sends a randomly selected blursed image.",
    execute(message, args) {
        let blursedImage = ["Blursed1.jpg", "Blursed2.png", "Blursed3.jpg", "Blursed4.jpg", "Blursed5.jpg", "Blursed6.jpg", "Blursed7.jpg", "Blursed8.jpg", "Blursed9.jpg", "Blursed10.jpg", "Blursed11.jpg", "Blursed12.jpg", "Blursed13.jpg", "Blursed14.jpg", "Blursed15.jpg", "Blursed16.jpg", "Blursed17.jpg", "Blursed18.jpg", "Blursed19.jpg", "Blursed20.jpg", "Blursed21.jpg", "Blursed22.jpg", "Blursed23.png", "Blursed24.png", "Blursed25.png", "Blursed26.jpg", "Blursed27.jpg", "Blursed28.jpg", "Blursed29.jpg", "Blursed30.jpg", "Blursed31.jpg", "Blursed32.jpg", "Blursed33.jpg", "Blursed34.jpg", "Blursed35.jpg", "Blursed36.jpg", "Blursed37.jpg", "Blursed38.jpg", "Blursed39.jpg", "Blursed40.jpg", "Blursed41.jpg", "Blursed42.jpg", "Blursed43.png", "Blursed44.jpg", "Blursed45.jpg", "Blursed46.jpg", "Blursed47.jpg", "Blursed48.jpg", "Blursed49.jpg", "Blursed50.jpg", ]

        let blursedSend = blursedImage[Math.floor(Math.random() * blursedImage.length)];

        message.channel.send({
            files: [`./images/Memes/Blursed/${blursedSend}`]
        });
    }
}