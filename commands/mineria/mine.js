module.exports = {
  name: "mine", 
  aliases: ['m'], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[45;100]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$setGlobalUserVar[mining;$sum[$getGlobalUserVar[mining;$authorID];$random[10;20]];$authorID]

$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$image[https://darkiemindyou.files.wordpress.com/2017/01/miner9big.gif]
$title[Cueva]
$description[
$username, fue de mineria con su  $customEmoji[woodenpickaxe] y escabo alrededor de $random[10;30] bloques y consiguio $randomText[piedra comun;piedra;piedra;piedra;piedra;piedra;hierro;piedra;piedra;piedra;piedra;carbon]]
$footer[💵 +$$random[45;100] | 🗡 +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]
$onlyIf[$getGlobalUserVar[pico1;$authorID]==1;]
$onlyIf[$getGlobalUserVar[pico;$authorID]==1;Que crees que haces?, necesitas un pico visita la tienda y comprate uno \`,tienda\`]
`
}