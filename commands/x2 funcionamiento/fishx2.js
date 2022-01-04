module.exports = ({
  name: "fish",
    aliases: ['f',], 
  code: `$customEmoji[star2] You went fishing with your  $randomText[common fish;uncommon fish;rare fish]! You sell that fish for $random[100;300] coins.
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[100;300]];$authorID]
$setGlobalUserVar[x2mine;$sum[$getGlobalUserVar[x2mine;$authorID];1];$authorID]
$image[https://i.pinimg.com/originals/9a/21/70/9a2170b85c60b8dba2f0b6db64c452d6.gif]
$globalCooldown[1m;The lake is a little empty :fish: and you recently went fishing! Wait %time% until you fish again.]
$onlyIf[$getGlobalUserVar[x2;$authorID]==1;]`
})