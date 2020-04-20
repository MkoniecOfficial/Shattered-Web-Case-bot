const { Client, RichEmbed } = require("discord.js");
const { config } = require("dotenv");
const market = require('steam-market-pricing');
const​ ​config​ ​=​ ​require​(​"​./config.json​"​);

const client = new Client({
    disableEveryone: true
})

config({
    path: __dirname + "/.env"
})

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "me getting developed",
            type: "WATCHING"
        }
    }); 
})


bot​.​on​(​"​ready​"​, ​async​ () ​=>​ {
  ​console​.​log​(​`​${​bot​.​user​.​username​}​ is ready for action!​`​);
  ​if​ (​config​.​activity​.​streaming​ ​==​ ​true​) {
    ​bot​.​user​.​setActivity​(​config​.​activity​.​game​, {url​:​ ​'​https://twitch.tv/mkoniec'​});
  } ​else​ {
    ​bot​.​user​.​setActivity​(​config​.​activity​.​game​, {type​:​ ​'​WATCHING​'​});​ //​PLAYING, LISTENING, WATCHING​
    ​bot​.​user​.​setStatus​(​'​dnd​'​); ​//​ dnd, idle, online, invisible​
  }
});




client.on("message", async message => {
    const prefix = "!";

    // If the author's a bot, return
    // If the message was not sent in a server, return
    // If the message doesn't start with the prefix, return
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // Arguments and command variable
    // cmd is the first word in the message, aka the command
    // args is an array of words after the command
    // !say hello I am a bot
    // cmd == say (because the prefix is sliced off)
    // args == ["hello", "I", "am", "a", "bot"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();


    if (cmd === "ping") {
        // Send a message
        const msg = await message.channel.send(`🏓 Pinging....`);

        // Edit the message
        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
    }

    if (cmd === "case") {
        // Send a message about case

        const market = require('steam-market-pricing');
        
        const names = [
            'Shattered Web Case',
            'Shattered Web Case'
          ];
          
          const name = [
            'Shattered Web Case',
          ];
          
          const msg = await message.channel.send(`Cena Shattered Web Case wynosi`)
            const msgd = await message.channel.send(`created by mkoniec`)
        market.getItemPrice(730, 'Shattered Web Case', [currency = 6]).then(item => msgd.edit(item.lowest_price))
        

        

     
    }

    

});

client.login(process.env.TOKEN);
