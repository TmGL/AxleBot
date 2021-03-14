const Discord = require('discord.js');

module.exports = {
    name: "selfie",
    description: "Totally takes a selfie with your webcam.",
    category: 'Fun',
    syntax: '/selfie',
    execute(message) {
        //Tells you to look at your computer
        message.channel.send("Please look at your camera!");

        //Sends "status updates"
        setTimeout(function () {
            message.channel.send("**3...**")
        }, 4000);
        setTimeout(function () {
            message.channel.send("**2..**")
        }, 5000);
        setTimeout(function () {
            message.channel.send("**1...**")
        }, 6000);
        setTimeout(function () {
            message.channel.send("**Taking image...**");
        }, 8000);
        setTimeout(function () {
            message.channel.send("**Getting image...**");
        }, 11000);
        setTimeout(function () {
            message.channel.send("**Processing...**");
        }, 12500);
        setTimeout(function () {
            message.channel.send("**Image:**");
        }, 16500);
        setTimeout(function () {
            //Sends Selfie.jpg ("Uh oh stinky" orangutan)
            message.channel.send({
                files: ["../images/Selfie.jpg"]
            });
        }, 17000);
    }
}