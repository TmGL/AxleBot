const Discord = require('discord.js');
const fetch = require('node-fetch');
const Canvas = require('canvas');

module.exports = {
    name: "gd",
    syntaxt: '/gd [valid field]',
    category: 'Utility',
    description: "Does GD stuff.",
    async execute(message, args) {

        //Profiles
        if (args[1] == "profile") {
            message.channel.send("**Getting data...** (This might take a bit)");
            let search = message.content.slice(12);
            try {
                var profile = await fetch(`https://www.gdbrowser.com/api/profile/${search}`).then(response => response.json());
                var robtop = await fetch(`https://www.gdbrowser.com/api/profile/robtop`).then(response => response.json());
                var trigam = await fetch(`https://www.gdbrowser.com/api/profile/trigam`).then(response => response.json());
            } catch (error) {
                return message.channel.send("There was a problem connecting to the GD servers!");
            }
            //If there's no specified profile
            if (!search) {
                return message.channel.send("Please specify a valid GD username/ID!");
                //If sent data is equal to -1
            } else if (profile == "-1") {
                return message.channel.send("Please specify a valid GD username/ID!");
                //If not searching for RobTop
            } else if (search !== robtop) {
                //If sent data is equal to RobTop's data
                if (profile == robtop) {
                    return message.channel.send("There was a problem connecting to the GD servers!");
                }
                //If searching for RobTop
            } else if (search == robtop) {
                //If sent data is equal to Trigam
                if (profile == trigam) {
                    return message.channel.send("There was a problem connecting to the GD servers!");
                }
            } else

                //Register fonts
                Canvas.registerFont('./images/GD/Fonts/Gooddog.ttf', {
                    family: 'GoodDog Plain'
                });
            Canvas.registerFont('./images/GD/Fonts/Pusab.otf', {
                family: 'Pusab'
            });

            //Set up canvas
            const canvas = Canvas.createCanvas(1000, 450);
            const ctx = canvas.getContext('2d');

            //Initialize Images
            const background = await Canvas.loadImage('./images/GD/Profile Parts/Profile.png');
            const rank = await Canvas.loadImage('./images/GD/Profile Parts/Rank.png');
            const friends = await Canvas.loadImage('./images/GD/Profile Parts/Friend Requests.png');
            const friendsNo = await Canvas.loadImage('./images/GD/Profile Parts/No Friend Requests.png');
            const messages = await Canvas.loadImage('./images/GD/Profile Parts/Messages.png');
            const messagesFriends = await Canvas.loadImage('./images/GD/Profile Parts/Messages Friends.png')
            const messagesNo = await Canvas.loadImage('./images/GD/Profile Parts/No Messages.png');
            const youtube = await Canvas.loadImage('./images/GD/Profile Parts/YouTube.png');
            const twitter = await Canvas.loadImage('./images/GD/Profile Parts/Twitter.png');
            const twitch = await Canvas.loadImage('./images/GD/Profile Parts/Twitch.png');
            const comments = await Canvas.loadImage('./images/GD/Profile Parts/Comments.png');
            const friendComments = await Canvas.loadImage('./images/GD/Profile Parts/Friend Comments.png');
            const noComments = await Canvas.loadImage('./images/GD/Profile Parts/No Comments.png');
            const iconCube = await Canvas.loadImage(`https://gdbrowser.com/icon/${search}?form=cube&size=62`);
            const iconShip = await Canvas.loadImage(`https://gdbrowser.com/icon/${search}?form=ship&size=96`);
            const iconBall = await Canvas.loadImage(`https://gdbrowser.com/icon/${search}?form=ball&size=72`);
            const iconUFO = await Canvas.loadImage(`https://gdbrowser.com/icon/${search}?form=ufo&size=76`);
            const iconWave = await Canvas.loadImage(`https://gdbrowser.com/icon/${search}?form=wave&size=52`);
            const iconRobot = await Canvas.loadImage(`https://gdbrowser.com/icon/${search}?form=robot&size=74`);
            const iconSpider = await Canvas.loadImage(`https://gdbrowser.com/icon/${search}?form=spider&size=86`);
            const iconSwing = await Canvas.loadImage(`https://gdbrowser.com/icon/${search}?form=swing&size=60`);
            const star = await Canvas.loadImage('./images/GD/Profile Parts/Star.png');
            const diamond = await Canvas.loadImage('./images/GD/Profile Parts/Diamond.png');
            const coin = await Canvas.loadImage('./images/GD/Profile Parts/Coin.png');
            const userCoin = await Canvas.loadImage('./images/GD/Profile Parts/User Coin.png');
            const demon = await Canvas.loadImage('./images/GD/Profile Parts/Demon.png');
            const cp = await Canvas.loadImage('./images/GD/Profile Parts/CP.png');
            const mod = await Canvas.loadImage('./images/GD/Profile Parts/Mod.png');
            const elderMod = await Canvas.loadImage('./images/GD/Profile Parts/Elder Mod.png');

            //Draw Background
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            //Text
            ctx.textAlign = "center";
            ctx.fillStyle = '#ffffff';

            //Global Rank
            ctx.font = "20px sans-serif";
            ctx.fillText(`${profile.rank}`, 140, 70, 130);
            ctx.font = '30px GoodDog Plain';
            ctx.fillText("Global Rank", 140, 43, 130);

            //Username
            ctx.shadowOffsetX = 4;
            ctx.shadowOffsetY = 4;
            ctx.shadowColor = 'rgba(0, 0, 0, 0.81)'
            ctx.shadowBlur = 3;
            ctx.strokeStyle = 'dark-gray';
            ctx.lineWidth = '2.5';
            ctx.font = "60px Pusab";
            ctx.fillText(`${profile.username}`, 501, 70);
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.strokeStyle = 'dark-gray';
            ctx.strokeText(`${profile.username}`, 501, 70);

            //IDs
            ctx.textAlign = "left";
            ctx.font = '15px sans-serif';
            ctx.fillStyle = '#db7553';
            ctx.fillText(`AccountID: ${profile.accountID}`, 15, 410);
            ctx.fillText(`PlayerID: ${profile.playerID}`, 15, 430);

            //Stats
            ctx.lineWidth = '2';
            ctx.textAlign = "center";
            ctx.fillStyle = "white";
            ctx.font = "40px Pusab";
            //Stars
            ctx.shadowOffsetX = 4;
            ctx.shadowOffsetY = 4;
            ctx.shadowBlur = 3;
            ctx.lineWidth = 2.5;
            ctx.fillText(`${profile.stars}`, 200, 175);
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.strokeText(`${profile.stars}`, 200, 175);
            //Diamonds
            ctx.shadowOffsetX = 4;
            ctx.shadowOffsetY = 4;
            ctx.shadowBlur = 3;
            ctx.lineWidth = 2.5;
            ctx.fillText(`${profile.diamonds}`, 350, 175);
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.strokeText(`${profile.diamonds}`, 350, 175);
            //Coins
            ctx.shadowOffsetX = 4;
            ctx.shadowOffsetY = 4;
            ctx.shadowBlur = 3;
            ctx.lineWidth = 2.5;
            ctx.fillText(`${profile.coins}`, 480, 175);
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.strokeText(`${profile.coins}`, 480, 175);
            //User Coins
            ctx.shadowOffsetX = 4;
            ctx.shadowOffsetY = 4;
            ctx.shadowBlur = 3;
            ctx.lineWidth = 2.5;
            ctx.fillText(`${profile.userCoins}`, 600, 175);
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.strokeText(`${profile.userCoins}`, 600, 175);
            //Demons
            ctx.shadowOffsetX = 4;
            ctx.shadowOffsetY = 4;
            ctx.shadowBlur = 3;
            ctx.lineWidth = 2.5;
            ctx.fillText(`${profile.demons}`, 730, 175);
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.strokeText(`${profile.demons}`, 730, 175);
            //CP
            ctx.shadowOffsetX = 4;
            ctx.shadowOffsetY = 4;
            ctx.shadowBlur = 3;
            ctx.lineWidth = 2.5;
            ctx.fillText(`${profile.cp}`, 820, 175);
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.strokeText(`${profile.cp}`, 820, 175);

            //Stat Icons
            ctx.drawImage(star, 180, 100, 40, 40)
            ctx.drawImage(diamond, 330, 100, 40, 40)
            ctx.drawImage(coin, 460, 100, 40, 40)
            ctx.drawImage(userCoin, 580, 100, 40, 40)
            ctx.drawImage(demon, 710, 100, 45, 40)
            ctx.drawImage(cp, 800, 100, 45, 40)

            //Icons
            ctx.drawImage(rank, 20, 25, 50, 41);
            ctx.drawImage(iconCube, 135, 209);
            ctx.drawImage(iconShip, 214, 195);
            ctx.drawImage(iconBall, 326, 206);
            ctx.drawImage(iconUFO, 418, 204);
            ctx.drawImage(iconWave, 521, 216);
            ctx.drawImage(iconRobot, 592, 202);
            ctx.drawImage(iconSpider, 689, 199);
            ctx.drawImage(iconSwing, 802, 210);

            //Buttons
            if (profile.friendRequests == true) {
                ctx.drawImage(friends, 420, 365, 70, 70);
            }
            if (profile.friendRequests == false) {
                ctx.drawImage(friendsNo, 420, 365, 70, 70);
            }
            if (profile.messages == "all") {
                ctx.drawImage(messages, 510, 365, 70, 70);
            }
            if (profile.messages == "friends") {
                ctx.drawImage(messagesFriends, 510, 365, 70, 70);
            }
            if (profile.messages == "off") {
                ctx.drawImage(messagesNo, 510, 365, 70, 70);
            }
            if (profile.youtube !== null) {
                ctx.drawImage(youtube, 925, 20, 60, 60);
            }
            if (profile.twitter !== null) {
                ctx.drawImage(twitter, 925, 85, 60, 60);
            }
            if (profile.twitch !== null) {
                ctx.drawImage(twitch, 925, 150, 60, 60);
            }
            if (profile.commentHistory == "all") {
                ctx.drawImage(comments, 920, 230, 70, 70);
            }
            if (profile.commentHistory == "friends") {
                ctx.drawImage(friendComments, 920, 230, 70, 70)
            }
            if (profile.commentHistory == "off") {
                ctx.drawImage(noComments, 920, 230, 70, 70)
            }
            if (profile.moderator == "1") {
                ctx.drawImage(mod, 220, 25, 50, 50)
            }
            if (profile.moderator == "2") {
                ctx.drawImage(elderMod, 220, 25, 50, 50)
            }
            //Send profile image
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile-image.png');
            message.channel.send(attachment);

            if (profile.youtube) {
                var youtubeField = `${profile.username}'s [YouTube](https://www.youtube.com/channel/${profile.youtube})`
            } else {
                var youtubeField = `No YouTube!`
            };

            if (profile.twitter) {
                var twitterField = `${profile.username}'s [Twitter](https://www.youtube.com/channel/${profile.youtube})`
            } else {
                var twitterField = `No Twitter!`
            };

            if (profile.twitch) {
                var twitchField = `${profile.username}'s [Twitch](https://www.twitch.tv/${profile.twitch})`
            } else {
                var twitchField = `No Twitch!`
            }
            let linkEmbed = new Discord.MessageEmbed()
                .setTitle("Links")
                .setColor("#7289d9")
                .addFields({
                    name: `YouTube`,
                    value: youtubeField,
                    inline: true
                }, {
                    name: "Twitter",
                    value: twitterField,
                    inline: true
                }, {
                    name: "Twitch",
                    value: twitchField,
                    inline: true
                });
            await message.channel.send(linkEmbed);
        }

        //Searching levels
        if (args[1] == "search") {
            let level = message.content.slice(11);
            if (args[3] == "download") {
                const search = await fetch(`https://www.gdbrowser.com/api/search/${level}?download`)
            };
            const search = await fetch(`https://www.gdbrowser.com/api/search/${level}`)
                .then(response => response.json());

            if (!level) {
                message.channel.send("Please specify a GD level!");
                return;
            } else if (search == "-1") {
                message.channel.send("Please specify a valid GD level!");
            } else {
                let searchEmbed = new Discord.MessageEmbed()
                    .setColor("#7289d9")
                    .setTitle(`${level}`)
                    .addField("Name", search.name)

                message.channel.send(searchEmbed);
                message.channel.send(search)
                return;
            }
        }

        //Levels
        if (args[1] == "level") {
            // /gd level [level]
            let id = args[2];
            const level = await fetch(`https://www.gdbrowser.com/api/level/${id}`).then(response => response.json());

            if (!id) {
                return message.channel.send("Please specify a level ID!");
            } else if (level == "-1") {
                return message.channel.send("Please specify a valid level ID!")
            } else {

                Canvas.registerFont('./images/GD/Fonts/Pusab.otf', {
                    family: 'Pusab'
                });

                //Set up canvas
                const canvas = Canvas.createCanvas(1000, 450);
                const ctx = canvas.getContext('2d');

                //Initialize Images
                const background = await Canvas.loadImage('./images/GD/Level Parts/Level.png');
                const description = await Canvas.loadImage('./images/GD/Level Parts/Description.png');
                const downloads = await Canvas.loadImage('./images/GD/Level Parts/Downloads.png');
                const thumbsup = await Canvas.loadImage('./images/GD/Level Parts/Thumbs Up.png');
                const time = await Canvas.loadImage('./images/GD/Level Parts/Time.png');
                const unrated = await Canvas.loadImage('./images/GD/Level Parts/Unrated.png');
                const auto = await Canvas.loadImage('./images/GD/Level Parts/Auto.png');
                const easy = await Canvas.loadImage('./images/GD/Level Parts/Easy.png');
                const normal = await Canvas.loadImage('./images/GD/Level Parts/Normal.png');
                const hard = await Canvas.loadImage('./images/GD/Level Parts/Hard.png');
                const harder = await Canvas.loadImage('./images/GD/Level Parts/Harder.png');
                const insane = await Canvas.loadImage('./images/GD/Level Parts/Insane.png');
                const easyDemon = await Canvas.loadImage('./images/GD/Level Parts/Easy Demon.png');
                const mediumDemon = await Canvas.loadImage('./images/GD/Level Parts/Medium Demon.png');
                const hardDemon = await Canvas.loadImage('./images/GD/Level Parts/Hard Demon.png');
                const insaneDemon = await Canvas.loadImage('./images/GD/Level Parts/Insane Demon.png');
                const extremeDemon = await Canvas.loadImage('./images/GD/Level Parts/Extreme Demon.png');
                const featured = await Canvas.loadImage('./images/GD/Level Parts/Featured.png');
                const epic = await Canvas.loadImage('./images/GD/Level Parts/Epic.png');
                const stars = await Canvas.loadImage('')

                //Draw Background
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

                //Text
                ctx.fillStyle = "white";
                ctx.font = "60px Pusab";
                ctx.textAlign = "center";
                //Name
                ctx.shadowColor = 'rgba(0, 0, 0, 0.81)'
                ctx.shadowOffsetX = 4;
                ctx.shadowOffsetY = 4;
                ctx.shadowBlur = 3;
                ctx.lineWidth = 2.5;
                ctx.fillText(`${level.name}`, canvas.width / 2, 50);
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
                ctx.strokeText(`${level.name}`, canvas.width / 2, 50);
                //Author
                ctx.fillStyle = "gold";
                ctx.font = "50px Pusab";
                ctx.lineWidth = 2;
                ctx.fillText(level.author, canvas.width / 2, 100);
                ctx.strokeText(level.author, canvas.width / 2, 100);
                //Song Name
                ctx.fillStyle = "white";
                ctx.textAlign = "left";
                ctx.font = "35px Pusab";
                ctx.lineWidth = 1.5;
                ctx.fillText(level.songName, 255, 360);
                ctx.strokeText(level.songName, 255, 360);
                //Song Author
                ctx.fillStyle = "gold";
                ctx.font = "32px Pusab";
                ctx.lineWidth = 1.2;
                ctx.fillText(`By: ${level.songAuthor}`, 255, 390);
                ctx.strokeText(`By: ${level.songAuthor}`, 255, 390);
                //Description
                ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
                ctx.drawImage(description, 283, 150);
                ctx.font = "25px sans-serif"
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                //Description Text Wrap
                maxWidth = 415;
                lineHeight = 25;
                var x = canvas.width / 2;
                var y = 180;
                var words = level.description.split(/[ /]/);
                var line = '';
                for (var n = 0; n < words.length; n++) {
                    var testLine = line + words[n] + ' ';
                    var metrics = ctx.measureText(testLine);
                    var testWidth = metrics.width;
                    if (testWidth > maxWidth && n > 0) {
                        ctx.fillText(line, x, y);
                        line = words[n] + ' ';
                        y += lineHeight;
                    } else {
                        line = testLine;
                    }
                }
                ctx.fillText(line, x, y);
                //Stats
                //Downloads
                ctx.drawImage(downloads, 740, 120, 40, 40);
                ctx.fillStyle = "white";
                ctx.textAlign = "left";
                ctx.font = "35px Pusab";
                ctx.lineWidth = 1.5;
                ctx.textBaseline = "alphabetic";
                ctx.fillText(level.downloads, 790, 153);
                ctx.strokeText(level.downloads, 790, 153);
                //Likes
                ctx.drawImage(thumbsup, 740, 170, 40, 40);
                ctx.fillText(level.likes, 790, 206);
                ctx.strokeText(level.likes, 790, 206);
                //Time
                ctx.drawImage(time, 740, 225, 40, 40);
                ctx.fillText(level.length, 790, 255);
                ctx.strokeText(level.length, 790, 255);
                //Featured/Epic
                if (level.featured == true) {
                    const difficulties = ["Auto", "Easy", "Normal", "Hard", "Harder", "Insane"]
                    if (difficulties.includes(level.difficulty)) {
                        if (level.epic == true) {
                            ctx.drawImage(epic, 138, 104, 75, 75);
                        } else {
                            ctx.drawImage(featured, 140.5, 111, 69, 68);
                        }
                    };
                    if (level.difficulty == "Easy Demon") {
                        if (level.epic == true) {
                            ctx.drawImage(epic, 140.5, 104, 75, 75);
                        } else {
                            ctx.drawImage(featured, 143, 111, 69, 68);
                        }
                    }
                    if (level.difficulty == "Medium Demon") {
                        if (level.epic == true) {
                            ctx.drawImage(epic, 141.5, 104, 75, 75);
                        } else {
                        ctx.drawImage(featured, 144, 111, 69, 68);
                        }
                    }
                    if (level.difficulty == "Hard Demon") {
                        if (level.epic == true) {
                            ctx.drawImage(epic, 141.5, 107, 75, 75);
                        } else {
                        ctx.drawImage(featured, 144.3, 114, 69, 68);
                        }
                    }
                    if (level.difficulty == "Insane Demon") {
                        if (level.epic == true) {
                            ctx.drawImage(epic, 143, 107, 75, 75);
                        } else {
                        ctx.drawImage(featured, 145.5, 114, 69, 68);
                        }
                    }
                    if (level.difficulty == "Extreme Demon") {
                        if (level.epic == true) {
                            ctx.drawImage(epic, 145, 109, 75, 75);
                        } else {
                        ctx.drawImage(featured, 148.5, 116, 69, 68);
                        }
                    }
                }
                //Difficulty
                let difficultyWords = level.difficulty.split(' ')
                if (level.difficulty == "Unrated") {
                    ctx.drawImage(unrated, 150, 120, 50, 50);
                };
                if (level.difficulty == "Auto") {
                    ctx.drawImage(auto, 150, 120, 50, 50);;
                };
                if (level.difficulty == "Easy") {
                    ctx.drawImage(easy, 150, 120, 50, 50);
                };
                if (level.difficulty == "Normal") {
                    ctx.drawImage(normal, 150, 120, 50, 50);
                };
                if (level.difficulty == "Hard") {
                    ctx.drawImage(hard, 150, 120, 50, 50);
                };
                if (level.difficulty == "Harder") {
                    ctx.drawImage(harder, 150, 120, 50, 50);
                };
                if (level.difficulty == "Insane") {
                    ctx.drawImage(insane, 150, 120, 50, 50);
                };
                if (level.difficulty == "Easy Demon") {
                    ctx.drawImage(easyDemon, 150, 120, 55, 50);
                    var demonText = level.difficulty.split(" ");
                };
                if (level.difficulty == "Medium Demon") {
                    ctx.drawImage(mediumDemon, 150, 120, 57, 50);
                    var demonText = level.difficulty.split(" ");
                };
                if (level.difficulty == "Hard Demon") {
                    ctx.drawImage(hardDemon, 150, 120, 58, 53);
                    var demonText = level.difficulty.split(" ");
                };
                if (level.difficulty == "Insane Demon") {
                    ctx.drawImage(insaneDemon, 150, 120, 61, 53);
                    var demonText = level.difficulty.split(" ");
                };
                if (level.difficulty == "Extreme Demon") {
                    ctx.drawImage(extremeDemon, 150, 120, 66, 55);
                    var demonText = level.difficulty.split(" ");
                };
                ctx.textAlign = "center"
                if (demonText) {
                    ctx.fillText(demonText[0], 177, 210);
                    ctx.strokeText(demonText[0], 177, 210);
                    ctx.fillText(demonText[1], 177, 240);
                    ctx.strokeText(demonText[1], 177, 240);
                } else {
                    ctx.fillText(level.difficulty, 175, 210);
                    ctx.strokeText(level.difficulty, 175, 210);
                };
                //Stars
                if(level.featured == true){

                }

                let levelEmbed = new Discord.MessageEmbed()
                    .setColor("#7289d9")
                    .setTitle(level.name)
                    .addFields({
                        name: "ID",
                        value: level.id,
                        inline: true
                    }, {
                        name: "Version",
                        value: level.gameVersion,
                        inline: true
                    }, {
                        name: "Original ID",
                        value: level.copiedID,
                        inline: true
                    }, {
                        name: "Two Player",
                        value: level.twoPlayer,
                        inline: true
                    }, {
                        name: "Official Song",
                        value: level.officialSong,
                        inline: true
                    }, {
                        name: "Custom Song",
                        value: level.customSong,
                        inline: true
                    }, {
                        name: "Coins",
                        value: level.coins,
                        inline: true
                    }, {
                        name: "Verified Coins",
                        value: level.verifiedCoins,
                        inline: true
                    }, {
                        name: "Stars Requested",
                        value: level.starsRequested,
                        inline: true
                    }, {
                        name: "Objects",
                        value: level.objects,
                        inline: true
                    }, {
                        name: "Large",
                        value: level.large,
                        inline: true
                    }, {
                        name: "CP",
                        value: level.cp,
                        inline: true
                    }, {
                        name: "Difficulty Face",
                        value: level.difficultyFace,
                        inline: true
                    }, {
                        name: "Song Size",
                        value: level.songSize,
                        inline: true
                    }, {
                        name: "Song ID",
                        value: level.songID,
                        inline: true
                    });
                //Send profile image
                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'level-image.png');
                message.channel.send(attachment);
                return message.channel.send(levelEmbed);
            }
        }
    }
}