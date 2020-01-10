const Discord = require('discord.js')
const client = new Discord.Client();
const bot = new Discord.Client();
const Bot = new Discord.Client()
const fs = require('fs');
const hook = new Discord.WebhookClient('650038893202243602', 'KpfD2mLvyOEn8Kj5t1EVYD8O2a3JyvMeXf3EXXJkaJ6IVIKtTOXHjJKu45ZM_-ePJ9HJ');
const DiscordAntiSpam = require("discord-anti-spam");
const moment = require('moment');
const config = require('./config.js');
const yt = require('ytdl-core');
const Blacklist = require('discordblacklist');
moment.locale('fr');
var opus = require('opusscript');
var whitelist = false;
const Captcha = require('node-captcha-generator');
const imgur = require("imgur")
let queue = {};
const { Client, RichEmbed } = require('discord.js');
const embedRouge = 0x1E90FF
const embedbleu = 0x0064ff
var dernierAppel = new Array();
bot.commands = new Discord.Collection ();
let prefix = "s."
let PREFIX = "s."
//    Add emoji name

var emojiname = ["",""];



//    Add role name

var rolename=["",""];


client.login(process.env.TOKEN)

var mention = "<@390553335758979072>";

var memberCount = client.users.size;

var servercount = client.guilds.size;





client.on("ready", () => {

	var servers = client.guilds.array().map(g => g.name).join(',');
  client.generateInvite(['ADMINISTRATOR'])

  .then(link => {
    console.log(`===========================================================`)
    console.log(`Generated bot invite link: ${link}`);
    console.log(`===========================================================`)
  });
	console.log("--------------------------------------");
  console.log(`===========================================================`)
console.log('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les préfix actuelle:  ' + prefix + "\n[!]Mentions = " + mention);
console.log(`===========================================================`)
});
const activities_list = [
     "🧪s.help🧪", 
   "🎄 IFB For ever 🎄", 
   " 🎄MON  SAPINOU🎄",
 "🎄Créateur:Arçol®🎄",
" 「⚠」Maintenance le 25/12"
]; // creates an arraylist containing phrases you want your bot to switch through
client.commands = new Discord.Collection();

bot.guilds.forEach(guild => {
  var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
  invite.createInvite().then(invite => console.log(` https://discordapp.com/oauth2/authorize?client_id=653245542314541057&scope=bot&permissions=136 Connecté sur : ${guild.name} ${invite}`));
  
});




