module.exports = {
  name: "work", 
  aliases: ['t','w'], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[300;1000]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[$customEmoji[star2] trabajo]
$setGlobalUserVar[x2mine;$sum[$getGlobalUserVar[x2mine;$authorID];1];$authorID]
$description[
$customEmoji[star2] $username, $randomText[parece que harías cualquier cosa por dinero 😳 .; ¡hoy te contrataron como obrero de la construcción !; eres un adicto al trabajo de la discordia !; buen amigo de la música! ¡Aquí, te lo has ganado !; Trabajaste como estilista hoy; ¡La piratería puede generar una gran cantidad de dinero si sabe lo que está haciendo! Desde su último trabajo de pirateo, hizo; ¡tu minero de bitcoins consiguió algo de efectivo para ti !; ¿No estaba satisfecho con sus empleadores anteriores? Bueno, conté los consejos de tu concierto de pole dance y no lo hiciste tan mal 😳]
]
$image[https://i.pinimg.com/originals/32/f8/ee/32f8ee1f68495231452451a2edfe9b7b.gif]
$footer[💵 +$$random[300;1000] | 🗡 +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]
$onlyIf[$getGlobalUserVar[x2;$authorID]==1;]`
}