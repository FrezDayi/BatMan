const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Link Gönderiliyor...').then(message => {
   var espriler = ['**Sitemiz : http://thorrr.cf/**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'site',
  description: 'Bot Sitemizin Linkini Atar.',
  usage: 'site'
};
