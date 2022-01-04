module.exports = ({
name: "give-on", 
aliases: ['g-on'], 
code: `
$title[Ahora podras recibir regalos]
$setGlobalUserVar[nogive;0;$authorID]
$onlyIf[$getGlobalUserVar[nogive;$authorID]==1;ya lo tienes prendido]

`
})