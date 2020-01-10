
 const Discord = require("discord.js");
const bot = new Discord.Client();
const db = require('quick.db') // لا تنسى تحمل البكج ذا , npm i quick.db@7.0.0-b22
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
const embedRouge = 0x1E90FF
const embedbleu = 0x0064ff
bot.login(process.env.TOKEN)
const_embed = new Discord.RichEmbed()
const prefix = '+'
const PREFIX = '+'

/*
EMBEDS
*/
/*
PAS DE GROS MOTS
*/
  // Nom du jeu
  bot.on('ready',() => {
    let statuses = [
     "Moon 🌙",
      "created by Arçol", 
  ]
 
  setInterval(function() {
 
      let status = statuses[Math.floor(Math.random()*statuses.length)];
 
      bot.user.setPresence({
          game: {
              name: status,
              type: "STREAMING",
              url: "https://www.twitch.tv/L'BLOCK"
          }
      })
 
  }, 3000)
  bot.guilds.forEach(guild => {
    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => console.log(` https://discordapp.com/oauth2/authorize?client_id=658050057509011468&scope=bot&permissions=268518456 Connecté sur : ${guild.name} ${invite}`));
    })
  });




bot.on('message', msg => {
  if(msg.content === "+embed"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("🌙𝐕𝐄́𝐑𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 🌙")
    .setImage("https://media.giphy.com/media/SirUFDS5F83Go/giphy.gif")
    .setColor("FFF400") // La couleur, code HEX seulement
    .setDescription("Cliques sur la réaction pour avoir accès au serveur ! 🌙") // Texte simple
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
bot.on('message', msg => {
  if(msg.content === "+b"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("<a:657521549028491274:659062402515730432>  NITRO BOOST <a:657521549028491274:659062402515730432>")
    .setImage("https://cdn.discordapp.com/attachments/649215432133443585/649217880881102880/image0_2.gif")
    .setColor("FF66CC") // La couleur, code HEX seulement
    .setDescription(" __Si tu boost__ :   \n <a:boost:659073638645104656> • Un rôle bien gradé  \n <a:boost:659073638645104656> • Perm mute  \n <a:boost:659073638645104656> • Perm moov \n <a:boost:659073638645104656> • Une pub en mp \n <a:boost:659073638645104656> • un script d'un bot mp ou raid **si Arçol le veut bien** \n <a:boost:659073638645104656> • Perm image à touts les salons   ") // Texte simple
    .setFooter('Mais bon pour ça tu dois boost...')
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
bot.on('message', msg => {
  if(msg.content === "+r"){
    let rembed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("<a:oe:653677466908622870> 𝐑𝐄̀𝐆𝐋𝐄𝐌𝐄𝐍𝐓 <a:oe:653677466908622870>")
    .setImage("https://media.giphy.com/media/SirUFDS5F83Go/giphy.gif")
    .setColor("FFF400") // La couleur, code HEX seulement
    .setDescription("Pas d'atteinte à la **vie privée** d'une personne. Les insultes sont tolérées **sans que ça n'aille plus loin** .**Aucune pub** n'est acceptée. **Respectez** l'utilisation de chaque salon.  L'utilisation **abusive** des salons écrits et vocaux (spam, soundboard..) ainsi que les **abus des bots**, sont prohibés. ") // Texte simple
    msg.channel.send(rembed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
bot.on('message', msg => {
  if(msg.content === "+rv"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("<a:658780429943308337:659078349410402314> 𝐑𝐎̂𝐋𝐄𝐒 𝐒𝐄𝐗𝐄𝐒 <a:658780429943308337:659078349410402314>")
    .setColor("1F2FE0") // La couleur, code HEX seulement
    .setDescription(" <:homme:659078627186442240> <:cot1:653677531135737879> <@&664442362600095763> \n <:femme:659078758552305664> <:cot1:653677531135737879> <@&664442362092847114> ") // Texte simple
    .setThumbnail("https://media.giphy.com/media/TgrrdI9NpDU0KbuD3d/giphy.gif")
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
bot.on('message', msg => {
  if(msg.content === "+ra"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("<a:658780429943308337:659078349410402314> 𝐑𝐎𝐋𝐄𝐒 𝐀𝐆𝐄𝐒 <a:658780429943308337:659078349410402314>")
    .setColor("FFF400") // La couleur, code HEX seulement
    .setDescription(" 👶 <:cot1:653677531135737879> <@&659061184544243723> \n 🧒 <:cot1:653677531135737879> <@&659061185198555157> \n 👦 <:cot1:653677531135737879>  <@&659061186175959044> \n 👨 <:cot1:653677531135737879> <@&659061187685908480> ") // Texte simple
    .setThumbnail('https://media.discordapp.net/attachments/657746635539087373/658778328483758091/lambo.gif')
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
bot.on('message', msg => {
  if(msg.content === "+rs"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("<a:658780429943308337:659078349410402314> 𝐑𝐎𝐋𝐄𝐒 𝐒𝐈𝐓𝐔𝐀𝐓𝐈𝐎𝐍𝐒  <a:658780429943308337:659078349410402314>")
    .setColor("1F2FE0") // La couleur, code HEX seulement
    .setDescription(" ❤️ <:cot1:653677531135737879> <@&664922367046451210>  \n 💔 <:cot1:653677531135737879> <@&664922370686844949> ") // Texte simple
   .setThumbnail("https://media.giphy.com/media/TgrrdI9NpDU0KbuD3d/giphy.gif")
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});

bot.on('message', msg => {
  if(msg.content === "+rb"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("<a:658780429943308337:659078349410402314>  **ROLES PAYS** <a:658780429943308337:659078349410402314>")
    .setColor("FFF400") // La couleur, code HEX seulement
    .setDescription(" <@&659061204790280242> \n         <@&659061205133951008> \n      <@&659061206073606144> \n <@&659061206547562506>  \n <@&659061207365451776>  \n  <@&659061207872962652> \n <@&659061208737120256>  \n <@&659061209437437952>   \n <@&659061210112589849> \n  <@&659061210616168449> \n <@&659061211215691793>  \n <@&659061211828322315> \n <@&659061212658663424> \n  <@&659061213359112222> \n <@&659061214072143873> \n <@&659061214558814210> \n <@&659061215372378118> \n <@&659061216257376275>  \n <@&659061216651509771>   ") // Texte simple
   .setThumbnail('https://media.discordapp.net/attachments/657746635539087373/658778328483758091/lambo.gif')
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
bot.on('message', msg => {
  if(msg.content === "+r+"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("<a:658780429943308337:659078349410402314>  **ROLES BONUS**  <a:658780429943308337:659078349410402314>")
    .setColor("FFF400") // La couleur, code HEX seulement
    .setDescription(" 👺 <:cot1:653677531135737879> <@&659061192894971905> \n              \n 💢<:cot1:653677531135737879> <@&659061199396274196>  \n                \n 👅 <:cot1:653677531135737879> <@&659061197215367209> \n             \n 💍<:cot1:653677531135737879> <@&659061198699888660> \n             \n 🤡 <:cot1:653677531135737879>  <@&659061193687695377>  \n            \n 🤬 <:cot1:653677531135737879>  <@&659061195994824704> \n            \n 😈 <:cot1:653677531135737879> <@&659061189925535775>  \n            \n 🧠 <:cot1:653677531135737879> <@&659061192295448596>  \n            \n 👤 <:cot1:653677531135737879>  <@&659061196632227860> \n             \n 🌕 <:cot1:653677531135737879> <@&659061195327930388> \n             \n 🎙️ <:cot1:653677531135737879> <@&659061199844933635>  \n            \n 🎧 <:cot1:653677531135737879> <@&659061200491118593> \n            \n 🤠  <:cot1:653677531135737879> <@&659061191305461792> \n            \n 🦄 <:cot1:653677531135737879> <@&659061194337943553>  \n            \n 😇 <:cot1:653677531135737879> <@&659061190789693443>  \n            \n 💡 <:cot1:653677531135737879> <@&659061198045708318>   ") // Texte simple
   .setThumbnail('https://media.discordapp.net/attachments/657746635539087373/658778328483758091/lambo.gif')
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});



/*
bot.on('message', msg => {
  if(msg.content === "+embed"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("C'est le titre")
    .setImage("C'est l'image en dessous")
    .setFooter("C'est le petit texte en bas")
    .setTimestamp() // C'est pour mettre l'heure sur le message en gros
    .setColor("FFF400") // La couleur, code HEX seulement
    .setDescription("C'est ton texte ici") // Texte simple
    .addField("C'est ton soustitre", "Et ici tu met ce que tu veux en dessous du sous titre") // Le sous titre est plus grand et que le texte
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
*/
bot.on('message', msg => {
  if(msg.content === "+r+"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("<a:658780429943308337:659078349410402314>  **ROLES BONUS**  <a:658780429943308337:659078349410402314>")
    .setColor("FFF400") // La couleur, code HEX seulement
    .setDescription(" 👺 <:cot1:653677531135737879> <@&659061192894971905> \n              \n 💢<:cot1:653677531135737879> <@&659061199396274196>  \n                \n 👅 <:cot1:653677531135737879> <@&659061197215367209> \n             \n 💍<:cot1:653677531135737879> <@&659061198699888660> \n             \n 🤡 <:cot1:653677531135737879>  <@&659061193687695377>  \n            \n 🤬 <:cot1:653677531135737879>  <@&659061195994824704> \n            \n 😈 <:cot1:653677531135737879> <@&659061189925535775>  \n            \n 🧠 <:cot1:653677531135737879> <@&659061192295448596>  \n            \n 👤 <:cot1:653677531135737879>  <@&659061196632227860> \n             \n 🌕 <:cot1:653677531135737879> <@&659061195327930388> \n             \n 🎙️ <:cot1:653677531135737879> <@&659061199844933635>  \n            \n 🎧 <:cot1:653677531135737879> <@&659061200491118593> \n            \n 🤠  <:cot1:653677531135737879> <@&659061191305461792> \n            \n 🦄 <:cot1:653677531135737879> <@&659061194337943553>  \n            \n 😇 <:cot1:653677531135737879> <@&659061190789693443>  \n            \n 💡 <:cot1:653677531135737879> <@&659061198045708318>   ") // Texte simple
   .setThumbnail('https://media.discordapp.net/attachments/657746635539087373/658778328483758091/lambo.gif')
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
bot.on('message', msg => {
  if(msg.content === "+"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("<a:658780429943308337:659078349410402314>  **LE SERVEUR ET EN MAINTENANCE **  <a:658780429943308337:659078349410402314>")
    .setColor("FFF400") // La couleur, code HEX seulement
    .setDescription(" Il viendras très prochainement donc revient bientôt!!") // Texte simple
   .setImage('https://thumbs.gfycat.com/WealthyFragrantAtlanticsharpnosepuffer-size_restricted.gif')
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
bot.on('message', msg => {
  msg.author.createDM().then (channel => { 
  if(msg.content === "+nitro"){
  
    msg.channel.send('Bg le nitro a été envoyer en mp ') // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
    channel.send('T sah toi !! malade vas !! ')
  }
  })
});
bot.on('message', msg => {
  if(msg.content === "+s"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("<a:657521549028491274:659062402515730432>    **INVITES REWARDS **  <a:657521549028491274:659062402515730432>  ")
    .setColor("FFF400") // La couleur, code HEX seulement
    .setDescription(" <@&659061183252267042> <:cot1:653677531135737879> 3 invites \n <@&659061182891687943> <:cot1:653677531135737879> 5 invites (métal) \n <@&659061181922934805> <:cot1:653677531135737879> 10 invités \n <@&659061181457367126> <:cot1:653677531135737879> 15 invites (backup) \n <@&659061180828221449> <:cot1:653677531135737879> 20 invites (Perm images) \n <@&659061180140355584> <:cot1:653677531135737879>  25 invites \n   <@&659061179498496000> <:cot1:653677531135737879> 30 invites  \n <@&659061178839859211> <:cot1:653677531135737879> 35 invites \n <@&659061177950797845>  <:cot1:653677531135737879> 40 invites (Perm mute) \n <@&659061177464389642> <:cot1:653677531135737879> 45 invites \n <@&659061176713478144> <:cot1:653677531135737879> 50 invites (Perm Moov)") // Texte simple
   .setThumbnail('https://media.discordapp.net/attachments/657746635539087373/658778328483758091/lambo.gif')
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
bot.on('message', async message => {
  if(message.content.startsWith(prefix + "mp")) {
 
    var args = message.content.split(" ").slice(1);
    var msge = args.join(' ');

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
    if(!msge) return message.channel.send("Precise un message")

    var mpall = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Message pour toi bb ", msge);
    message.guild.members.map(m => m.send(msge))
}
});
bot.on('message', msg => {
  if(msg.content === "+p"){
    let embed = new Discord.RichEmbed() // Tu assigne la variable embed à un Embed
    .setTitle("𝐂𝐨𝐧𝐝𝐢𝐭𝐢𝐨𝐧𝐬 𝐝𝐞 𝙥𝙖𝙧𝙩𝙚𝙣𝙖𝙧𝙞𝙖𝙩")
    .setImage("https://media.giphy.com/media/MDrrII2mA8MPxrqNTd/giphy.gif") // C'est pour mettre l'heure sur le message en gros
    .setColor("FFF400") // La couleur, code HEX seulement
    .setDescription(" __**Voici les conditions**__ : \n 💎⠂Minimum 200 membres sauf à exeption \n  💎⠂Les membres doivent  étre actif sur le serveur. \n  💎⠂ le serveur ne doit pas étre des rewards ou des nudes (pour les rewards si vrais accepter mais il doit offrir un truc au fondateur ou a un membre pour étre sûr)") // Texte simple
    msg.channel.send(embed) // Ici en gros tu dis de send l'embed dans le salon où la commande a été faite
  }
});
 
