module.exports = ({
name: "pet-work", 
    aliases: ['pw','pd'], 
code: `$title[Tu mascota ha subido de nivel! chequea \`,pet\`]
$thumbnail[https://i.pinimg.com/originals/15/c1/44/15c144e8dc552a100b3292d268854499.gif]
$setGlobalUserVar[nivelpet;$sum[$getGlobalUserVar[nivelpet;$authorID];1];$authorID]

$setGlobalUserVar[petxp;0;$authorID]

$onlyIf[$getGlobalUserVar[dog;$authorID]==1;]
$onlyIf[$getGlobalUserVar[pet;$authorID]==1;]
$onlyIf[$getGlobalUserVar[petxp;$authorID]>=50;]
`
})