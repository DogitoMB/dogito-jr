module.exports = {
name: "beg", 
  aliases: ['b',], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[50;105]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[0;5]];$authorID]
$setGlobalUserVar[x2mine;$sum[$getGlobalUserVar[x2mine;$authorID];1];$authorID]
$title[$customEmoji[star2] Beg]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$customEmoji[star2] $username, $randomText[Mendigar es para los débiles, así que aquí; aquí, toma esto y vete; aquí, no dejes que esto sea un hábito; te tomo por un ser humano bien formado, ¿por qué estás suplicando?; ¿Por qué no puedes simplemente conseguir ¿un trabajo?]
]
$footer[💵 +$$random[50;105] | 🗡 +$random[0;5]xp]
$globalCooldown[30s;Quit being a begger and try again in %time%]
$image[https://i.pinimg.com/originals/32/f8/ee/32f8ee1f68495231452451a2edfe9b7b.gif]
$onlyIf[$getGlobalUserVar[x2;$authorID]==1;]
`
}