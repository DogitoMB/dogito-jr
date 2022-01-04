module.exports = ({
name: "pet", 
code: `
$title[$getGlobalUserVar[petname;$mentioned[1;yes]] estadisticas] 
$thumbnail[https://i.pinimg.com/originals/15/c1/44/15c144e8dc552a100b3292d268854499.gif]
$color[RANDOM]

$description[

:hearts: $getGlobalUserVar[peth;$mentioned[1;yes]]

$customEmoji[star2] XP $getGlobalUserVar[petxp;$mentioned[1;yes]]

$customEmoji[star2] Stamina $getGlobalUserVar[staminap;$mentioned[1;yes]]

$customEmoji[star2] $customEmoji[nivel] $getGlobalUserVar[nivelpet;$mentioned[1;yes]]

]

$onlyIf[$getGlobalUserVar[pet;$authorID]==1;]
$onlyIf[$getGlobalUserVar[dog;$authorID]==1;no tienes una mascota para hacer este commando]


`
})