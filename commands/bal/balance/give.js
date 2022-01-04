module.exports = ({
name: "give", 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
$setGlobalUserVar[coins;$sub[$getGlobalUserVar[coins;$authorID];$noMentionMessage];$authorID]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username le ha dado a  $username[$mentioned[1]] monedas]
$description[
$username gave $username[$mentioned[1]] **$noMentionMessage** :coin: !
$username[$mentioned[1]] is now holding **$sum[$getGlobalUserVar[coins;$mentioned[1]];$noMentionMessage]** : :coin: 
]
$onlyIf[$noMentionMessage<=$getGlobalUserVar[coins;$authorID];**⛔ no tienes suficiente monedas**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't give coins to yourself**]
$onlyIf[$mentioned[1]!=;**⛔tienes que mencionar a alguien y darle monedas por ejemplo **: \`$getServerVar[prefix]give <@user> <amount>\`]
$onlyIf[$isBot[$mentioned[1]]!=true;**⛔ no le puedes dar monedas a bots estupid@ >_<**]
$onlyIf[$isNumber[$noMentionMessage]==true;**⛔ eso no es un numero**: \`$getServerVar[prefix]give <@user> <amount>\`]
$suppressErrors[Usage: **$getServerVar[prefix]give <@user> <amount>**]
$onlyIf[$getGlobalUserVar[nogive;$findUser[$message[1]]]==0;Este usuario no accepta monedas de nadie]
$onlyIf[$message[>]>=0;{description:que estas tratando de hacer?}{color:RED}]
`
})