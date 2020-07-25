const { Client, RichEmbed } = require("discord.js");
const { config } = require("dotenv");
const market = require('steam-market-pricing');
// jd
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

    if (cmd === "support") {
        const msg= await message.channel.send(`Support server - https://discord.gg/4YWtHNr`)
    }


    if (cmd === "creator") {
        const msg= await message.channel.send(`Bot Creator is Mkoniec#5303`)
    }


    if (cmd === "jerzy") {
        const msg= await message.channel.send("Leży Jerzy na wieży i nie wierzy że leży na wieży a jednak obok też leży Jerzy na wieży i nie wierzy że leży na wieży a obok niego też Leży Jerzy na wieży i nie wierzy że leży na wieży a jednak obok też Leży Jerzy na wieży i nie wierzy że leży na wieży a za nim też Leży Jerzy na wieży i nie wierzy że leży na wieży a jednak stoi.", {
            tts: true
           })
           msg.edit(`https://www.youtube.com/watch?v=UUfV6w5O63I`)
           msg.edit(`¯\_(ツ)_/¯`)
    }

        if (cmd === "maluch") {
        const msg= await message.channel.send("r r r r r  r r r r r r r rrrrrrrrrrrrrr r  r r r r rrrrrrrrrrrrr r  r r r r r  rrrrrrrrrrrrrrrr", {
            tts: true
           })
           msg.edit(`Odpalam malucha a co ?`)
    }
    

    if (cmd === "gdańsk") {
        const msg= await message.channel.send("Gdy pomorze nie pomoże to pomorze morze może a gdy może nie pomorze to pomorze morze Gdy pomorze nie pomoże to pomorze może Gdańsk.", {
            tts: true
           })
    }



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

    if (cmd === "postcard") {
      const market = require('steam-market-pricing');
        
     
          
const msg = await message.channel.send(`Cena Planet 4546B Postcard`)
  const msgd = await message.channel.send(`created by mkoniec`)
market.getItemPrice(264710, 'Planet 4546B Postcard', [currency = 6]).then(item => msgd.edit(item.median_price))
        


     
    }

    
    

});

client.login(process.env.TOKEN);
