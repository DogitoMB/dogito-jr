module.exports = ({
name: "mine", 
    aliases: ['m'], 
code: `$title[tu pico ha subido de nivel! ahora es nivel \`5\` ]

$setGlobalUserVar[nmineria;$sum[$getGlobalUserVar[nmineria;$authorID];1];$authorID]

$setGlobalUserVar[pico5;1;$authorID]
$setGlobalUserVar[pico4;3;$authorID]
$setGlobalUserVar[mining;0;$authorID]

$onlyIf[$getGlobalUserVar[pico4;$authorID]==1;]
$onlyIf[$getGlobalUserVar[pico;$authorID]==1;]
$onlyIf[$getGlobalUserVar[mining;$authorID]>=150;]
`
})