client.on('ready', () => {
   setInterval(() => {
       const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
       client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

/*client.on("ready", () =>{
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
      status: 'dnd',  //You can show online, idle....
      game: {
          name: "⛔En maintenance ⛔",  //The message shown
          type: "WATCHING" //PLAYING: WATCHING: LISTENING: STREAMING:
      }
  });
});
//configuration du bot

 
/*client.on("ready", () => {
    var servers = client.guilds.array().map(g => g.name).join(','),
    memberCount = client.users.size,
    servercount = client.guilds.size;
    console.log("--------------------------------------");
    client.user.setStatus("dnd"); // online, dnd , offline ,   ldle
    console.log();
   
    client.user.setGame ("⛔En maintenance ⛔|s.mn");
    console.log('[!] Connexion en cours... \n[!] Veuillez Patienté! \n[!] Les évenement sont après ! :)  \n[!] Les préfix actuelle:  ' + prefix + "\n[!] Mentions = " + mention + "\n[!] Nombre de membres: " + memberCount + "\n[!] Nombre de serveurs: " + servercount + "\n[!] Status du bot: Ne Pas Deranger"+ "\n[!] Surveillance des Joueurs en cours....");
 });
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', function (message) {
    if (message.content === prefix+"invite") {
        message.reply(message.author)
     message.channel.sendMessage('Voici le lien pour invité le bot de Youtube_Arçol    https://discordapp.com/oauth2/authorize?client_id=650408998419300382&scope=bot&permissions=2130181631')
   console.log('rép')
   }
});

client.on('message', message => {
    
    let messageArray = message.content.split(' ');
    let args = messageArray.slice(1);
    let argument = args.join(' ');
    let gras = '**';
 
 
    if(message.content.startsWith(`${prefix}`+"clear")){
        
        if(message.member.hasPermission('MANAGE_MESSAGES')){
 
            var nombre = parseFloat(
                argument
            )
            if((nombre > 0) && (nombre < 101)){
 
                message.delete()
                message.channel.bulkDelete(nombre)
 
                setTimeout(() => {
                    let embed = new Discord.RichEmbed()
                        .setColor('#00ff00')
                        .setTitle(`${nombre} message on été supprimé par ${gras}${message.author.username}${gras}`)
                    message.channel.send(embed)
 
                }, 500); 
 
            }else{
                let Clean_embed = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle(`vous devez indiquez un nombre entre 1 et 101`)
                message.channel.send(Clean_embed )
 
            }
 
        }else{
            let Clean_embed = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle(`vous n'avez pas la permission de nettoyer le chat`)
           message.channel.send(Clean_embed )
       }
   }
});
client.on("message", (message) => {
  const { RichEmbed } = require('discord.js');
  if (message.content.startsWith(prefix+`setup`)) {
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("<a:630512135818051594:657685600354435093> Tu n'as pas la permission d'utiliser cette commande! <a:630512135818051594:657685600354435093>");
message.guild.createChannel('✈・Bienvenue', 'text')
}
});
client.on("message", (message) => {
    const { RichEmbed } = require('discord.js');
    if (message.content.startsWith(prefix+`say`)) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("<a:630512135818051594:657685600354435093> Tu n'as pas la permission d'utiliser cette commande! <a:630512135818051594:657685600354435093>");
      var text = message.content.split(' ').slice(1).join(' ');
        const Say_embed = new RichEmbed()
          .setTitle('Incorrect usage!')
          .setColor(0x20ff00)
          .setDescription(`S'il vous plaît l'utiliser comme cet exemple:\n**${prefix}sayTexte inférieur**`)
      if(!text) return message.channel.send(Say_embed);
       message.channel.send(text);
      message.delete();
      message.channel.stopTyping()
     }
});

client.on("message", async message => {
    const find = client.commands;
    const prefix = "s.";



    if (message.author.bot) return;

    if (!message.guild) return;

    if (!message.content.startsWith(prefix)) return;




    if (!message.member) message.member = await message.guild.fetchMember(message);



    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const cmd = args.shift().toLowerCase();

    

    if (cmd.length === 0) return;

    


    let command = client.commands.find(cmd);


    if (!command) command = client.commands.find(client.aliases.find(cmd));



    if (command) 

        command.run(client, message, args);

});
client.on("message", async message => {
    const find = client.commands;
    const prefix = "s.";





    if (message.author.bot) return;

    if (!message.guild) return;

    if (!message.content.startsWith(prefix)) return;





    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const cmd = args.shift().toLowerCase();



    if (cmd === "ping") {

    

        const msg = await message.channel.send(`🏓 Pinging....`);



  

        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);

    }



    
    

});


  

  client.on('message', message => {

    const msgc = message.content;	
    
    if (msgc === "s.cbm" &&message.guild) { //effectuer son prefix de la commande
    
    message.delete(0);     
    
    var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
    
    var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
    
    var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot
    
    let m = " ";
    
    m += 'je suis en compagnie de '+ memberCount +' membres \n';
    
    m += 'je suis présent dans '+ servercount+' serveurs \n';
    
    m += 'je suis sur '+ channel+' canaux \n';
    
    message.author.send(m).catch(console.log)
    
    message.reply("La commande star vous a été envoyé en privé :100: ")
    
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    ///////////////////////////////////////////////Insulte répertorier sur un salon créer logs////////////////////////////////////////////////////////
   
    const { RichEmbed } = require('discord.js');
    if(!message.guild) return;
    var r_embed = new RichEmbed()
    let logs = message.guild.channels.find('name', '【🌀】logs');
    
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
    
    message.guild.createChannel('【🌀】logs', 'text');
    
    }
    
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) { 
    
    console.log('Le salon logs n\'existe pas et j\'ai essayer de le créer mais je n\'ai pas les permissions !')
    
    }  
    
    //Les mots interdits :   
    
    let blacklisted = ['fdp','pd', 'connard', 'pute', 'putain', 'ta gueule', 'nique', 'salope',  'batard', 'enfoiré', 'connare', 'fils de pute', 'bâtard', 'bicot', 'conasse', 'couille molle', 'débile', 'dugland', 'enculé', 'fachiste', 'imbécile', 'lavette', ];
    
    //Il va chercher les mots
    let foundInText = false;
    
    for (var i in blacklisted) {
    
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    
    }
    
    if (foundInText) { //Contenu du message du bot qui supprime et envoie au salon nommer "logs" le message contenant l'insulte
    
    message.delete();
    
    let r_embed = new Discord.RichEmbed()
    
    .addField("`Commande effectuée sur le Channel`", message.channel)
    .setTitle(`Insulte provenant de : ${message.author.username}`)
    .setColor("0x6a94f1")
    .addField("Contenu du message :", `${message.content.toLowerCase()}`)
    .setFooter("By Youtube_Arçol") //Nom du bot ou autre le pied du embed en outre
    
    message.guild.channels.find("name", "【🌀】logs").send(r_embed)
    
    }
});
    //////////////////////////////////////////////////////////FIN////////////////////////////////////////////////////////////////////////////////////

    
    //Evoi un message sur la console CMD si une personne m'écrit.////////////
    
    client.on('message', ({ author, guild, content }) => {

    console.log(`J'ai recu un message : \n${content}   `)
    });

 ////////////////////////////////////////////////////////////////////////////////love////////////////////////////////////////////////////////////////////////////////////////   




    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    



////////////////////////////////////////////////////////////////////////////NSFW///////////////////////////////////////////////////////////////////

client.on('message', message => {
    if (message.content === 'Yo') {
        message.react(':hi:656609159646674985 ')
            .catch(() => console.error('One of the emojis failed to react.'));
    }
});

client.on('message', message => {
    if (message.content === 'slt') {
        message.react(':hi:656609159646674985')
            .catch(() => console.error('One of the emojis failed to react.')); 
              
    }
});
client.on('message', message => {
    if (message.content === 'wsh') {
        message.react(':hi:656609159646674985')
            .catch(() => console.error('One of the emojis failed to react.'));
    }
});
client.on('message', message => {
  if (message.content === 'Wsh') {
      message.react(':hi:656609159646674985')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
    if (message.content === 'Salut') {
        message.react(':hi:656609159646674985')
            .catch(() => console.error('One of the emojis failed to react.'));
    }
});
client.on('message', message => {
    if (message.content === 'Welcome') {
        message.react(':hi:656609159646674985')
            .catch(() => console.error('One of the emojis failed to react.'));
    }
});
client.on('message', message => {
    if (message.content === 'yo') {
        message.react(':hi:656609159646674985')
            .catch(() => console.error('One of the emojis failed to react.'));
    }
});
client.on('message', message => {
    if (message.content === 'love') {
        message.react('😍')
          .catch(() => console.error('One of the emojis failed to react.'));
    }
});
client.on('message', message => {
  if (message.content === 'bjr') {
      message.react(':hi:656609159646674985')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === 'Bjr') {
      message.react(':hi:656609159646674985')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === 'Bjr') {
      message.react(':hi:656609159646674985')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === 'Bjr') {
      message.react(':hi:656609159646674985')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === '?') {
      message.react(':__:656609480435564544')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === '??') {
      message.react(':__:656609480435564544')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === '???') {
      message.react(':__:656609480435564544')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === '????') {
      message.react(':__:656609480435564544')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === 'FBI ') {
      message.react(':fbi:656799816424095764')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === 'Fbi') {
      message.react(':fbi:656799816424095764')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === 'FBI') {
      message.react(':fbi:656799816424095764')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});

////////////////////////////:fbi:656799816424095764///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'nop') {
      message.react('❌')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === 'non') {
      message.react('❌')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === 'Nop') {
      message.react('❌')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});
client.on('message', message => {
  if (message.content === 'nn') {
      message.react('❌')
          .catch(() => console.error('One of the emojis failed to react.'));
  }
});

///////////////////  ///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  client.on("message", function(message) { // when a message is sent
   

  const PREFIX = "s."
 



  if (message.author.equals(bot.user)) return; // if the message is sent by a bot, ignore

    if (!message.content.startsWith(PREFIX)) return; // if the message doesn't contain PREFIX (*), then ignore

    var args = message.content.substring(PREFIX.length).split(" "); // removes the prefix from the message
    var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)
    if (command == "infos") { // creates the command *info
        message.channel.send("Salut, Je me présente je suis Wøłf Prøтec🧪 je suis sur ton serveur pour t'aider à que cela ce soit un espace plus clean pour savoir toutes mes commendes veuillez écrire `s.help` le créateur est Youtube_Arçol à plus  :smile:") // gives u info
    }
    if (command == "info") { // creates the command *info
      message.channel.send("Salut, Je me présente je suis Wøłf Prøтec🧪 je suis sur ton serveur pour t'aider à que cela ce soit un espace plus clean pour savoir toutes mes commendes veuillez écrire `s.help` le créateur est Youtube_Arçol à plus  :smile:") // gives u info
  }

    if (command == "cookie") { // creates the command cookie
        if (args[1]) message.channel.send(message.author.toString() + " has given " + args[1].toString() + " a cookie! :cookie:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
        else message.channel.send("Who do you want to send a cookie to? :cookie: (Correct usage: *cookie @username)") // sends the error message if no-one is mentioned
    }




    if(command === "purge") {
        let messagecount = parseInt(args[1]) || 1;

        var deletedMessages = -1;

        message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
            messages.forEach(m => {
                if (m.author.id == bot.user.id) {
                    m.delete().catch(console.error);
                    deletedMessages++;
                }
            });
        }).then(() => {
                if (deletedMessages === -1) deletedMessages = 0;
                message.channel.send(`:white_check_mark: Purged \`${deletedMessages}\` messages.`)
                    .then(m => m.delete(2000));
        }).catch(console.error);
    }


});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







////////////////////////////////////////client.on////////<a:Bost:635942941092872236>/////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  message.author.createDM().then (channel => { 
  if (message.content === prefix+'boost') {
      const { RichEmbed } = require('discord.js');
      var boost_embed = new RichEmbed()
      .setTitle('*** <a:657521549028491274:657692784689545226>   Boost du serveur <a:657521549028491274:657692784689545226>  ***')
      .addField("Quand vous booster le serveur vous avez drois à","\n-Avoir les perms mute \n -Avoir un salon rôle couleur \n  -Avoir un rôle perso à demander à <@!595640419044425780> \n -Perm mouve \n Avoir un salons perssonaliser      ")
      .addField(' Avoir un salon rôle couleur <#651734962839486468>',' -Avoir un rôle perso à demander a <@!390553335758979072> ou à <@!595640419044425780>')
      .addField('En plus du rôle que vous avez le rôle nitro  ','<a:657521142126477313:657693425356898315> T un bg ou une blg<a:657521142126477313:657693425356898315> ')
      .setImage("https://cdn.discordapp.com/attachments/638890556734439462/650661434556022785/nitro.gif")
      .setColor(0xFF0000)
      .setDescription(' ')
      .setTimestamp()
 .setFooter("Bot développé par IFB|YT_Arçøl 💔#3838 .")
      message.channel.send(boost_embed)

      }
})
});

client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === "s.8ball") {
      if (!args[1]) return message.channel.send("Veuillez **poser une question** :x:")
      let answers = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:" ,"Jsp <:650369705177120797:657691711400837130> " , "Fuck you !"]
      let question = args.slice(1).join(" ")
      let embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL)
          .setColor("RED")
          .addField("Question :", question)
          .addField("Réponse :", answers[Math.floor(Math.random() * answers.length)])
      message.channel.send(embed)
  }
});
















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 client.on('message', msg => {
 
  const prefix = "s.";
 
    if (msg.content === 'Ryuk ?') {
        msg.channel.send('Oui jeune humain ?  :apple:' + msg.author);
        
        
    }
  });
 
 
 
 
// Commande "Help"
 client.on
('message', msg => {
 

 
/// stats
 
});
 client.on
('message', msg => {
if (msg.content ===   prefix+"stats"){
    
    var stats_embed = new Discord.RichEmbed()
    .setColor('#D95151')
    .addField("**DeathNote Bot | Stats:**", "••••••••••••••••••••••••••")
    .addField("Servers : ", ":satellite: " + bot.guilds.size.toLocaleString())
    .addField("Members : ", ":busts_in_silhouette: " + bot.users.size.toLocaleString())
    .addField("Channels : ", ":microphone2: " + bot.channels.size.toLocaleString())
    .addField("••••••••••••••••••••••••••","Copyright ®Arçol ")
 
 
 
 
 
    msg.channel.sendEmbed(stats_embed)
    console.log("Commande stats - GOOD")
 
 
 
}});
 
///deathnote
 
 client.on
('message', msg => {
    if (msg.content === prefix + "deathnote"){
        
        var dn_embed = new Discord.RichEmbed()
        .setColor('#D95151')
        .addField("Member total :", ":bust_in_silhouette: 42")
        .addField("••••••••••••••••••••••••••","Liste des joueurs :pen_ballpoint: ")
        .addField("Paul", "Décapitation ")
        .addField("Yoan", "Ecrasé par un train ")
        .addField("Axel", "Décapitation ")
        .addField("Yves", "décapitation ")
        .addField("Daniel", "décapitation ")
        .addField("Light", "Heart Attack")
 
 
        .addField("••••••••••••••••••••••••••","Voir plus ? s.deathnote2 (bientot)")
    
    
    
    
    
        msg.channel.sendEmbed(dn_embed)
        console.log("Commande deathnote - GOOD")
    
    
    
    }});
 
///deathnoteadd
 
 client.on
('message', msg => {
    if (msg.content === prefix + "deathnoteadd"){
        
        msg.channel.send('Une personne aléatoire a été personne a bien été ajouté dans le DeathNote  :apple:');
 
        console.log("Commande deathnoteadd - GOOD")
    
        
    
    }});
 
 
///deathnote
 
 client.on
('message', msg => {
    if (msg.content === prefix + "donateur"){
        
        var don_embed = new Discord.RichEmbed()
        .setColor('#ffaa00')
        .addField("Donateurs", ":money_with_wings: 3")
        .addField("••••••••••••••••••••••••••","Liste des donateurs")
        .addField("Paul: ", "10€")
        .addField("Yoan: ", "10€")
        .addField("Axel: ", "10€")
    
 
        msg.channel.sendEmbed(don_embed)
        console.log("Commande deathnote - donation")
    
    
    
    }});
 
    //Connection Message

 
///pokemon
 
 client.on
('message', msg => {
    if (msg.content === prefix + "pokemon"){
        
        msg.channel.send('**' + msg.author.username + '**, tu as attrapé un **Raikou** !');
        msg.channel.send('http://www.pokestadium.com/sprites/xy/raikou.gif');
 
        console.log("Commande pokemon - GOOD")
    
        
    
    }});
 
///CityHebdo

 
///Pile ou face
 
 client.on
('message', msg => {
    if (msg.content === prefix + "pouf"){
 
        random();
 
        if (randnum == 0){
            msg.channel.send(':large_orange_diamond: `PILE` :large_orange_diamond:');
            
            
 
        }
 
        if (randnum == 1){
            msg.channel.send(':large_blue_diamond: `FACE` :large_blue_diamond:');
 
        }
        
        if (randnum == 2){
            msg.channel.send(':small_red_triangle:  `NEUTRE` :small_red_triangle: ');   
 
 
    }};
 
 
function random (min,max) {
 
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1)  + min);
 
}})
 
 
 
///POUFHELP
 
 client.on
('message', msg => {
    if (msg.content === prefix + "poufhelp"){
        
        var don_embed = new Discord.RichEmbed()
        .setColor('#ffaa00')
        .addField("Information pile ou face: ", "••••••••••••••••••••••••••")
        .addField("Liste :","••••••••••••••••••••••••••")
        .addField(":large_orange_diamond: Pile", "••••••••••••••••••••••••••")
        .addField(":large_blue_diamond: Face", "••••••••••••••••••••••••••")
        .addField(":small_red_triangle: Neutre", "••••••••••••••••••••••••••")
    
 
        msg.channel.sendEmbed(don_embed)
        console.log("Commande deathnote - donation")
    
    
    
    }});
 
 
 
 
    ///blague
     client.on
('message', msg => {
        if (msg.content === prefix + "blague"){
            
            
            msg.channel.send('- Cest quoi ton boulot toi ?');
            msg.channel.send('- Je suis dev.');
            msg.channel.send('https://pbs.twimg.com/media/DOMzDHiXUAEDzkq.jpg');
    
            console.log("Commande pokemon - GOOD")
        
            
        
        }});
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        client.on('message', message => {
          const { RichEmbed } = require('discord.js');
          // If the message is "how to embed"
          if (message.content === prefix+'citation') {
            // We can create embeds using the MessageEmbed constructor
            // Read more about all that you can do with the constructor
            // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
            const embed = new RichEmbed()
              // Set the title of the field
              .setTitle('Voici la citation ')
              .setFooter(message.guild.name, message.guild.iconURL)
      
              // Set the color of the embed
              .setColor(0xFF0000)
              // Set the main content of the embed
              .setDescription('🧪 Choose a job you love, and you will never have to work a day in your life🧪 ')
            // Send the embed to the same channel as the message

            .setTimestamp()
            .setFooter("Made by Youtube_Arçol");
            message.channel.send(embed);
          }
            if (typeof foo !== 'undefined') {
              // Now we know that foo is defined, we are good to go.
      
          }
        });      

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




















//////////////////////////////////////////////https://discord.gg/JAXcCT////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const AntiSpam = new DiscordAntiSpam({
  warnThreshold: 40, // Amount of messages sent in a row that will cause a warning.
  banThreshold: 20, // Amount of messages sent in a row that will cause a ban
  maxInterval: 1000, // Amount of time (in ms) in which messages are cosidered spam.
  warnMessage: "<a:647536271123546121:657684548976640010>   {@user}, S'il vous plaît arrêter le spam <a:647536271123546121:657684548976640010>   .", // Message will be sent in chat upon warning.
  banMessage: "<a:630512570528170034:657688346239303690> **{user_tag}** a été banni pour spam <a:630512570528170034:657688346239303690> .", // Message will be sent in chat upon banning.
  maxDuplicatesWarning: 7, // Amount of same messages sent that will be considered as duplicates that will cause a warning.
  maxDuplicatesBan: 15, // Amount of same messages sent that will be considered as duplicates that will cause a ban.
  deleteMessagesAfterBanForPastDays: 1, // Amount of days in which old messages will be deleted. (1-7)
  exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS"], // Bypass users with at least one of these permissions
  ignoreBots: true, // Ignore bot messages
  verbose: false, // Extended Logs from module
  ignoredUsers: [], // Array of string user IDs that are ignored
  ignoredRoles: [], // Array of string role IDs or role name that are ignored
  ignoredGuilds: [], // Array of string Guild IDs that are ignored
  ignoredChannels: [] // Array of string channels IDs that are ignored
});
AntiSpam.on("warnEmit", (member) => console.log(`Tentative d'avertissement ${member.user.tag}.`));
AntiSpam.on("warnAdd", (member) => console.log(`${member.user.tag} a été averti.`));
AntiSpam.on("kickEmit", (member) => console.log(`Attempt to kick ${member.user.tag}.`));
AntiSpam.on("kickAdd", (member) => console.log(`${member.user.tag} a été botté.`));
AntiSpam.on("banEmit", (member) => console.log(`Attempt to ban ${member.user.tag}.`));
AntiSpam.on("banAdd", (member) => console.log(`${member.user.tag} a été ban .`));
AntiSpam.on("dataReset", () => console.log("Module cache has been cleared."));
 
client.on("message", (msg) => {
  AntiSpam.message(msg);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  message.author.createDM().then (channel => { 
  if (message.content === prefix+'help') {
      const { RichEmbed } = require('discord.js');
      var Help_embed = new RichEmbed()
      .setTitle('𝙇𝙖 𝙡𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙙𝙪 𝙗𝙤𝙩 𝙒𝙤𝙡𝙛 𝙋𝙧𝙤𝙩𝙚𝙘𝙩')
      .addField('⚠️Pour que le bot marche à 100%⚠️','⚠️Il faut que vous faites `s.setup`')
      .addField('***:hammer: Administration***',' __Voici les commandes d administration__    `\nw.ban` Bannir la personne   \n`s.kick` exclure la personne  \n `s.say` faire parler le bot \n `s.mute` ou s.unmute \n `+msgpv` Mp un membre avec le bot par exemple `+msgpv @Arçol#8995 Test`')
      .addField('***📌𝗦𝘂𝗽𝗽𝗼𝗿𝘁📌***',' \n `s.support` Avoir le serveur du support   \n `s.report` Pour signaler quelqu un ')
      .addField('***✉️UTILITAIRE***',' \n s.tool` \n`s.régles` \n `s.avatar` Savoir la pdp de vous ou d une personne \n `s.new` Crée un billet pour parler avec un admin  \n `s.close` fermer un billet ')
      .addField(" *** 📃𝗜𝗻𝗳𝗼𝘀📃***", " \n Mes infos `s.info` :grin: \n Savoir combien de personnes à le bot \n __Pour avoir des infos apart le bot__ \n `s.userinfo` Savoir des informations à propos de l'utilisateur \n `s.serveurinfo` S'avoir des informations à propos du serveur. ") // sets the field information about the command *info
      .addField('***🔥𝗖𝗼𝗺𝗺𝗲𝗻𝗱𝗲𝘀 𝗳𝘂𝗻🔥 ***','\n  `s.cookie` cookie offrir un cookie a quelqu un \n Pile ou face `s.pouf` pour savoir les règles `s.poufhelp` \n pour attrapé un pokémon `s.pokemon` \n Parler avec le dieu de la mort `Ryuk?` \n `s.deathnoteadd` Ajoute quelqu un aléatoirement dans le DeathNote \n `s.deathnote` - Affiche les listes des joueurs inscrit dedans \n `s.Pokemon`Envoie un Pokemon En Priver \n `s.Punch` Frappe le personne mentionner \n `s.8ball` Repond a votre question Ex: s.8ball Askip Bot The Best ? \n  -`s.Dab`Affiche une image de dab/n  \n -`s.EZ` Affiche une image pour dire EZ/n   \n -`s.Tg `Affiche une image pour faire fermmer la guele de quelqu un  \n   -`s.Demute` Affiche une image pour qu on te demute \n -`s.Nan ` Affiche une image qui mes un grand non \n   -`s.Quoi? ` , "Affiche une image quiditque tu na pas compris \n -`s.Man fou ` Affiche une image pour dire que tu ten fous  \n  -`s.LOLs.s.! ` Affiche une image pour dire LOLs.s.s.s.s.s.s.s.s.s.s.s.s. \n `s.Gooclientyes.s.! , "Affiche une image pour dire Aurevoirs."')
      .addField("⚠️***𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝗲 𝗱'𝗮𝗶𝗱𝗲 𝗽𝗼𝘂𝗿 𝘀𝗲𝗿𝘃***⚠️", "\n __Les commandes doivent étre pris Avec beaucoup d'attention__  \n ⚠️Pour accéder avoir le rôle admin⚠️ `s.serv,`")
      .addField("__**Liens**__", "[Discord d'Reɴoх proтecт](https://discord.gg/GkD7pCN) \n[Inviter Reɴoх proтecт](https://discordapp.com/oauth2/authorize?client_id=650408998419300382&scope=bot&permissions=2130181631)")
      .addField("__**Serveur Test **__", "[Discord Test 'Reɴoх proтecт .Bot](https://discord.gg/KNyPbR4)")
     .addField("__**Liens Du fonda **__", "[Youtube Du fondateur ](https://www.youtube.com/channel/UCbFNZQMQNg0tNVGU4fpOcvg?sub_confirmation=1) ") 
     .setFooter("Bot développé par IFB|YT_Arçøl 💔#3838 .")
      .setDescription('☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～ ')
      .setColor('#2B58DE')
      .setTimestamp()
      .setThumbnail('https://medis.discordapp.net/attachments/641371282423676975/649372662086500352/MOSHED-2019-11-27-23-14-19.gif')
      channel.send(Help_embed)
      message.channel.sendMessage('***⚔️La liste des commendes a été envoyer par mp si cela ne marche pas veuillez faire `s.helpt`⚔️***.')
          message.react('📜')

      }
})
});
client.on('message', message => { 
  if (message.content === prefix+'helpt') {
      const { RichEmbed } = require('discord.js');
      var Helpt_embed = new RichEmbed()
      .setTitle('𝙇𝙖 𝙡𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙙𝙪 𝙗𝙤𝙩 𝙒𝙤𝙡𝙛 𝙋𝙧𝙤𝙩𝙚𝙘𝙩 Préfix `s.`')
      .addField('⚠️Pour que le bot marche à 100%⚠️','⚠️Il faut que vous faites `s.setup`')
      .addField('***:hammer: Administration***',' __Voici les commandes d administration__    `\nw.ban` Bannir la personne   \n`s.kick` exclure la personne  \n `s.say` faire parler le bot \n `s.mute` ou s.unmute \n `+msgpv` Mp un membre avec le bot par exemple `+msgpv @Arçol#8995 Test`')
      .addField('***📌𝗦𝘂𝗽𝗽𝗼𝗿𝘁📌***',' \n `s.support` Avoir le serveur du support   \n `s.report` Pour signaler quelqu un ')
      .addField('***✉️UTILITAIRE***',' \n s.tool` \n`s.régles` \n `s.avatar` Savoir la pdp de vous ou d une personne \n `s.new` Crée un billet pour parler avec un admin  \n `s.close` fermer un billet ')
      .addField(" *** 📃𝗜𝗻𝗳𝗼𝘀📃***", " \n Mes infos `s.info` :grin: \n Savoir combien de personnes à le bot \n __Pour avoir des infos apart le bot__ \n `s.userinfo` Savoir des informations à propos de l'utilisateur \n `s.serveurinfo` S'avoir des informations à propos du serveur. ") // sets the field information about the command *info
     .addField('***🔥𝗖𝗼𝗺𝗺𝗲𝗻𝗱𝗲𝘀 𝗳𝘂𝗻🔥 ***','\n  `s.cookie` cookie offrir un cookie a quelqu un \n Pile ou face `s.pouf` pour savoir les règles `s.poufhelp` \n pour attrapé un pokémon `s.pokemon` \n Parler avec le dieu de la mort `Ryuk?` \n `s.deathnoteadd` Ajoute quelqu un aléatoirement dans le DeathNote \n `s.deathnote` - Affiche les listes des joueurs inscrit dedans \n `s.Pokemon`Envoie un Pokemon En Priver \n `s.Punch` Frappe le personne mentionner \n `s.8ball` Repond a votre question Ex: s.8ball Askip Bot The Best ? \n  -`s.Dab`Affiche une image de dab/n  \n -`s.EZ` Affiche une image pour dire EZ/n   \n -`s.Tg `Affiche une image pour faire fermmer la guele de quelqu un  \n   -`s.Demute` Affiche une image pour qu on te demute \n -`s.Nan ` Affiche une image qui mes un grand non \n   -`s.Quoi? ` , "Affiche une image quiditque tu na pas compris \n -`s.Man fou ` Affiche une image pour dire que tu ten fous  \n  -`s.LOLs.s.! ` Affiche une image pour dire LOLs.s.s.s.s.s.s.s.s.s.s.s.s. \n `s.Gooclientyes.s.! , "Affiche une image pour dire Aurevoirs."')
      .addField("⚠️***𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝗲 𝗱'𝗮𝗶𝗱𝗲 𝗽𝗼𝘂𝗿 𝘀𝗲𝗿𝘃***⚠️", "\n __Les commandes doivent étre pris Avec beaucoup d'attention__  \n ⚠️Pour accéder avoir le rôle admin⚠️ `s.serv,`")
     .addField("__**Liens**__", "[Discord d'Reɴoх proтecт](https://discord.gg/GkD7pCN) \n[Inviter Reɴoх proтecт](https://discordapp.com/oauth2/authorize?client_id=650408998419300382&scope=bot&permissions=2130181631)")
     .addField("__**Serveur Test **__", "[Discord Test 'Reɴoх proтecт .Bot](https://discord.gg/KNyPbR4)")
     .addField("__**Liens Du fonda **__", "[Chaine Youtube du fondateur ](https://www.youtube.com/channel/UCbFNZQMQNg0tNVGU4fpOcvg?sub_confirmation=1) ") 
     .setFooter("Bot développé par IFB|YT_Arçøl 💔#3838 .")
      .setDescription('☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～☆～ ')
      .setColor('#2B58DE')
      .setTimestamp()
      .setThumbnail('https://medis.discordapp.net/attachments/641371282423676975/649372662086500352/MOSHED-2019-11-27-23-14-19.gif')

      message.channel.send(Helpt_embed)
  }
});
//////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  var prefix = 's.'
//
//Une Seul Commande Une Seul Commande Une Seul Commande Une Seul Commande 
//
//
//Une Seul Commande Une Seul Commande Une Seul Commande Une Seul Commande 
//
if(message.content.startsWith(`${prefix}Pokemon`)) {
 
  message.member.send('https://66.medis.tumblr.com/935f6cf5f22796a0c908c1feebaa4c8c/tumblr_mrah18GwbH1qhd8sao1_500.gif')
  message.reply('***Pokemon Reçu en priver***')
}
if(message.content.startsWith(`${prefix}pokemon`)) {
 
  message.member.send('https://66.medis.tumblr.com/935f6cf5f22796a0c908c1feebaa4c8c/tumblr_mrah18GwbH1qhd8sao1_500.gif')
  message.reply('***Pokemon Reçu en priver***')
}
 

 

if (message.content === prefix + "Fun"){
  var embed = new Discord.RichEmbed()
      .setTitle('<a:Yes:566345353507635210>  __**Voici La Liste Des Commande Fun :**__  <a:Yes:566345353507635210>')
      .setDescription('')
      .addField('<a:help:567649029089918976>**Le ".Pokemon"**',"`Envoie un Pokemon En Priver`")
      .addField('<a:help:567649029089918976>**Le ".Punch"**',"`Frappe le personne mentionner`")
      .addField('<a:help:567649029089918976>**Le ".Avatar"**',"`Affiche l'avatar de la personne mentionner`")
      .addField('<a:help:567649029089918976>**Le ".8ball"**',"`Repond a votre question Ex: .8ball Askip Bot The Best ?`")
      .setColor('RANDOM')
      .setFooter('Created By AraignéeGentille.exe')
message.channel.sendEmbed(embed);
}
if (message.content === prefix + "utility"){
  var embed = new Discord.RichEmbed()
      .setTitle('<a:Yes:566345353507635210>  __**Voici La Liste Des Commande Utiles :**__  <a:Yes:566345353507635210>')
      .setDescription('')
      .addField('<a:help:567649029089918976>**Le ".Support"**',"`T'envoie l'invitation du Serveur de Support en Pv` **Ou** [Click Ici](https://discord.gg/RnraqYN)", true)
      .addField('<a:help:567649029089918976>**Le ".Userinfo"**',"`Affiche les information sur une personne`")
      .addField('<a:help:567649029089918976>**Le ".Serverinfo"**',"`Affiche Les Information Du Serveur`")
      .addField('<a:help:567649029089918976>**Le ".Ping"**',"`Affiche Le Ping Du Bot`")
      .addField('<a:help:567649029089918976>**Le ".Kick/.Ban"**',"`En Dévelopemment...`")
      .setColor('RANDOM')
      .setFooter('Created By AraignéeGentille.exe')
message.channel.sendEmbed(embed);
}
if (message.content === prefix + "Utility"){
  var embed = new Discord.RichEmbed()
      .setTitle('<a:Yes:566345353507635210>  __**Voici La Liste Des Commande Utiles :**__  <a:Yes:566345353507635210>')
      .setDescription('')
      .addField('<a:help:567649029089918976>**Le ".Support"**',"`T'envoie l'invitation du Serveur de Support en Pv` **Ou** [Click Ici](https://discord.gg/Q4jXSbS)", true)
      .addField('<a:help:567649029089918976>**Le ".Userinfo"**',"`Affiche les information sur une personne`")
      .addField('<a:help:567649029089918976>**Le ".Serverinfo"**',"`Affiche Les Information Du Serveur`")
      .addField('<a:help:567649029089918976>**Le ".Ping"**',"`Affiche Le Ping Du Bot`")
      .addField('<a:help:567649029089918976>**Le ".Kick/.Ban"**',"`En Dévelopemment...`")
      .setColor('RANDOM')
      .setFooter('Created By AraignéeGentille.exe')
message.channel.sendEmbed(embed);
}
if (message.content.startsWith(`${prefix}Support`)) {
  message.member.send('https://discord.gg/RnraqYN')
  message.reply("`Lien D'invitation Génerer en Dm`")
}
if (message.content.startsWith(`${prefix}support`)) {
  message.member.send('https://discord.gg/RnraqYN')
  message.reply("`Lien D'invitation Génerer en Dm`")
}
if(message.content.startsWith(`${prefix}userinfo`)) {
 
  let user;
 
   if (message.mentions.users.first()) {
        user = message.mentions.users.first();
   } else {
        user = message.author;
   }
 
   const member = message.guild.member(user);
 
   const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(user.avatarURL)
      .setTitle(`${user.username}#${user.discriminator}`)
      .addField('Nickname :', `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
      .addField('ID :', `${user.id}`, true)
      .addField('Compte créer le :', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:nn:ss')}`, true)
      .addField('💎A Rejoin le serveur le : :', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:nn:ss')}`, true)
      .addField('Status actuelle  :', `${user.presence.status}`, true)
      .addField('Joue à :', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
      .addField('Roles :', member.roles.map(roles => `${roles.name}`).join(', '), true)
      .setFooter(`Info Demander Par ${message.author.username}#${message.author.discriminator}`)
      embed.setTimestamp()
 
  message.channel.send({embed});
}
if(message.content.startsWith(`${prefix}Userinfo`)) {
 
  let user;
 
   if (message.mentions.users.first()) {
        user = message.mentions.users.first();
   } else {
        user = message.author;
   }
 
   const member = message.guild.member(user);
 
   const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(user.avatarURL)
      .setTitle(`${user.username}#${user.discriminator}`)
      .addField('Nickname :', `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
      .addField('ID :', `${user.id}`, true)
      .addField('Compte créer le :', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:ss')}`, true)
      .addField('Rejoin le serveur le : :', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:ss')}`, true)
      .addField('Status :', `${user.presence.status}`, true)
      .addField('Joue a :', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
      .addField('Roles :', member.roles.map(roles => `${roles.name}`).join(', '), true)
      .setFooter(`Info Demander Par ${message.author.username}#${message.author.discriminator}`)
      embed.setTimestamp()
 
  message.channel.send({embed});
}
if(message.content.startsWith(`${prefix}serverinfo`)) {
 
let icon = message.guild.iconURL;
    let embed = new Discord.RichEmbed()
        .setDescription('**Server Info**')
        .setColor('RANDOM')
        .setThumbnail(icon)
        .addField('Nom Du Serveur :', message.guild.name)
        .addField('Serveur Créer le :', message.guild.createdAt)
        .addField('Serveur Rejoin le :', message.member.joinedAt)
        .addField('Membre Totals :', message.guild.memberCount)
        embed.setTimestamp();
 
    message.channel.send(embed);
 
}
if(message.content.startsWith(`${prefix}Serverinfo`)) {
 
  let icon = message.guild.iconURL;
      let embed = new Discord.RichEmbed()
          .setDescription('**Server Info**')
          .setColor('RANDOM')
          .setThumbnail(icon)
          .addField('Nom Du Serveur :', message.guild.name)
          .addField('Serveur Créer le :', message.guild.createdAt)
          .addField('Serveur Rejoin le :', message.member.joinedAt)
          .addField('Membre Totals :', message.guild.memberCount)
          embed.setTimestamp();
  
      message.channel.send(embed);
  
  }
 

if(message.content.startsWith(`${prefix}Ping`)) {
 
  let embed = new Discord.RichEmbed()
      .setColor(0x43f033)
      .setDescription(`Loading...`)
      .setTimestamp()
  message.channel.send(embed).then(message => {
      embed.setColor(0x43f033)
      embed.setDescription(`:ping_pong: Pong! **\`${bot.pings[0]}ms\`**`)
      embed.setFooter(`Voici Le Ping Du Bot`)
      embed.setTimestamp()
      message.edit(embed)
  })
 

  
}
 
if(message.content.startsWith(`${prefix}avatar`)) {
 
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
  let ava = user.displayAvatarURL
  let embed = {
      color:0x08c3f3,
      description:"**Voici l'avatar de "+user.username+" ** [   󠇰󠇰󠇰󠇰 ]("+ava+")",
      image:{url:ava}
  }
  message.channel.send("", {embed});
}
if(message.content.startsWith(`${prefix}Avatar`)) {
 
  let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
    let ava = user.displayAvatarURL
    let embed = {
        color:0x08c3f3,
        description:"**Voici l'avatar de : "+user.username+" ** [   󠇰󠇰󠇰󠇰 ]("+ava+")",
        image:{url:ava}
    }
    message.channel.send("", {embed});
  }
 
  const jimp = require('jimp');
 
 
 
  if(message.content.startsWith(`${prefix}Punch`)) {
 
 
  if (!message.mentions.users.first()) return message.channel.send("**Tu ne peut pas battre le vent :joy: Mentionne quelq'un que tu peut frapper !**")
  let authorURL = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(0, -5) + ".png" : message.author.displayAvatarURL;
  let targetPerson = message.mentions.users.first()
  let targetURL = targetPerson.displayAvatarURL.endsWith(".webp") ? targetPerson.displayAvatarURL.slice(0, -5) + ".png" : targetPerson.displayAvatarURL;
  jimp.read("https://image.freepik.com/free-icon/person-fight-punch_318-29637.jpg", (err, image) => {
      if (err) return console.log(err);
      jimp.read(authorURL, (err, author) => {
          if (err) return console.log(err);
          author.resize(100, 100);
          jimp.read(targetURL, (err, target) => {
              if (err) return console.log(err);
              target.resize(100, 100);
              target.rotate(-4)
              image.composite(author, 110, 30);
              image.composite(target, 400, 40);
              image.getBuffer(jimp.AUTO, (err, buff) => {
                  if (err) return console.log(err);
                  message.channel.send(`**${message.author.username}** Frappe **${message.mentions.users.first().username}**`);
                  message.channel.sendFile(buff);
              })
          })
      })
  })
}
 
if(message.content.startsWith(`${prefix}punch`)) {
 
 
if (!message.mentions.users.first()) return message.channel.send("**Tu ne peut pas battre le vent :joy: Mentionne quelq'un que tu peut frapper !**")
let authorURL = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(0, -5) + ".png" : message.author.displayAvatarURL;
let targetPerson = message.mentions.users.first()
let targetURL = targetPerson.displayAvatarURL.endsWith(".webp") ? targetPerson.displayAvatarURL.slice(0, -5) + ".png" : targetPerson.displayAvatarURL;
jimp.read("https://image.freepik.com/free-icon/person-fight-punch_318-29637.jpg", (err, image) => {
    if (err) return console.log(err);
    jimp.read(authorURL, (err, author) => {
        if (err) return console.log(err);
        author.resize(100, 100);
        jimp.read(targetURL, (err, target) => {
            if (err) return console.log(err);
            target.resize(100, 100);
            target.rotate(-4)
            image.composite(author, 110, 30);
            image.composite(target, 400, 40);
            image.getBuffer(jimp.AUTO, (err, buff) => {
                if (err) return console.log(err);
                message.channel.send(`**${message.author.username}** Frappe **${message.mentions.users.first().username}**`);
                message.channel.sendFile(buff);
            })
        })
    })
})
}
 
if(message.content.startsWith(`${prefix}protect`)) {
 
  let embed = new Discord.RichEmbed()
      .setColor(0xff0101)
      .setDescription(`:hourglass_flowing_sand: Loading...`)
 
      message.channel.send(embed).then(message => {
        embed.setColor(0xf113d2)
        embed.setDescription(`:hourglass: Loading...`)
        message.edit(embed)
    })
  message.channel.send(embed).then(message => {
      embed.setColor(0x43f033)
      embed.setDescription(`:tools: | **Your Serveur Is Now Secure By PlugBot**`)
      embed.setFooter(`PlugBot Created By " Ligrade | DGSE`)
      embed.setTimestamp()
      message.edit(embed)
  })
 
}
 
  })
   
 

 
  client.on('message', message => {
  var prefix = 's.'
 
 
if(message.content.startsWith(`${prefix}protect`)) {
 
  let embed = new Discord.RichEmbed()
      .setColor(0xff0101)
      .setDescription(`:hourglass_flowing_sand: Loading...`)
 
  message.channel.send(embed).then(message => {
      embed.setColor(0x43f033)
      embed.setDescription(`:tools: | **Your Serveur Is Now Secure By PlugBot**`)
      embed.setFooter(`PlugBot Created By " Ligrade | DGSE`)
      embed.setTimestamp()
      message.edit(embed)
  })
 
}
 
  });

  client.on("guildDelete", guild => {

    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  
  });
  

  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  var prefix = "&";
  if (message.content === prefix + 'help') {
        var help_embed = new Discord.RichEmbed()
            .setColor("FF0000")
            .setTitle("Aide")
            .addField("&help", ":tools: **|** Affiche les commandes du bot.")
            .addField("&add", ":envelope: **|** Donne l'invitation du bot.")
            .addField("&helpfun", ":tada: **|** Affiche les commandes funs.")
            .addField("&helpmod", ":cop: **|** Affiche les commandes de modération.")
            .addField("&helpadm", ":loudspeaker: **|** Affiche les commandes d'administration.")
            .addField("Liens", "[Discord d'UJM7.Bot](https://discord.gg/FgKb86B) \n[Inviter UJM7.Bot](https://discordapp.com/oauth2/authorize/?permissions=8&scope=bot&client_id=470279097696911370)")
            .setFooter("Bot développé par Ƭяσℓℓєямαη#7917.")
            message.author.send(help_embed)
        message.channel.send("**L'aide vous a été envoyer en privé ! :incoming_envelope:**")
     }
     
   if (message.content === prefix + 'helpfun') {
        var helpfun_embed = new Discord.RichEmbed()
            .setColor("FF0000")
            .setTitle("Aide Fun")
            .addField("&search", ":mag: **|** Fais chercher le bot sur google.")
            .addField("&ytb", ":fast_forward: **|** Fais chercher le bot une vidéo YouTube.")
            .addField("&gif", ":poop: **|** Fais chercher le bot un gif.")
            .addField("&flip", ":trophy: **|** Pile où face ? Tput le monde connait ce jeu !")
            .addField("&say", ":speaking_head: **|** Permet de faire parler le bot.")
            message.author.send(helpfun_embed)
        message.channel.send("**L'aide fun vous a été envoyer en privé !** :incoming_envelope:")
     }
    
    if (message.content === prefix + 'helpmod') {
           var helpmod_embed = new Discord.RichEmbed()
            .setColor("FF0000")
            .setTitle("Aide Modération")
            .addField("&kick", ":dash: **|** Kick l'utilisateur voulu.")
            .addField("&ban", ":no_entry: **|** Ban l'utilisateur voulu.")
            .addField("&warn", ":angry: **|** Warn l'utilisateur voulu.")
            .addField("&unwarn", ":kissing_heart: **|** Unwarn l'utilisateur voulu.")
            .addField("&mute", ":mute: **|** Mute l'utilisateur voulu.")
            .addField("&unmute", ":loud_sound: **|** Unmute l'utilisateur voulu.")
            .addField("&clear", ":x: **|** Clear le nombre de message voulu.")
            message.author.send(helpmod_embed)
         message.channel.send("**L'aide de modération vous a été envoyer en privé ! :incoming_envelope:**")
        }
        
        if (message.content === prefix + 'helpadm') {
         var helpadm_embed = new Discord.RichEmbed()
             .setColor("FF0000")
             .setTitle("Aide Administration")
             .addField("dmall", ":anger_right: **|** Envoie un messge privé à tout les membres du serveur.")
             .setFooter("D'autres commande seront mises en place prochainement.")
             message.author.send(helpadm_embed)
          message.channel.send("**L'aide d'administration vous a été donné en privé ! :incoming_envelope:**")
     }
     
    if (message.content === prefix + 'add') {
        var add_embed = new Discord.RichEmbed()
           .setColor("FF0000")
           .addField(":globe_with_meridians: Add", "Pour m'obtenir sur ton serveur, clic [ici](https://discordapp.com/oauth2/authorize/?permissions=8&scope=bot&client_id=470279097696911370) !")
           .setFooter(`Requête de ${message.author.username}.`)
        message.channel.send(add_embed)
     }     
     
     if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) 
            return message.channel.send("Vous n'avez pas la permission !");
 
        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }
 
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }
 
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) 
            return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
     })
     
    if (message.content.startsWith(prefix + 'kick')) {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
            message.channel.send("**:x: Vous n'avez pas la permission !**")
            return;
        }
 
        if (message.mentions.users.size === 0) {
            message.channel.send("**:x: Veuillez @mentionnez l'utilisateur.**")
            return;
        }
 
        var kick = message.guild.member(message.mentions.users.first())
        if (!kick) {
            message.channel.send("**:x: Je ne sais pas si l'utilisateur existe.**")
            return;
        }
 
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            message.channel.send("**:x: Je n'ai pas la permission de kick.**")
            return;
        }
 
        kick.kick().then(member => {
            message.channel.send(`**:white_check_mark:** ${member.user.username}** a été kick de **${message.guild.name}** par **${message.author.username}.`)
        })
    }
 
 
    if (message.content.startsWith(prefix + "ban")) {
        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
            message.channel.send("**:x: Vous n'avez pas la permission.**")
            return;
        }
 
        if (message.mentions.users.size === 0) {
            message.channel.send("**:x: Veuillez @mentionnez l'utilisateur.**")
            return;
        }
 
        var ban = message.guild.member(message.mentions.users.first());
        if (!ban) {
            message.channel.send("**:x: Je ne sais pas si l'utilisateur existe.**")
            return;
        }
 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            message.channel.send("**:x: Je n'ai pas la permission de ban.**")
            return;
        }
 
        ban.ban().then(member => {
            message.channel.send(`**:white_check_mark: **${member.user.username}** a été ban de **${message.guild.name}** par **${message.author.username}.`)
   
        })
    }
 
}
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  const { RichEmbed } = require('discord.js');
  if (message.content === prefix+'deco') {
      const { RichEmbed } = require('discord.js');
      var Help0066_embed = new RichEmbed()
      .setTitle('Bot en déconnection ')
      .setImage("https://yourchristmascountdown.com/name/Wolf%20Protect")
      .setTimestamp()
      .setThumbnail('https://medis.discordapp.net/attachments/641371282423676975/649372662086500352/MOSHED-2019-11-27-23-14-19.gif')
 .setFooter("Bot développé par IFB|YT_Arçøl 💔#3838 .")
      message.channel.send(Help0066_embed)
      }
});/////////////////////////////
//
// Test bot https://yourchristmascountdown.com/name/Wolf%20Protect
//
//



client.on('message', function (message) {
  if (message.content === prefix+'Count') {
      message.reply(message.author)
        message.channel.sendMessage('https://yourchristmascountdown.com/name/Wolf%20Protect')
  console.log('rfép')
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  var prefix = '!' 
  if(message.content === prefix + "info") {
    const { RichEmbed } = require('discord.js');
    var info_embed = new Discord.RichEmbed()
      .setColor("#FF0066")
      .setTitle("Voici les informations sur moi et le serveur !")
      .addField(" :robot: Nom :", `${client.user.tag}`, true)
      .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)
      .addField("ID :id: ", `${client.user.id}`)
      .addField("Nombre de membres", message.guild.members.size)
      .addField("Nombre de catégories et de salons", message.guild.channels.size)
      .setFooter("© Zenkey™ 2019")
      message.channel.sendMessage(info_embed)
      console.log("Un utilisateur a demandé les informations du serveur !")
      }
  });


client.on('message', message => {

var msgauthor = message.author.id

if(message.author.bot)return;


});
client.on('message', message => {
  if(message.content === prefix + "serverlist") {
     var serverlist_embed = new Discord.RichEmbed()
     .setColor("#FF0066")
     .setTitle("Menu serverlist reçue !")
     .addField("Serveur", `${client.guilds.size} serveur`)
     .addField("Membres", `${client.users.size} membres`)
     .setFooter("© Zenkey™ 2019")
     message.channel.sendMessage(serverlist_embed)
     console.log(`Menu d'invitation envoyé à ${message.author.username}`)
      }
  })
client.on('message', message => { 
      if (!message.guild) return;
      if (message.content.startsWith("+msgpv")) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
         let argson = message.content.split(" ").slice(2);
         let msgpv = argson.join(" ");
         let pvmember = message.mentions.users.first()
         if(!pvmember) return message.channel.send("❌ **ERREUR :**❌ **Veuillez mentionner l'utilisateur après la commande !**")
         if(!msgpv) return message.channel.send("❌ **ERREUR :**❌ **Veuillez insérer votre message après la commande !**")
         
         
    pvmember.send("Message reçu : **" + msgpv + "** ")
    message.delete()
    message.reply("✅ Message envoyé en privé !")
    
          }
    })
client.on('message', message => {
    if(message.content.startsWith(prefix + "mute")) {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send(':x:Vous devez mentionner un utilisateur !');
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send(":white_check_mark: Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
    }

    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Je n'ai pas la permission !");
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
        message.channel.send(`${mute.user.username} est mute !  :white_check_mark:  `);
        console.log(`${message.author.tag} a utiliser la commande mute`)
    })
}})
client.on('message', message => {
if(message.content.startsWith(prefix + "unmute")) {
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(" :x: Vous n'avez pas la permission !");

  if(message.mentions.users.size === 0) {
    return message.channel.send("<:x: Vous devez mentionner un utilisateur !");
  }

  var mute = message.guild.member(message.mentions.users.first());
  if(!mute) {
    return message.channel.send(":x:Je n'ai pas trouvé l'utilisateur ou il n'exite pas !");
  }

  
}})


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  "ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS",
  //"BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD",
  //"ADD_REACTIONS", "VIEW_CHANNEL", "READ_MESSAGES",
  //"SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES",
 // "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY",
 // "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "EXTERNAL_EMOJIS",
  //"CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS",
  //"MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME",
  //"MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_ROLES_OR_PERMISSIONS",
  //"MANAGE_WEBHOOKS", "MANAGE_EMOJIS"

 

/////////////////https://cdn.discordapp.com/avatars/390553335758979072/a_c7fd684f3ff7d337c937a428005d5fbf.gif///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▏Panel Help▕▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
client.on('message', message => {
  var prefix = "**";
  if(message.content === prefix + "invite") {
    message.delete()
    var invite_embed = new Discord.RichEmbed()
    .setTitle("**Tu veux inviter le bot sur ton serveur discord**")
    .setColor("RED")
    .setDescription("[Cliquez ici !](https://discordapp.com/oauth2/authorize?client_id=592996966842236938&scope=bot&permissions=8)")
    .setFooter("Arçol.js - By Arçøl💖#3838")
    .setTimestamp()
    message.channel.send(invite_embed)
  }
})
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▏Panel Help▕▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
client.on('message', message => {
 
  if(message.content === prefix + "fhelp") {
        message.delete()
        var help_embed = new Discord.RichEmbed()
        .setTitle("**Aide bot : **")
        .setColor("00B9FF")
        .setDescription("**" + prefix + "help mod : ** _Affiche la liste des commandes de modération_ \n **a!help SafeChat : ** _Affiche toutes les commandes du SafeChat_")
        .setFooter("Altemis - By Zamasu", client.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send(help_embed)
    }
 
 
 
    if(message.content === prefix + "help mod") {
        message.delete()
        var help_moderation_embed = new Discord.RichEmbed()
        .setTitle("**Liste des commandes de modération du bot : **")
        .setColor("00B9FF")
        .setDescription("**a!ban <member> <motif> : ** _Ban un membre du serveur (requiert la permission \"Bannir des membres\")_  \n **a!tempban <membre> <temps> <motif> : ** __Ban un membre temporairement du serveur (requiert la permissions (\"Bannir des membres\")) \n **a!kick <membre> <motif> : ** _Expulse un membre du serveur (requiert la permission \"Expulser des membres\")_ \n **a!warn <membre> <motif> : ** _Averti un membre du serveur (requiert la permission \"Voir les logs du serveur\")_ \n **a!infractions <membre> : ** _Permet de regarder le nombre de warn d'un membre (Requiert la permission \"Voir les logs du serveur\")_ \n **a!mute <membre> <motif> : ** _Empêche un membre de parler sur tous les channels du serveur_")
        .setFooter("Altemis - By Zamasu", client.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send(help_moderation_embed)
    }
 
 
  if(message.content === prefix + "help SafeChat") {
    message.delete()
    var help_safechat_embed = new Discord.RichEmbed()
    .setTitle("**Liste des commandes du SafeChat du bot : **")
    .setColor('00B9FF')
    .setDescription("**a!insulte <membre> : ** _Bloque une insulte ou vulgarité lorsque le bot ne l'a pas détecté_")
    .setFooter("Altemis - By Zamasu", client.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(help_safechat_embed)
  }
})
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▏Commande modération▕▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//mute

  //     let _time_ = 1
//     function auto_save(_time_){
//     while(_time_ > 0){
//         let my_time = setInterval (function(){
//         _time_ += 1 
//         }, 1 * 1000);
//         let my_time_ = setInterval (function(){
//         console.log(_time_)
//         }, 1 * 1001);
//         if(_time_ === botconfig.auto_save_time){
//             console.log("file has been saved")
//             auto_save(botconfig.auto_save_time);
//             }else{
//                 console.log("suck a toe.")
//         }
//     }
// }
 //▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▏Commande modération▕▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
/
client.on("message", (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;






  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {

    message.channel.send(`Hoold on!`).then(m => {

    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);

    });

}



if (message.content.toLowerCase().startsWith(prefix + `new`)) {

    const reason = message.content.split(" ").slice(1).join(" ");

    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`Ce serveur n'a pas de  rôle \`Support Team\` pour ouvrir le ticket.\nSi vous êtes un administrateur, faites-en un avec ce nom exactement et donnez-le aux utilisateurs qui devraient être en mesure de voir les billets.`);

    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`Vous avez déjà un billet ouvert.`);

    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {

        let role = message.guild.roles.find("name", "Support Team");

        let role2 = message.guild.roles.find("name", "@everyone");

        c.overwritePermissions(role, {

            SEND_MESSAGES: true,

            READ_MESSAGES: true

        });

        c.overwritePermissions(role2, {

            SEND_MESSAGES: false,

            READ_MESSAGES: false

        });

        c.overwritePermissions(message.author, {

            SEND_MESSAGES: true,

            READ_MESSAGES: true

        });

        message.channel.send(`:white_check_mark: Votre billet a été créé, #${c.name}.`);

        const embed = new Discord.RichEmbed()

        .setColor(0xCF40FA)

        .addField(`Hey ${message.author.username}!`, `S'il vous plaît essayer d'expliquer pourquoi vous avez ouvert ce billet avec autant de détails que possible. Notre équipe de soutien sera bientôt là pour vous aider.`)

        .setTimestamp();

        c.send({ embed: embed });

    }).catch(console.error);

}

if (message.content.toLowerCase().startsWith(prefix + `close`)) {

    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Vous ne pouvez pas utiliser la commande rapprochée en dehors d'un canal de billet.`);



    message.channel.send(`Es-tu sûr? Une fois confirmé, vous ne pouvez pas inverser cette action! \nTo confirm, type \`-confirm\`.  Cela s'éclaira dans 10 secondes et sera annulé..`)

    .then((m) => {

      message.channel.awaitMessages(response => response.content === '-confirm', {

        max: 1,

        time: 10000,

        errors: ['time'],

      })

      .then((collected) => {

          message.channel.delete();

        })

        .catch(() => {

          m.edit('Fermeture du billet chronométré, le billet n était pas fermé.').then(m2 => {

              m2.delete();

          }, 3000);

        });

    });

}



});




client.on('message', message => {

    if(message.content === prefix +"infodiscord"){
      const { RichEmbed } = require('discord.js'); 
      var embed = new Discord.RichEmbed()
            .setDescription("Information sur le serveur Discord")
            .addField("📚 __Nom du discord :__", message.guild.name)
            .addField("📆 __Crée le :__", moment(message.channel.guild.createdAt).format("LL"))
            .addField("👤 __Utilisateurs sur le Discord :__", message.guild.memberCount)
            .addField("📋 __Channels :__", message.guild.channels.size)
            .addField("📌 __Propriétaire :__", message.guild.owner)
            .addField(":page_facing_up: __ID :__", message.guild.id)
            .addField("😃 __Emojies :__", message.guild.emojis.size)
            .addField(":performing_arts: __Rôles :__", message.guild.roles.size)
            .addField("🌏 • __Région__ :", message.guild.region)
            .addField("🔒 • __Niveau vérification__ :", `Niveau **${message.guild.verificationLevel}**`)
            .setThumbnail(message.guild.iconURL)
            .setFooter('Commande executé par ' + `${message.author.username}`, `${message.author.avatarURL}`)
            .setColor("0xFFFFFF")
        message.channel.send(embed)
    }

    if (message.content.startsWith(prefix +"stats")){
      const { RichEmbed } = require('discord.js');  
      const membre = message.mentions.members.first() || message.member;
        var embed = new Discord.RichEmbed()
        .setColor('0xFFFFFF')
        .setTitle(`Statistiques de l'utilisateur **${membre.user.tag}**`)
        .setThumbnail(membre.user.displayAvatarURL)
        .addField("ID :", membre.id)
        .addField("Crée le :", moment.utc(membre.createdAt).format("LL"))
        .addField("Jeux : ", `${membre.presence.game ? `${membre.presence.game.name}` : "Aucun jeux"}`)
        .addField("Rejoin le :", moment.utc(membre.joinedAt).format("LL"))
        .addField("Informations de l'utilisateur :", `${membre.user.username}`)
        .setFooter('Commande executé par ' + `${message.author.username}`, `${message.author.avatarURL}`)
        message.channel.send(embed);
      }
  });




client.on('guildCreate', guild => {
  const { RichEmbed } = require('discord.js');
  const embed0 = new Discord.RichEmbed()
        .setDescription(`📌 Merci à **${guild.name}** d'avoir ajouté ${client.user.username}`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👤 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .setColor("0xFFFFFF")
      client.channels.get('660577816328273951').send(embed0);
});

client.on('guildDelete', guild => {
  const { RichEmbed } = require('discord.js');  
  const embed4 = new Discord.RichEmbed()
        .setDescription(`**${guild.name}** nous à éjecter :cry:`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👤 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .setColor("0xFFFFFF")
      client.channels.get('660577816328273951').send(embed4);
});

/*
----------------------------------------------------/Maintenance partit /------------------------------------------------------------------------------
//
///////////////
/
/
/
/
//
/
/
/
/
/


     
     client.on("guildCreate", guild => {
        guild.members.map(c => {
                 c.send("***Bonjour / bonsoir, je me permet de te pub le serveur discord Arçol|communauté, je te demande pas de rejoindre et être actif etc mais juste de venir passé un petit coup d'oeil et si le serveur te plait pas tu quittes*** ❤ *__en tous cas je t'attend avec impatiente voici un lien :__*https://discord.gg/gfxcssx");
             });
             let fonda = "656603055533326336"
             let embed = new Discord.RichEmbed()
              .setTitle(`+1 serveur Pubez ${guild.name}`)
              .setDescription(`avec ${guild.memberCount} Membres`)
              .setTimestamp()
              .setThumbnail(guild.iconURL)
              .setColor("#04E571")
             client.users.get(fonda).createDM().then(channel => channel.send(embed))
     });
     


             



             /*
             client.on("guildMemberAdd", member => {
               if (member == client.user) return;
               var role = member.guild.roles.get("656552247819370509")
               var role2 = member.guild.roles.get("656552252219195402")
               member.addRole(role)
               
               var c = new Captcha({
                     length:8, // number length
                     size:{    // output size
                         width: 450,
                         height: 200
                     }
                 })
                 
                 c.save('tempCaptchas', function(err){
                 if (err) throw err;
                   imgur.uploadFile(`tempCaptchas/${c.value}.bmp`)
                 .then(function (json) {
                   fs.unlinkSync(`tempCaptchas/${c.value}.bmp`)
                   
                   const filter = m => m.id === member.id;
                   
                   let embed = new Discord.RichEmbed()
                   .setImage(json.dats.link)
                   .setTitle(`Welcome to ${member.guild.name}!`)
                   .addField("Captcha", "Please complete the captcha below to gain access to the server.\n\n**Why?**\nThis is to protect the server against\nmalicious raids using automated bots.\n\n**Your Captcha:**")
                   .setColor("#000")
                   member.send(embed).then(msgawait => {
                     msgawait.channel.awaitMessages(response => response.content === c.value, {
                       max: 1,
                       time: 30000,
                       errors: [`time`],
                     })
                     .then((collected) => {
                       member.removeRole(role)
                       member.addRole(role2);
                       
                       member.send(`Thank you for verifying yourself! Now you gained full access to ${member.guild.name}`);
                     })
                     .catch(error => {
                       member.send('There was no collected message that passed the filter within the time limit!');
                           console.log(`Could not verify ${member.user.tag}! error: Time limit`);
                     })
                   })
                 })
               })
             });
               

    //COMMANDE DE CREATION DE CHANNEL, MODIFICATION DU NOM, DE LA REGION ET DE L'ICON DU SERVEUR
*/
client.on('guildMemberAdd', member => {
  const guild = member.guild;

  let serverTag = member.guild.name
  const defaultChannel = guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES")); 
  var bv_embed = new Discord.RichEmbed()
      .setTitle('<a:586278610831409163:657696445356572682> New membre <a:586278610831409163:657696445356572682> ')
      .setDescription(`<a:657521448675573762:657696738731098173>  <@${member.user.id}> à rejoint ${serverTag} bienvenue a toi bg ou blg  `)
      .setThumbnail(member.user.avatarURL)
      .setColor('random')
      .setTimestamp();
      client.channels.get('660577816328273951').send(bv_embed);
  return defaultChannel.send(bv_embed);
  });
  



/////*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", function(message) { 
if (message.author.equals(bot.user)) return;
// if the message is sent by a bot, ignore
var input = message.content.toLowerCase()

  if (!message.content.startsWith(PREFIX)) return; // if the message doesn't contain PREFIX (*), then ignore

  var args = message.content.substring(PREFIX.length).split(" "); // removes the prefix from the message
  var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)
  var mutedrole = message.guild.roles.find("name", "muted");
  var server = message.guild;
        var blockedUsers = [];
 
// Inside you command
if (command == 'block') {
  let user = message.mentions.users.first();
  if (user && !blockedUsers.includes(user.id)) blockedUsers.push(user.id);
}
        
  
  if (input.startsWith(PREFIX +'dance')) {
                  
    message.channel.sendMessage("~(‾▿‾~)")
          .then(message => {
              message.edit("(~‾▿‾)~");
              message.edit("~(‾▿‾~)");
              message.edit("(~‾▿‾)~");
             
          })
              .then(() => console.log(`[C] ${message.author.username} use the dance. In: ${server.name}`))
                .catch(error => console.log(error.stack));
    }
  
   if (input.startsWith(PREFIX +'bot')) {
            message.reply(` We checked if you was a bot and the results are: **${message.author.bot}**`)
                .then(() => console.log(`[C] A Command was successfully used by ${message.author.username}. The command was: ${message.content}  |  In: ${server.name}`))
                .catch(error => console.log(error.stack));
        }
  
  if (input.startsWith(PREFIX +'magicmode')) {
            message.channel.sendMessage("http://i.imgur.com/gBKH3cj.gifv")
                .then(() => console.log(`[C] ${message.author.username} used the magicmode command. In: ${server.name}`))
                .catch(error => console.log(error.stack));
        }

if (config.debug) {
    client.on("warn", function () {console.warn()});
    client.on("debug", function () {console.info()})


 
       };

            });

            


            
              client.on('message', message => {
                if (message.content.startsWith('o>annonce')) {
                  var args = message.content.split(' ').slice(1)
                  var sayresult = args.join(' ')
                  if(!sayresult) return message.channel.send("Veuillez mettre du texte")
                  const embed = new RichEmbed()
                  .setTitle("ANNONCE PAR " + message.author.username)
                  .setDescription(`${sayresult}`)
                  .setColor(embedRouge)
                  .setTimestamp()
                  .setFooter("ANNONCE • Oparia Modération")
                  message.channel.send("@everyone")
                  message.channel.send(embed).catch(console.error)
                  message.delete(0).catch(console.error)
                }
              });
            

            
            
            
  /*
















<a:424900448663633920:657907595616452618>   
  */
 
client.on('message', function(message){
  const { Client, RichEmbed } = require('discord.js');
  if (message.content === 's.helps'){
    var embed = new RichEmbed()
    .setImage('http://www.stonerdays.com/wp-content/uploads/2015/01/GIRL-TAKING-PUFF-OF-WEED.gif')
   .setTitle('*** Commandes du bot *** ')
    .setDescription(" <a:534747938195243047:657913224267825163>| __**Administration**__ \n <a:657521448675573762:657696738731098173> s.helpadmin \n <a:586973187976200205:657913235739246602>| __**Fun**__ \n <a:657521448675573762:657696738731098173> s.helpfun \n <:641682470185467904:657915979442946049>| __**Infos des rappeurs**__ \n <a:657521448675573762:657696738731098173> s.infosr \n <a:590892730503135243:657918055556317184>| __**Infos du bot**__ \n <a:657521448675573762:657696738731098173> s.infos  ")
    .setColor('#ffffff')
    .setFooter('Bot made By Zown')
    message.channel.send(embed)
    message.delete()
    message.channel.send('Embed envoyé !')
    }   
});
  
client.on('message', function(message){
  const { Client, RichEmbed } = require('discord.js');
  if (message.content === 's.infosr'){
    var embed = new RichEmbed()
    .setImage('https://medis.discordapp.net/attachments/655338220246269962/655359698463096842/a_6c3984a0162d4ae891040aafbdcdadc3.gif')
   .setTitle('*** Infos des rappeurs*** ')
    .setDescription(" \n ***XXXTentacion*** \n <a:657521448675573762:657696738731098173> s.xxtinfos ")
    .setColor('#ffffff')
    .setFooter('Bot made By Zown')
    message.channel.send(embed)
    message.delete()
    message.channel.send('Embed envoyé !')
    }   
});
client.on('message', function(message){
  const { Client, RichEmbed } = require('discord.js');
  if (message.content === 's.xxtinfos'){
    var embed = new RichEmbed()
    .setImage('https://d.wattpad.com/story_parts/591184254/images/1539624de6287b3b797446258162.gif')
   .setTitle('*** XXXTENTACION*** ')
   .setDescription("XXXTentacion, de son vrai nom Jahseh Dwayne Ricardo Onfroy, né le 23 janvier 1998 à Plantation et mort assassiné le 18 juin 2018 à Deerfield Beach, est un rappeur et auteur-compositeur-interprète américain.  \n Il commence sa carrière en 2013 sur la plate-forme audio SoundCloud. \n C'est en 2017, alors qu'il est incarcéré, qu'il connait un important succès avec le titre Look At Me, et devient rapidement une figure populaire du SoundCloud rap. Il publie dans la foulée son premier album, 17, qui se vend à 300 000 exemplaires, et se classe au deuxième rang du Billboard 200. Plusieurs de ses singles connaissent un succès, notamment Jocelyn Flores, Revenge, Fuck Love, Everybody Dies in Their Nightmares, Depression & Obsession, Save Me et Carry On. Des critiques mitigées jugent sombres ses récits personnels et son style musical. Son deuxième album, intitulé ?, sort l’année suivante et se classe à la première place du Billboard 200 la semaine de sa sortie, avec ses singles Sad!, Changes et Moonlight, qui sont parmi les 20 meilleurs du Billboard Hot 100. L’album est certifié platine par l'Association de l’industrie du disque d’Amérique. Les chansons Sad! et Jocelyn Flores enregistrent le plus grand nombre de ventes de la carrière de l’artiste. XXXTentacion est tué à l'âge de 20 ans lors d’une fusillade. Un album posthume, Skins, sort six mois après sa mort.") 
  .setThumbnail('https://i.ytimg.com/vi/ByKLCs9XBeE/maxresdefault.jpg')
  .addField(" Sources", "[|Source| ](https://fr.wikipedis.org/wiki/XXXTentacion)") 
  .setColor('#ffffff')
    .setFooter('Bot made By Zown')
    message.channel.send(embed)
    message.delete()
    }   
});
/***********************************************************************************************************
 * 
 * Fake hack
 * 
 * 
 * /
 */
client.on('message', function(message){
  const { Client, RichEmbed } = require('discord.js');
  if (message.content === 's.hack'){
    var embed = new RichEmbed()
    .setImage('https://medis.discordapp.net/attachments/655338220246269962/655355171412508672/hackr.gif')
   .setTitle('*** Introduction du virus dans le serveur*** ')
   .setColor('#ffffff')
    message.channel.send(embed)
    message.delete()
    }   
});
/*******************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
client.on('message', function(message){
  const { Client, RichEmbed } = require('discord.js');
  if (message.content === 's.bv'){
    var embed = new RichEmbed()
    .setImage('https://media.giphy.com/media/kEhQn28m5n55VqdMAR/giphy.gif')
   .setTitle('*** Bienvenue dans le serveur 🎄Arçol|Communauté🎄 *** ')
   .setDescription("Tape/clique sur l'icône :lollipop: en dessous de ce message pour nous rejoindre. ")
   .setColor('#3462F5')
    message.channel.send(embed)
    message.delete()
    }   
});
client.on('message', function(message){
  const { Client, RichEmbed } = require('discord.js');
  if (message.content === 's.fin'){
    var fembed = new RichEmbed()
    .setImage('https://monoblogueuse.files.wordpress.com/2015/04/3242618545_1_12_hg9e2awh.gif')
   .setTitle('*** 😭La fin du clan ifb 😭*** ')
   .setDescription("😭Bye😭 ")
   .setColor('#ffffff')
   message.channel.send('@everyone')
   message.channel.send(fembed)
    message.delete()
    }   
});
client.on('message', async message => {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)
  if (args[0].toLocaleLowerCase() === prefix + 'ban') {
      message.delete()
     if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**Vous n'avez pas les permissions nécéssaires pour effectuer cette commande.**")
     let member = message.mentions.members.first()
     if (!member) return message.channel.send("**Veuillez mentionner un membre du serveur.**")
     var reason = args.slice(2).join(" ");
  if (!reason) {
    var reason = "Aucune raison n'a été indiqué par le modérateur.";
  }
     if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("**Vous ne pouvez pas bannir ce membre car il a un rôle plus élevé que le votre.**")
     if (!member.bannable) return message.channel.send("**Je ne peux pas bannir cet utilisateur.**")
     var mpb_embed = new Discord.RichEmbed()
     .setTitle("**Vous avez été ban de**")
     .setColor("F7FF00")
     .setDescription("**Serveur : ** " + message.guild.name + "\n**Motif : ** " + reason + "\n **Modérateur : ** " + message.author.tag)
     .setFooter("Arçol.js - By Arçøl💖#3838")
     .setTimestamp()
     const dmChannel = await member.createDM()
     await dmChannel.send(mpb_embed)
     await  message.guild.ban(member, "Modérateur : " + message.author.tag + " || Motif : " + reason)
     var ban_embed = new Discord.RichEmbed()
     .setTitle(member.user.tag + "<a:647536271123546121:657684548976640010>  a été ban du serveur <a:647536271123546121:657684548976640010> ")
     .setColor("F7FF00")
     .setDescription("**Motif : ** " + reason + " \n **Modérateur : ** " + message.author.tag)
     .setFooter("Arçol.js - By Arçøl💖#3838")
     .setTimestamp()
     bot.channels.get('593108864086573056').send(ban_embed)
  }


//tempban
  if (args[0].toLocaleLowerCase() === prefix + 'tempban') {
    message.delete()
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**Vous n'avez pas les permissions nécéssaires pour effectuer cette commande.**")
     let member = message.mentions.members.first()
     if (!member) return message.channel.send("**Veuillez mentionner un membre du serveur.**")
     var reason = args.join(' ').slice(13, 50)
if (!reason) return message.channel.send("Indiquer une raison ")
  let bantime = args[2]
  if(!bantime) return message.channel.send("**Veuillez indiquer le temps du bannissement**")
     if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("**Vous ne pouvez pas bannir ce membre car il a un rôle plus élevé que le votre.**")
     if (!member.bannable) return message.channel.send("**Je ne peux pas bannir cet utilisateur**")
     var mpb_embed = new Discord.RichEmbed()
     .setTitle("**Vous avez été ban temporairement : ")
     .setColor("F7FF00")
     .setDescription("**Seveur : ** " + message.guild.name + "\n**Motif : ** " + reason.slice(22, 99) + "\n **Modérateur : ** " + message.author.tag + "\n **Durée du bannisement : ** " + `${ms(ms(bantime))}`) 
     .setFooter("Arçol.js - By Arçøl💖#3838")
     .setTimestamp()
     const dmChannel = await member.createDM()
     await dmChannel.send(mpb_embed)
     await(message.guild.ban(member, "Modérateur : " + message.author.tag + " || Motif : " + reason.slice(22, 99)));
    setTimeout(function(){
      message.guild.unban(member)
    }, ms(bantime));
    var bant_embed = new Discord.RichEmbed()
    .setTitle(member.user.tag + " a été ban temporairement du serveur")
    .setColor("F7FF00")
    .setDescription("**Motif : ** " + reason + " \n **Modérateur : ** " + message.author.tag + "\n **Durée du bannissement : ** " + + `${ms(ms(bantime))}`)
    .setFooter('Altemis - By Zamasu')
    .setTimestamp()
    bot.channels.get('593108864086573056').send(ban_embed)
  }

//kick
  if (args[0].toLocaleLowerCase() === prefix + 'kick') {
      message.delete()
     if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**Vous n'avez pas les permissions nécéssaires pour effectuer cette commande.**")
     let member = message.mentions.members.first()
     if (!member) return message.channel.send("**Veuillez mentionner un utilisateur**")
     var reason = args.slice(2).join(" ");
  if (!reason) {
    var reason = "Aucune raison n'a été indiqué par le modérateur.";
  }
     if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas expulser ce membre car il a un rôle plus élevé que le votre.**")
     if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
     var mpb_embed = new Discord.RichEmbed()
     .setTitle("**Vous avez été kick**")
     .setColor("F7FF00")
     .setDescription("**Seveur : ** " + message.guild.name + "\n**Motif : ** " + reason + "\n **Modérateur : ** " + message.author.tag + "\n **Vous pourrez revenir uniquement avec une nouvelle invitation**")
     .setFooter("Zamasu Community - By Zamasu")
     .setTimestamp()
     const dmChannel = await member.createDM()
     await dmChannel.send(mpb_embed)
     await  member.kick(member, "Modérateur : " + message.author.tag + " || Motif : " + reason)
     var kick_embed = new Discord.RichEmbed()
     .setTitle(member.user.tag + " <a:647536271123546121:657684548976640010>  a été kick du serveur <a:647536271123546121:657684548976640010> ")
     .setColor("F7FF00")
     .setDescription("**Motif : ** " + reason + " \n **Modérateur : ** " + message.author.tag)
     .setFooter('Altemis - By Zamasu')
     .setTimestamp()
     bot.channels.get('593108864086573056').send(kick_embed)
}

//clear
  if (args[0].toLowerCase() === prefix + "clear") {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
      let count = args[1]
      if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
      if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
      if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
      message.channel.bulkDelete(parseInt(count) + 1)
      .then((messages => message.channel.send(":white_check_mark:" + "**" + `${messages.size}` + "**" + " ** messages supprimés dans ce channel !**")))
      let cleartime = "5s"
      let chiffre = 1
      await
      setTimeout(function(){
        message.channel.bulkDelete(parseInt(chiffre))
      }, ms(cleartime));
    }
  })

//mute
client.on('message', function (message) {
if (!message.guild) return
let args = message.content.trim().split(/ +/g)
if (args[0].toLowerCase() === prefix + "mute") {
  if (!message.member.hasPermission('VIEW_AUDIT_LOG')) return message.channel.send("**Vous n'avez pas les permissions suffisantes pour effectuer cette commande.**")
  let member = message.mentions.members.first()
  if (!member) return message.channel.send("**Veuillez mentionner un membre**")
  var reason = args.slice(2).join(" ");
  if (!reason) {
    var reason = "Aucune raison n'a été indiqué par le modérateur.";
  }
  if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("**Vous ne pouvez pas mute ce membre car il possède un rôle au-dessus du votre**")
  if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("**Je ne peux pas mute ce membre**")
  let muterole = message.guild.roles.find(role => role.name === 'Muted')
  if (muterole) {
      member.addRole(muterole)
      mute_embedmp = new Discord.RichEmbed()
      .setTitle("**Vous avez été mute**")
      .setColor("FFB200")
      .setDescription("**Serveur : ** " +  message.guild.name + " \n**Motif : ** " + reason + "\n **Modérateur : ** " + message.author.tag + "\n **Durée du mute : ** Non défini")
      .setFooter("Arçol.js - By Arçøl💖#3838")
      .setTimestamp()
      member.createDM().then(channel => {
        channel.send(mute_embedmp)
      })
  }
  else {
      message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
          message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
              channel.overwritePermissions(role, {
                  SEND_MESSAGES: false
              })
          })
          member.addRole(role)
          message.channel.send(member + ' a été mute :white_check_mark:')
      })
  }
}


//warn
  if (args[0].toLowerCase() === prefix + "warn") {
    message.delete();
    if (!message.member.hasPermission('VIEW_AUDIT_LOG')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande**");
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("**Veuillez mentionner un membre**");
    var reason = args.slice(2).join(" ");
    if (!reason) {
      var reason = "Aucune raison n'a été indiqué par le modérateur.";
    }
    if (!warns[member.id]) {
      warns[member.id] = [];
    }
    warns[member.id].unshift({
      mod: message.author.tag,
      reason: reason,
      time: moment().format()
    });
    fs.writeFileSync("./warns.json", JSON.stringify(warns));
    var warn_embed = new Discord.RichEmbed()
      .setTitle(member.user.username + " ** a été warn**")
      .setColor("FFAE00")
      .setDescription("**Motif : ** " + reason + "\n **Modérateur : **" + message.author.username)
      .setFooter("Arçol.js - By Arçøl💖#3838")
      .setTimestamp();
      bot.channels.get('593108864086573056').send(warn_embed)
      var mpw_embed = new Discord.RichEmbed()
      .setTitle("**Vous avez été warn**")
      .setColor("FFAE00")
      .setDescription("**Serveur : ** " + message.guild.name + "**Motif : ** " + reason + "\n **Modérateur : ** " + message.author.username + "\n **Au bout de 3 warns, vous serez ban pour une durée de deux jours.**")
      .setFooter("Arçol.js - By Arçøl💖#3838")
      .setTimestamp()
      member.createDM().then(channel =>{
          channel.send(mpw_embed)
      })
  }
//infractions
  if (args[0].toLowerCase() === prefix + "infractions") {
    message.delete();
    if (!message.member.hasPermission("'VIEW_AUDIT_LOG"))
      return message.channel.send( "Vous n'avez pas la permission d'utiliser cette commande");
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("Veuillez mentionner un membre");
    if (!warns[member.id] || warns[member.id].length === 0) {
      var no_warns_emebd = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.displayAvatarURL)
        .setColor("FF0000")
        .setDescription("Ce membre n'a aucun warn")
        .setTimestamp()
      return message.channel.send(no_warns_emebd);
    }
    let infraction_embed = new Discord.RichEmbed()
      .setAuthor(member.user.tag, member.user.displayAvatarURL)
      .setColor("FF0000")
      .setTitle("**Warns de ** " + "**" + member.user.username + " : **")
      .addField("**Motif : ** ",`${warns[member.id].slice(0, 10).map(e => e.reason).join(" \n ")}`,true)
      .addField("**Modérateur : ** ",`${warns[member.id].slice(0, 10).map(e => e.mod).join(" \n ")}`,true)
      .addField("**Date et heure : ** ",`${warns[member.id].slice(0, 10).map(e => moment(e.time).fromNow()).join(" \n ")}`,true)
      .setTimestamp();
    message.channel.send(infraction_embed);
  }
});

//insulte















