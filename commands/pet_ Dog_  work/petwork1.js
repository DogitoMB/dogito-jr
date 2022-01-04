module.exports = {
  name: "pet-work", 
  aliases: ['pw'], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[45;100]];$authorID]
$setGlobalUserVar[petxp;$sum[$getGlobalUserVar[petxp;$authorID];$random[5;10]];$authorID]
$color[RANDOM]
$thumbnail[https://i.imgur.com/DuDe3YI.gif]
$title[mandaste a $getGlobalUserVar[petname;$mentioned[1;yes]] a trabajar]

$setGlobalUserVar[staminap;$sub[$getGlobalUserVar[staminap;$authorID];$random[1;5]];$authorID]

$description[
$username, $randomText[mandaste a tu mascota a trabajar;mandaste a tu mascota a que vaye a buscar dinero]
]
$footer[💵 +$$random[45;100] | 🗡 +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]
$onlyIf[$getGlobalUserVar[petn;$authorID]==0;]
$onlyIf[$getGlobalUserVar[dog;$authorID]==1;]
$onlyIf[$getGlobalUserVar[staminap;$authorID]>=20;tu mascota tiene la stamina muy bajita mandalo a dormir \`,pet-sleep\`]
`
}