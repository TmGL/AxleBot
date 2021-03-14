const Discord = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
    name: "qr",
    description: "Generates a qr code.",
    async execute(message, args) {
        if (args[1] == "create") {
            let qrText = message.content.slice('11');
            let search = qrText.replace(/\s/g, "%20")
            return message.channel.send(`http://api.qrserver.com/v1/create-qr-code/?data=${search}&size=100x100`)
        }
        if (args[1] == "read") {
            if (!message.attachments.size > 0) {
                if (!args[2]) {
                    return message.channel.send("Please add a link/image");
                } else {
                    let qr = message.content.slice(9)
                    let link = qr.replace(/\s/g, "");
                    var fetched = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${link}`).then(response => response.json());
                    if (fetched[0].symbol[0].data == null) {
                        return message.channel.send("I was unable to read that link!")
                    } else {
                        return message.channel.send(fetched[0].symbol[0].data)
                    }
                }
            }
        };

        if (message.attachments.size > 0) {
            let qr = (message.attachments).array();
            var fetched = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${qr[0].attachment}`).then(response => response.json());
            if (fetched[0].symbol[0].data == null) {
                return message.channel.send("I was unable to read that image!")
            } else {
                return message.channel.send(fetched[0].symbol[0].data)
            }
        };

    }
}