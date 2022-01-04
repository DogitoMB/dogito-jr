module.exports = {
  name: "pet-sleep", 
  aliases: ['ps'], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[15;30]];$authorID]
$setGlobalUserVar[petxp;$sum[$getGlobalUserVar[petxp;$authorID];$random[5;10]];$authorID]
$color[RANDOM]
$setGlobalUserVar[staminap;100;$authorID]
$setGlobalUserVar[peth;100;$authorID]

$thumbnail[https://cdn.discordapp.com/attachments/926189964960604160/926511138445852752/unknown.png]
$title[mandaste a $getGlobalUserVar[petname;$mentioned[1;yes]] a dormir]
$description[
$username, $randomText[mandaste a tu mascota a trabajar;mandaste a tu mascota a que vaye a buscar dinero]

*Tu mascota se ha restaurado y tiene 100% de stamina lo cual ahora puede trabajar!**
]

$footer[💵 +$$random[15;30] | tu mascota obtuvo 🗡 +$random[5;10]xp]
$globalCooldown[2m;tienes que esperar %time% para mandar a tu perro a dormir]
$onlyIf[$getGlobalUserVar[pet;$authorID]==1;]
$onlyIf[$getGlobalUserVar[dog;$authorID]==1;]
`
}