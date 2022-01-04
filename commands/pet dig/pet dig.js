module.exports = {
  name: "pet-dig", 
  aliases: ['pd'], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[45;100]];$authorID]
$setGlobalUserVar[petxp;$sum[$getGlobalUserVar[petxp;$authorID];$random[5;10]];$authorID]
$color[RANDOM]
$thumbnail[https://i.pinimg.com/originals/d6/3d/b4/d63db40edfd1d64df16e049ce0290bf9.gif]
$title[mandaste a $getGlobalUserVar[petname;$mentioned[1;yes]] a que escabara]

$setGlobalUserVar[staminap;$sub[$getGlobalUserVar[staminap;$authorID];$random[1;5]];$authorID]

$description[
$username, mandaste a tu mascota a que escabara y econtro $randomText[una chanquleta;un hueso;un hueso;un hueso;un guante;una piedra valiosa;hierro;petrolio;oro;diamante]
]
$footer[💵 +$$random[45;100] | 🗡 +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]
$onlyIf[$getGlobalUserVar[dog;$authorID]==1;]
$onlyIf[$getGlobalUserVar[staminap;$authorID]>=20;tu mascota tiene la stamina muy bajita mandalo a dormir \`,pet-sleep\`]
`
}