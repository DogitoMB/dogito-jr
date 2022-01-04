module.exports = {
name: "beg", 
  aliases: ['b',], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[200;500]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[0;5]];$authorID]
$setGlobalUserVar[x3mine;$sum[$getGlobalUserVar[x3mine;$authorID];1];$authorID]
$title[$customEmoji[star4] Beg]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$customEmoji[star4] $username, $randomText[Mendigar es para los débiles, así que aquí; aquí, toma esto y vete; aquí, no dejes que esto sea un hábito; te tomo por un ser humano bien formado, ¿por qué estás suplicando?; ¿Por qué no puedes simplemente conseguir ¿un trabajo?]
]
$footer[💵 +$$random[200;500] | 🗡 +$random[0;5]xp]
$globalCooldown[30s;Quit being a begger and try again in %time%]
$image[https://images.squarespace-cdn.com/content/v1/574ba3064c2f85ab1d8f303a/1482530934576-BZ9SSUCCANO1K8KL4A48/MoneyCoinsGold.gif?format=1000w]
$onlyIf[$getGlobalUserVar[x3;$authorID]==1;]
`
}