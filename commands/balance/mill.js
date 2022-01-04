module.exports = ({
name: "balance", 
aliases: ['bal'], 
code: `
$image[https://minecraftskinstealer.com/achievement/23/Logro+Desbloqueado/Millonario]
$giveRole[$authorID;926187352517382215]
$giveRole[$authorID;926190117436158003]
$setGlobalUserVar[m100;1;$authorID]
$onlyIf[$getGlobalUserVar[m100;$authorID]==0;]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=1000000;]`
})