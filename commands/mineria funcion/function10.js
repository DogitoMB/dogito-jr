module.exports = ({
name: "mine", 
    aliases: ['m'], 
code: `$title[tu pico ha subido de nivel! ahora es nivel \`10\` y se ha mejorado a $customEmoji[diamondpickaxe]]


$giveRole[$authorID;927294938436206633]
$image[https://minecraftskinstealer.com/achievement/2/Logro+Desbloqueado/Minero+loco
]
$setGlobalUserVar[nmineria;$sum[$getGlobalUserVar[nmineria;$authorID];1];$authorID]

$setGlobalUserVar[pico10;1;$authorID]
$setGlobalUserVar[pico9;3;$authorID]

$setGlobalUserVar[currentpickaxe;$customEmoji[diamondpickaxe];$authorID]
$setGlobalUserVar[pico10s;3;$authorID]
$setGlobalUserVar[mining;0;$authorID]
$onlyIf[$getGlobalUserVar[pico10s;$authorID]==0;]
$onlyIf[$getGlobalUserVar[pico10;$authorID]==1;]
$onlyIf[$getGlobalUserVar[pico;$authorID]==1;]
$onlyIf[$getGlobalUserVar[mining;$authorID]>=500;]
`
})