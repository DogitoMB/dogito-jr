module.exports = {
  name: "work", 
  aliases: ['t','w'], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[900;2000]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[$customEmoji[star4] trabajo]
$setGlobalUserVar[x3mine;$sum[$getGlobalUserVar[x3mine;$authorID];1];$authorID]
$description[
$customEmoji[star4] $username, $randomText[parece que harías cualquier cosa por dinero 😳 .; ¡hoy te contrataron como obrero de la construcción !; eres un adicto al trabajo de la discordia !; buen amigo de la música! ¡Aquí, te lo has ganado !; Trabajaste como estilista hoy; ¡La piratería puede generar una gran cantidad de dinero si sabe lo que está haciendo! Desde su último trabajo de pirateo, hizo; ¡tu minero de bitcoins consiguió algo de efectivo para ti !; ¿No estaba satisfecho con sus empleadores anteriores? Bueno, conté los consejos de tu concierto de pole dance y no lo hiciste tan mal 😳]
]
$image[https://images.squarespace-cdn.com/content/v1/574ba3064c2f85ab1d8f303a/1482530934576-BZ9SSUCCANO1K8KL4A48/MoneyCoinsGold.gif?format=1000w]
$footer[💵 +$$random[900;2000] | 🗡 +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]
$onlyIf[$getGlobalUserVar[x3;$authorID]==1;]`
}