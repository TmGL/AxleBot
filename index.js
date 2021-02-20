//Dependencies
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
//Config
const {
    prefix,
    token,
    activity,
    botinfo,
} = require('./config/config.json');

//Command handler
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

//When the bot starts
bot.once('ready', async () => {
    //Sets the bot's activity
    setInterval(() => {
        bot.user.setActivity(activity);
    }, 300000);
    console.log('yes');
});

//Logs the bot in
bot.login(token);

//When the bot is online
bot.on('message', async message => {
    if (message.author.bot) return;
    //Auto bot responses
    let responses = {
        "Creeper": "Aww man",
        "creeper": "aww man",
        "Hotel?": "Trivago.",
        "hotel?": "trivago.",
        "Hotel": "Trivago",
        "hotel": "trivago",
    };
    
    //Dad bot 2.0
    if (responses[message.content]) {
        message.channel.send(responses[message.content]);
    }
    const starts = ["i'm", "im"];
    const msgStart = message.content.split(/ +/)[0];
    if (starts.includes(msgStart)) {
        let msg = message.content.toLowerCase().slice(msgStart.includes("'") ? 4 : 3);
        let msg2 = message.content.slice(msgStart.includes("'") ? 4 : 3);
        let dadResponses = {
            "dad": "No you're not, silly!",
            "mom": "Hi honey!",
            "son": "Hey champ!",
            "axle": "T̴̎͒H̷͂̈́É̸̀R̶̡̾E̷̽̇ ̴̡͝C̶͗̈́Ȧ̵̌Ń̶͆ ̴͌͛O̵̭̅N̴̅̈́Ḻ̴̕Y̴̌̃ ̷̛̚B̶̈́̚E̶̛̍ ̴̋̑O̵͒͝Ń̸͊Ȇ̷̿",
            "axel": "Hey nerd :)))))",
            "gay": ["images/HiGay.jpg"]
        }
        if (dadResponses[msg]) {
            message.channel.send(dadResponses[msg]);
        } else {
            message.channel.send(`Hi ${msg2}, I'm Dad!`)
        }
    };

    //More command handler
    const args = message.content.substring(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName);

    //DM responses
    if (message.channel.type == "dm") {
        let choices = ["Why are you messaging a bot?", "Please leave me alone", ":clown:", "Poggers", "bruh.", "ok TRIGAM IS GONE I'M LOCKED IN HIS BASEMENT THE ADDRESS IS 13-", "Did you know that Joe has ligma?", "Yes?", "No, this is Axle", "Those are the words of someone who's died 13 times", "Alright", "Ok", "k", "kk", "Do I know you?", "Hello King", "Pizza time", "Big chungus", "Ok boomer", "Couldn't care less", "That seems a bit controversial", "You are real lucky that bots can't friend humans", "If only bots could friend people", "How may I help you?", "Aite", "`01000010 01100101 01100101 01110000 00100000 01100010 01101111 01101111 01110000 00100000 01100010 01101111 01110000`", "SHUT UP I'M PLAYING MINECRAFT", "Yesn't", "Cool", ":ok_hand:", "Oof", "*Angry Axle Noises*", "*(I'm on the phone)*", "Nah", "DMs are closed today", "Goodbye", "Cya", "Later", "See you later, alligator", "What is this place?", "*Snoring*", "ZzzZzzZzZZZ", "Why must you do this to me", "Interesting...", "...", "**SHHHH**, no talking", "So how's you're day been?", "<3", "tbh", "yeet", "Let's play 8 ball", "._.", ":)", ":(", ":|", ":/", "|:(", "lol", "lmao", "rofl", "I'd go with a big no", "I'd go with a big yes", "I'd go with a maybe", "nah", "It costed you $0 to NOT say that", "¯\_(ツ)_/¯", "( ͡° ͜ʖ ͡°)", "Funne \n \n bottom text", "Choppa moments", "Forward arial", "Why are you running?"]
        let response = choices[Math.floor(Math.random() * choices.length)];

        if (!bot.commands.has(commandName)) {
            message.author.send(response).catch(() => console.log(`I can't DM ${message.author.username}!`));
            console.log(`${message.author.username}: ${message.content}`);
            return;
        } else {
            try {
                return command.execute(message, args, bot);
            } catch (err) {
                message.reply('There was an error trying to execute that command!');
                console.error(err);
            }
        }
    };

    //Filter out bot messages or messages with no prefix
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    
    // Execute command or catch the error
    try {
        command.execute(message, args, bot);
    } catch (err) {
        message.reply('There was an error trying to execute that command!');
        console.error(err);
    }
});
