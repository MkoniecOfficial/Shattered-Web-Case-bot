const { Client, RichEmbed } = require("discord.js");
const { config } = require("dotenv");
const market = require('steam-market-pricing');


const fs = require('fs');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}


const client = new Client({
    disableEveryone: true
})

client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
 
        case "ping":
            bot.commands.get('ping').execute(message, args);
        break;
 
        case "hello":
            bot.commands.get('hello').execute(message, args);
        break;
    }
 
});


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

const fs = require('fs');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}
    
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();



});

client.login(process.env.TOKEN);
