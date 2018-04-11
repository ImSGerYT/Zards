const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
    
   if(message.member.hasPermission('MANAGE_ROLES')) 
    if (message.content === "#role-create") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "Owner ",
       permissions :   [2146958591],
       color : " #000000"
   }) 
   message.guild.createRole({
       name : "Co-Owner",
       permissions :   [326630611],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Moderator",
       permissions :   [58195153],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Master",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Manger",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Admin",
       permissions :   [58186945],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Friends",
       permissions :   [53992641],
       color : " #000000"
   })

   message.guild.createRole({
       name : "VIP",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "YouTuber",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Members",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "BOT",
       permissions :   [1],
       color : " #000000"
   }) 
})
}
 
});
client.on('message', message => {
    if (message.content === "#TS-create") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

  
	 message.guild.createChannel('------------', 'text')
	 message.guild.createChannel('Chat', 'text')
	 message.guild.createChannel('Rules-info', 'text')
     message.guild.createChannel('faq', 'text')
	 message.guild.createChannel('------------', 'text')


     

message.channel.sendMessage('**Channel Was Succsesfluy Created**')
}
});
client.on('message', message => {
    if (message.content === "#VS-create") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('Public', 'voice')
message.guild.createChannel('Support', 'voice')
message.guild.createChannel('------------', 'voice')
message.guild.createChannel('---------YT--------', 'voice')
message.guild.createChannel('Rec 1', 'voice')
message.guild.createChannel('Rec 2', 'voice')
message.guild.createChannel('Montage 1', 'voice')
message.guild.createChannel('-----------', 'voice')
message.guild.createChannel('AFK', 'voice')
message.guild.createChannel('-----------', 'voice')
    }
});
client.login(process.env.BOT_TOKEN);
