module.exports = ({
name: "mine", 
    aliases: ['m'], 
code: `$title[tu pico ha subido de nivel! ahora es nivel \`6\` y se a mejorado a $customEmoji[ironpickaxe]]

$setGlobalUserVar[nmineria;$sum[$getGlobalUserVar[nmineria;$authorID];1];$authorID]

$setGlobalUserVar[pico6;1;$authorID]
$setGlobalUserVar[pico5;3;$authorID]
$setGlobalUserVar[currentpickaxe;$customEmoji[ironpickaxe];$authorID]
$setGlobalUserVar[mining;0;$authorID]

$onlyIf[$getGlobalUserVar[pico6;$authorID]==1;]
$onlyIf[$getGlobalUserVar[pico;$authorID]==1;]
$onlyIf[$getGlobalUserVar[mining;$authorID]>=200;]
`
})