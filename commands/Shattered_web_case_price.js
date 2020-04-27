module.exports = {
    name:`case`,
    description:"Shows SWC price",
    execute(message, args){

        if (cmd === "case") {
            // Shows Shattered Web Case price
    
            const market = require('steam-market-pricing');
            
    
              const msg = await message.channel.send(`Cena Shattered Web Case wynosi`)
                const msgd = await message.channel.send(`created by mkoniec`)
            market.getItemPrice(730, 'Shattered Web Case', [currency = 6]).then(item => msgd.edit(item.lowest_price))
            
        }






    }
}

