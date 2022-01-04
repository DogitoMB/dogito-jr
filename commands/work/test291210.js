module.exports = {
name: "test5234231", 
code: `
$getGlobalUserVar[currentpickaxe;$mentioned[1;yes]]

$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];100000];$authorID]
`
}