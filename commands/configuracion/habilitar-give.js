module.exports = ({
name: "give-off", 
aliases: ['g-off'], 
code: `
$title[ahora no podras recibir regalos]
$setGlobalUserVar[nogive;1;$authorID]
$onlyIf[$getGlobalUserVar[nogive;$authorID]==0;ya lo tienes apagado]

`
})