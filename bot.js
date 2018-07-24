const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('message', message => {
    if(message.content == '-server') {
    const embed = new Discord.RichEmbed()
    .setDescription(`
**   📗  online:  **__${message.guild.members.filter(m=>m.presence.status == 'online').size}__
 
**   📕  dnd:      **__${message.guild.members.filter(m=>m.presence.status == 'dnd').size}__
 
**   📙  idle:     **__${message.guild.members.filter(m=>m.presence.status == 'idle').size} __  
 
**   📓   offline:  **__${message.guild.members.filter(m=>m.presence.status == 'offline').size}__
 
**   🔖   all: **__${message.guild.memberCount}__`)      
 
         message.channel.send({embed});
 
    }
  });



client.on('message', message => {
    if(message.content == '-saver') {
    const embed = new Discord.RichEmbed()
    .setDescription(`
**   📗  online:  **__${message.guild.members.filter(m=>m.presence.status == 'online').size}__
 
**   📕  dnd:      **__${message.guild.members.filter(m=>m.presence.status == 'dnd').size}__
 
**   📙  idle:     **__${message.guild.members.filter(m=>m.presence.status == 'idle').size} __  
 
**   📓   offline:  **__${message.guild.members.filter(m=>m.presence.status == 'offline').size}__
 
**   🔖   all: **__${message.guild.memberCount}__`)      
 
         message.channel.send({embed});
 
    }
  });





client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`@YouSick_#1533`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});





client.on('message', message => {
    const prefix = '-'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(': 🔱 | اسمك',`**<@` + `${z.id}` + `>**`, true)
.addField(': 🛡 | ايديك', "**"+ `${z.id}` +"**",true)
.addField(': ♨ | Playing','**'+y+'**' , true)
.addField(': 📛 | تاق حق حسابك',"**#" +  `${z.discriminator}**`,true)
.addField('**: 📆 | التاريح الذي انشئ فيه حسابك**', message.author.createdAt.toLocaleString())
.addField("**: ⌚ | تاريخ دخولك للسيرفر**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});


client.login(process.env.BOT_TOKEN);
