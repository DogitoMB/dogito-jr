module.exports = {
name: "", 
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;Discord bots dont have a balance]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[#cd00ff]
$title[$customEmoji[star2] $customEmoji[creador] $username[$mentioned[1;yes]]'s Balance $customEmoji[creador] $customEmoji[star2]]
$description[
$addField[🗡 Experience;
$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]xp
]
$addField[💵 Monedas;
$$numberSeparator[$getGlobalUserVar[coins;$mentioned[1;yes]]]
]
$addField[🏦 Banco;
$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]
]
$addField[📊 Net Worth;
$$numberSeparator[$sum[$getGlobalUserVar[coins;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]
]]
$image[https://i.pinimg.com/originals/81/4a/1b/814a1b0cba8d889d2a587854a909fc2f.gif]
$onlyIf[$getGlobalUserVar[dogito;$authorID]==1;]
`
}