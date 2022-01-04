module.exports = {
  name: 'withdraw',
  aliases: 'with',
  code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$message];$authorID]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;$authorID];$message];$authorID]
$title[Withdrew]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, has sacado $$numberSeparator[$message] de tu banco!]
$footer[💵 $$numberSeparator[$sum[$getGlobalUserVar[coins;$authorID];$message]] | 🏦 $$numberSeparator[$sub[$getGlobalUserVar[Bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[coins;$authorID];$getGlobalUserVar[Bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[Bank;$authorID];no puedes sacar del banco mas de lo que no tienes]
$argsCheck[>1;How much are you withdrawing?]
$onlyIf[$getGlobalUserVar[Bank;$authorID]>0;no tienes nada para sacar del banco >_<]`
}