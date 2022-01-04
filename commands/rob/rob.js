module.exports = ({
 name: "rob",
 code: `$setGlobalUserVar[coins;$replaceText[$replaceText[$checkCondition[$randomText[sum;sub]==sum];true;$sub[$getGlobalUserVar[coins;$findUser[$message[1]]];$random[200;5000]]];false;$getGlobalUserVar[coins;$findUser[$message[1]]]];$findUser[$message[1]]]


 $setGlobalUserVar[coins;$replaceText[$replaceText[$checkCondition[$randomText[sum;sub]==sum];true;$sum[$getGlobalUserVar[coins;$authorID];$random[200;5000]]];false;$sub[$getGlobalUserVar[coins;$authorID];$random[200;5000]]];$authorID]


$title[$replaceText[$replaceText[$randomText[sum;sub];sum;Success];sub;Failed]]
$author[$userTag[$authorID];$authorAvatar]
$description[Tu $replaceText[$replaceText[$randomText[sum;sub];sum;successfully robbed];sub;fallaste en robarle] $replaceText[$replaceText[$randomText[sum;sub];sum;Ganaste y le pudiste atracar $random[200;5000] de $userTag[$findUser[$message[1]]]];sub;se te ha quitado monedas $random[200;5000]🌸]]

$footer[By $username[$authorID]]
$color[$replaceText[$replaceText[$randomText[sum;sub];sum;1bbe00;1];sub;eb0000;1]]



$cooldown[30s;❌tienes que esperar %time% para robar otra vez]

$onlyIf[$getGlobalUserVar[coins;$authorID]>=500;❌necesitas 500 monedas, si las tienes en tu banco sacalas con \`,with 500\`]
$onlyIf[$getGlobalUserVar[coins;$findUser[$message[1]]]>=500;❌el usuario que le intetas robar necesita almenos 500 monedas fuera de su banco]
$onlyIf[$getGlobalUserVar[antirob;$findUser[$message[1]]]==0;❌no le puedes robar a este usuario porque tiene el **Anti Rob** activado]
$onlyIf[$findUser[$message[1]]!=$authorID;❌No te puedes robar ati mismo que haces? eres idiota?]
`
})