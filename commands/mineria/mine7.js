module.exports = {
  name: "mine", 
  aliases: ['m'], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[120;160]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$setGlobalUserVar[mining;$sum[$getGlobalUserVar[mining;$authorID];$random[10;20]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$image[https://darkiemindyou.files.wordpress.com/2017/01/miner9big.gif]
$title[Cueva]
$description[
$username, fue de mineria con su $customEmoji[ironpickaxe] y escabo alrededor de $random[10;30] bloques y consiguio $randomText[piedra comun;piedra;piedra;piedra;piedra;piedra;hierro;piedra;piedra;piedra;piedra;carbon]]
$footer[💵 +$$random[120;160] | 🗡 +$random[5;10]xp]
$globalCooldown[50s;Try again in %time%]
$onlyIf[$getGlobalUserVar[pico7;$authorID]==1;]
$onlyIf[$getGlobalUserVar[pico;$authorID]==1;]
`
}