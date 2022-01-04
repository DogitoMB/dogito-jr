module.exports = ({
name: "mine", 
    aliases: ['m'], 
code: `$title[tu pico ha subido de nivel! ahora es nivel \`2\`]

$setGlobalUserVar[nmineria;$sum[$getGlobalUserVar[nmineria;$authorID];2];$authorID]

$setGlobalUserVar[pico2;1;$authorID]
$setGlobalUserVar[mining;0;$authorID]
$setGlobalUserVar[pico1;3;$authorID]

$onlyIf[$getGlobalUserVar[pico1;$authorID]==1;]
$onlyIf[$getGlobalUserVar[pico;$authorID]==1;]
$onlyIf[$getGlobalUserVar[mining;$authorID]>=50;]
`
})