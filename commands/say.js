module.exports = {
    name: "say",
    description: "The bot will say what you tell it to",
    execute(message, args) {

        //Creates variable of the user's message
        let sayMsg = message.content
        //Removes prefix from message
        let sendMsg = sayMsg.replace("/say", "")
        //If resulting message is blank
        if(!sendMsg){
            message.reply("Specify a message to say!")
            return;
        }
        //Sends message
        message.channel.send(sendMsg)
        //Deletes author's message
        message.delete({timeout: 1});
        return;
    }
}