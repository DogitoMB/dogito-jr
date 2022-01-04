module.exports = ({
name: "mine", 
    aliases: ['m'], 
code: `$title[tu pico ha subido de nivel! ahora es nivel \`9\`]

$setGlobalUserVar[nmineria;$sum[$getGlobalUserVar[nmineria;$authorID];1];$authorID]

$setGlobalUserVar[pico9;1;$authorID]
$setGlobalUserVar[pico8;3;$authorID]
$setGlobalUserVar[mining;0;$authorID]

$onlyIf[$getGlobalUserVar[pico9;$authorID]==1;]
$onlyIf[$getGlobalUserVar[pico;$authorID]==1;]
$onlyIf[$getGlobalUserVar[mining;$authorID]>=330;]
`
})