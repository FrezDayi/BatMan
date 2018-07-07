exports.run = async (client, msg, args) => {
  let sans = [
    'Senden Şanlsınını Görmedim \nPara Sende:money_mouth:  \nKızlar Peşinde :heart_eyes:  \nAyrıca Çok Şanslı Birisin :game_die:',
    'Bahsızsın Elinde Hiç Bişi Yok\nElinde HİÇ Bişi Yok :smoking:',
    ':trident:  Çok Şanslısın :trident:',
    ':fleur_de_lis: Aşk Konusunda Efsanesin :fleur_de_lis:   \nYakışıklısın :man_in_tuxedo:  \nKızlar Peşinde :heart_eyes:',
    'Para Konusunda Şanslısın :money_with_wings: '
  ]

message.channel.send({embed: {
  color: (0x00ffc4),
  description: (` ${member} ${sans}.`)
}})
}


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };

exports.help = {
  name: 'şanslımıyım',
  description: 'Bot Şanslı Olup Olmadığınızı Gösterir.',
  usage: 'şanslımıyım'
 }
