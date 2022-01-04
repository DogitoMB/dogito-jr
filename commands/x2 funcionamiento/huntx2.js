module.exports = {
  name: "hunt", 
  aliases: ['h'], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[100;150]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$color[RANDOM]
$thumbnail[https://i.pinimg.com/originals/92/68/a0/9268a0eec696ae06ac698445bea6452c.gif]
$title[Cazeria]
$description[
$username, fuiste de cazeria y mataste un $randomText[Elefante;Leon;leopardo;cocodrilo;jirafa;venado;oso;tigre]
]
$footer[💵 +$$random[100;150] | 🗡 +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]
$onlyIf[$getGlobalUserVar[x2;$authorID]==1;]
$onlyIf[$getGlobalUserVar[hunt;$authorID]==1;]

`
}