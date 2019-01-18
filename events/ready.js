const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "💪 Botumuz Yeni Açılmıstır ",  
        "💡 y?davet | Botumuzu ekleyin",
        "👨 Bot Sizin Emrinizdedir!",
        "🌍 İyi Günler Dilerim !",
        "?yardım 🔥 + ?davet 🔥 + ?hd"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/berdanvarol");
        }, 2 * 2500);
}