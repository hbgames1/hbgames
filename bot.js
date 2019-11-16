const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("645195007631949838")
setInterval(function() {
channel.send(`هلاهلاهلاهلاهلاهلاهلاههلاهلاهلى   كيف الحالكم بيخير وانت افضل يوتيوبر هلا بخير واواواووا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);