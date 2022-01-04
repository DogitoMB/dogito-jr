module.exports = ({
name: "mine", 
    aliases: ['m'], 
code: `$title[tu pico ha subido de nivel! ahora es nivel \`7\`]

$setGlobalUserVar[nmineria;$sum[$getGlobalUserVar[nmineria;$authorID];1];$authorID]

$setGlobalUserVar[pico7;1;$authorID]
$setGlobalUserVar[pico6;3;$authorID]
$setGlobalUserVar[mining;0;$authorID]

$onlyIf[$getGlobalUserVar[pico7;$authorID]==1;]
$onlyIf[$getGlobalUserVar[pico;$authorID]==1;]
$onlyIf[$getGlobalUserVar[mining;$authorID]>=250;]
`
})