const Discord = require('discord.js')
const client = new Discord.Client();
let prefix = "/"
let PREFIX = "/"
//    Add emoji name




//    Add role name



client.login('NjY1MzE3NDgyMDcxODUxMDE5.Xhj3Rg.5EENNYK_nKMCOB-OReeLGCCt0R4')

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






client.on('ready', () => {
   setInterval(() => {
       const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
       client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});
