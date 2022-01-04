module.exports = ({
 name: "deposit",
 aliases: 'dep',
 code:`
 $author[$userTag[$authorID];$authorAvatar]
 $description[Successfully deposited $replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;all balance in your bank];false;$message[1]🌸 in your bank]]
 $footer[You now have $getGlobalUserVar[Bank;$authorID] in your bank]
 $color[FFC0CB]
 
 
 $setGlobalUserVar[coins;$sub[$getGlobalUserVar[coins;$authorID];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[coins;$authorID]];false;$message[1]]]]
 
 
 $setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank;$authorID];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[coins;$authorID]];false;$message[1]]]]

 $onlyIf[$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[coins;$authorID]];false;$message[1]]<=$getGlobalUserVar[coins;$authorID];❌que haces? no tienes suficiente dinero para depositarlo al banco >_<]
 
 $onlyIf[$checkContains[true;$checkCondition[$isNumber[$message[1]]==true];$checkCondition[$toLowercase[$message[1]]==all]]==true;❌Escribe un numero valido para la proxima ._.] `,
})