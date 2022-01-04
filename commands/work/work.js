module.exports = {
  name: "work", 
  aliases: ['t','w'], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[45;100]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[trabajo]
$description[
$username, $randomText[parece que harías cualquier cosa por dinero 😳 .; ¡hoy te contrataron como obrero de la construcción !; eres un adicto al trabajo de la discordia !; buen amigo de la música! ¡Aquí, te lo has ganado !; Trabajaste como estilista hoy; ¡La piratería puede generar una gran cantidad de dinero si sabe lo que está haciendo! Desde su último trabajo de pirateo, hizo; ¡tu minero de bitcoins consiguió algo de efectivo para ti !; ¿No estaba satisfecho con sus empleadores anteriores? Bueno, conté los consejos de tu concierto de pole dance y no lo hiciste tan mal 😳]
]
$footer[💵 +$$random[45;100] | 🗡 +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]
$onlyIf[$getGlobalUserVar[x2;$authorID]==0;]
$onlyIf[$getGlobalUserVar[x3;$authorID]==0;]
`
}