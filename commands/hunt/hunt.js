module.exports = {
  name: "hunt", 
  aliases: ['h'], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[45;100]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$color[RANDOM]
$thumbnail[https://i.pinimg.com/originals/92/68/a0/9268a0eec696ae06ac698445bea6452c.gif]
$title[Cazeria]
$description[
$username, fuiste de cazeria y mataste un $randomText[Elefante;Leon;leopardo;cocodrilo;jirafa;venado;oso;tigre]
]
$footer[💵 +$$random[45;100] | 🗡 +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]
$onlyIf[$getGlobalUserVar[x2;$authorID]==0;]
$onlyIf[$getGlobalUserVar[x3;$authorID]==0;]
$onlyIf[$getGlobalUserVar[hunt;$authorID]==1;em que intentas hacer? no puedes! necesitas el role $customEmoji[arrow12] **Killz** para poder cazar ve a la tienda de roles \`,tienda-roles\` o simplemente \`,tr\`]

`
}