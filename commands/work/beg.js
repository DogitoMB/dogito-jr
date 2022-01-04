module.exports = {
name: "beg", 
  aliases: ['b',], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[0;25]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[0;5]];$authorID]
$title[Beg]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[Mendigar es para los débiles, así que aquí; aquí, toma esto y vete; aquí, no dejes que esto sea un hábito; te tomo por un ser humano bien formado, ¿por qué estás suplicando?; ¿Por qué no puedes simplemente conseguir ¿un trabajo?]
]
$footer[💵 +$$random[0;25] | 🗡 +$random[0;5]xp]
$globalCooldown[30s;Quit being a begger and try again in %time%]
$onlyIf[$getGlobalUserVar[x2;$authorID]==0;]
$onlyIf[$getGlobalUserVar[x3;$authorID]==0;]`
}