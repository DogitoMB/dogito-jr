module.exports = ({
name: "petname", 
code: `
$title[Nombre cambiado a tu mascota]
$image[https://i.pinimg.com/originals/15/c1/44/15c144e8dc552a100b3292d268854499.gif]
$color[RANDOM]
$setGlobalUserVar[petname;$message;$authorID]

$description[

Ahora tu perro se llama $message 
]

$onlyIf[$getGlobalUserVar[pet;$authorID]==1;no tienes una mascota para hacer este commando]
`
})