module.exports = {
name: "bal", 
code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;Discord bots dont have a balance]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[RANDOM]
$title[$username[$mentioned[1;yes]]'s Balance]
$description[

$addField[:pick: Nivel de mineria;
$$numberSeparator[$sum[$getGlobalUserVar[nmineria;$mentioned[1;yes]];$getGlobalUserVar[nmineria;$mentioned[1;yes]]]]

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
$$numberSeparator[$sum[$getGlobalUserVar[coins;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]]]
$onlyIf[$getGlobalUserVar[dogito;$authorID]==0;]
$onlyIf[$getGlobalUserVar[negro;$authorID]==0;]`
}