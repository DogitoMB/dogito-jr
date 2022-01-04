const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token:"OTA2NTc3MDM5MjMzMDExODE0.YYapqQ.q_QuYlim5aN3sTy4Vc0TSy7W5hc", //Discord Bot Token
prefix: "," //Discord Bot Prefix
})

const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'LINK',
    title: 'NAME',
    interval: 2 // minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));

bot.variables({
coins: "0",
XP: "0",
Bank: "0",
prefix: "=",
    snipe_author: '',
    snipe_msg: '', 
    antirob: "0",
    nogive: "0",
    x2: "0",
    dog: "0",
    nivelpet: "0",
    peth: "100",
    petxp: "0",
    petwork: "0",
petn : "0",
npet: "0",
pico: "0",
pico1: "1",
pico2: "0",
pico3: "0",
pico4: "0",
pico5: "0",
pico6: "0",
pico7: "0",
pico8: "0",
pico9: "0",
pico10: "0",
pico10s: "0",
mining: "0",
currentpickaxe: "$customEmoji[woodenpickaxe]",
staminap: "100",
    pet: "0",
    petname: "SIN NOMBRE",
    snipe_t: '',
    piedra: "0",
    rojo: "0",
    azul: "0",
    antirob: "0",
    mantirob: "0",
    verde: "0",
    snipe_date: '',
    nrosado: "0",
    testantirob: "0",
    m100: "0",
    dogito: "0",
    nazul: "0",
    x3: "0",
    ndorado: "0",
    nmineria: "0",
    nverde: "0",
    snipe_channel: '',
    hunt: "0",
    color: '#FFF400',
     cooldownRob: 2,
     negro: "0",
 cooldownWork: 30,
 cooldownCrime: 5,
 x2mine: "0",
 x3mine: "0",
 oro: "0",
 lapiz: "0",
 redstone: "0",
 killz: "0",
  })
  
//Events
bot.onMessage()
bot.onMessageDelete();
bot.loadCommands(`./commands/`)

//Command Example
bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})

bot.awaitedCommand({
 name: "AwaitedRobFail",
 code: `$deletecommand
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$mentioned[1]];$random[1;$getGlobalUserVar[coins;$mentioned[1]]]];$mentioned[1]]
$setGlobalUserVar[coins;$sub[$getGlobalUserVar[coins]]$random[1;$getGlobalUserVar[coins;$mentioned[1]]]]]
$title[Busted!]
$color[ff0000]
$description[$username was caught attempting to rob $username[mentioned[1]] and had to pay $random[1;$getGlobalUserVar[coins;mentioned[1]]] as a fine]
$author[$username;$authorAvatar]
`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})


bot.command({
    name: "slot",
    code: `
    $setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins];$replaceText[$replaceText[$checkCondition[won==$randomText[won;lost]];true;$message[1]];false;-$message[1]]]]
    
    $thumbnail[$authorAvatar]
    $color[$replaceText[$replaceText[$checkCondition[$randomText[won;lost]==won];true;07ff00;1];false;E64338;1]]
    $title[$username's Slot Game] 
    $description[>>> **$randomText[🍋;🍊;🍏;🍒;🍇] | $randomText[🍊;🍒;🍇;🍏;🍋] | $randomText[🍒;🍋;🍊;🍇;🍏]
    $replaceText[$replaceText[$checkCondition[$randomText[won;lost]==won];true;$randomText[🍊 | 🍊 | 🍊 ;🍇 | 🍇 | 🍇;🍒 | 🍒 | 🍒;🍏 | 🍏 | 🍏;🍋 | 🍋 | 🍋];1];false;$randomText[🍒 | 🍊 | 🍊;🍇 | 🍏 | 🍒;🍇 | 🍒 | 🍊;🍏 | 🍊 | 🍒;🍏 | 🍇 | 🍊;🍋 | 🍊 | 🍒;🍒 | 🍋 | 🍊;🍏| 🍋 | 🍇;🍇 | 🍋 | 🍒;🍏 | 🍊 | 🍋];1] ⬅
    $randomText[🍇;🍊;🍋;🍏;🍒] | $randomText[🍒;🍏;🍇;🍋;🍊] | $randomText[🍒;🍇;🍋;🍏;🍊]**]
    $footer[You $randomText[won;lost] $message[1] 💰]
    
    $argsCheck[1;Please type amount.]
    
    $onlyIf[$isNumber[$message[>]]==true;Wrong syntax! that's not an amount.]
    
    $onlyIf[$message[>]>=50;lo minimo que se puede apostar es 50]
    
    $onlyIf[$message[>]<=600000;lo maximo que se puede es 600,000.]
    
    $onlyIf[$getGlobalUserVar[coins]>=$message[>];no tienes suficiente monedas]
    $globalCooldown[5s;Try again in %time%]
    `})
    


bot.command({
 name: "luckyspin",
 code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[2000;10000]];$authorID]
$image[https://66.media.tumblr.com/c69e6053fd34d5a82b93c211f52fa8a7/tumblr_mirq3hFyE31rfjowdo1_500.gif]
$title[Esta girando la ruleta!!] $editIn[3s; {description:Has ganado $random[2000;10000]!!}
$globalCooldown[1h;Try again in %time%]`
});




bot.command({
  name: "buy",
  code: `
$if[$message==]
Type !buy <item> to buy an item!
$elseIf[$message==x2]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-2000];$authorID]
$setGlobalUserVar[x2;1;$authorID]
$title[Compraste un potenciador x2 ahora ganas mas monedas por 10 minutos]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=2000;necesitas $customEmoji[arrow12]\`\`2,000\`\` monedas]
$onlyIf[$getGlobalUserVar[x2;$authorID]==0;$customEmoji[arrow12] ya lo has comprado estupid@]
$onlyIf[$getGlobalUserVar[x3;$authorID]==0;$customEmoji[arrow12] ya tienes otro potenciador activado utilizalo hasta que se te acabe para poder comprar este otro potenciador]
$globalCooldown[120s;para comprar otro potenciador necesitas esperar %time%]
$endelseIf

$elseIf[$message==rojo]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-200];$authorID]
$setGlobalUserVar[rojo;1;$authorID]
$title[Compraste el color rojo **Comun**]
$giveRole[$authorID;925805373632446514]

$giveRole[$authorID;925820046364770305]

$color[RED]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=200;necesitas $customEmoji[arrow12]\`\`200\`\` monedas]
$onlyIf[$getGlobalUserVar[rojo;$authorID]==0;$customEmoji[arrow12]ya haz comprado este color]
$endelseIf

$elseIf[$message==azul]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-200];$authorID]
$setGlobalUserVar[azul;1;$authorID]
$title[Compraste el color azul **Comun**]
$giveRole[$authorID;925814006952886272]

$giveRole[$authorID;925820046364770305]

$color[BLUE]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=200;necesitas $customEmoji[arrow12]\`\`200\`\` monedas]
$onlyIf[$getGlobalUserVar[azul;$authorID]==0;$customEmoji[arrow12]ya haz comprado este color]
$endelseIf
$elseIf[$message==verde]

$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-200];$authorID]
$setGlobalUserVar[verde;1;$authorID]
$title[Compraste el color verde **Poco Comun**]
$giveRole[$authorID;925814135323758632]

$giveRole[$authorID;925820046364770305]
$color[BLUE]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=500;necesitas $customEmoji[arrow12]\`\`500\`\` monedas]
$onlyIf[$getGlobalUserVar[verde;$authorID]==0;$customEmoji[arrow12]ya haz comprado este color]
$endelseIf
$elseIf[$message==neon-rosado]

$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-10000];$authorID]
$setGlobalUserVar[nrosado;1;$authorID]
$title[Compraste el color **NEON ROSADO** $customEmoji[star2] **RARO**]
$giveRole[$authorID;925821186703781898]

$giveRole[$authorID;925820915432972319]
$color[#ff00ce]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=10000;necesitas $customEmoji[arrow12]\`\`10,000\`\` monedas]
$onlyIf[$getGlobalUserVar[nrosado;$authorID]==0;$customEmoji[arrow12]ya haz comprado este color]
$endelseIf

$elseIf[$message==neon-azul]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-10000];$authorID]
$setGlobalUserVar[nazul;1;$authorID]
$title[Compraste el color **NEON AZUL** $customEmoji[star2] **RARO**]
$giveRole[$authorID;925820634162946080]

$giveRole[$authorID;925820915432972319]
$color[#00ffb4]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=10000;necesitas $customEmoji[arrow12]\`\`10,000\`\` monedas]
$onlyIf[$getGlobalUserVar[nazul;$authorID]==0;$customEmoji[arrow12]ya haz comprado este color]
$endelseIf

$elseIf[$message==neon-dorado]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-10000];$authorID]
$setGlobalUserVar[ndorado;1;$authorID]
$title[Compraste el color **NEON DORADO**  $customEmoji[star2] **RARO**]
$giveRole[$authorID;925821369743212574]

$giveRole[$authorID;925820915432972319]
$color[#ffd900]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=10000;necesitas $customEmoji[arrow12]\`\`10,000\`\` monedas]
$onlyIf[$getGlobalUserVar[ndorado;$authorID]==0;$customEmoji[arrow12]ya haz comprado este color]
$endelseIf

$elseIf[$message==neon-verde]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-50000];$authorID]
$setGlobalUserVar[nverde;1;$authorID]
$title[Compraste el color **NEON VERDE**  $customEmoji[star3] **LEGENDARIO**]
$giveRole[$authorID;925826512966533131]

$giveRole[$authorID;925826583988670516]
$color[#1eff00]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=50000;necesitas $customEmoji[arrow12]\`\`50,000\`\` monedas]
$onlyIf[$getGlobalUserVar[nverde;$authorID]==0;$customEmoji[arrow12]ya haz comprado este color]
$endelseIf


$elseIf[$message==negro]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-100000];$authorID]
$setGlobalUserVar[negro;1;$authorID]
$title[Compraste el color **𝕹𝖊𝖌𝖗𝖔**  $customEmoji[star3] **𝕸𝖎𝖙𝖎𝖈𝖔𝖘**]
$giveRole[$authorID;925855686712229898]

$giveRole[$authorID;925855554532937778]
$color[#070707]
$image[https://minecraftskinstealer.com/achievement/31/Logro+Desbloqueado%21%21%21/Oscuridad]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=100000;necesitas $customEmoji[arrow12]\`\`100,000\`\` monedas]
$onlyIf[$getGlobalUserVar[negro;$authorID]==0;$customEmoji[arrow12]ya haz comprado este color]
$endelseIf

$elseIf[$message==x3]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-20000];$authorID]
$setGlobalUserVar[x3;1;$authorID]
$title[Compraste un potenciador x3 ahora ganas mas monedas por 10 minutos]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=20000;necesitas $customEmoji[arrow12]\`\`20,000\`\` monedas]
$onlyIf[$getGlobalUserVar[x3;$authorID]==0;$customEmoji[arrow12] ya lo has comprado estupid@]
$onlyIf[$getGlobalUserVar[x2;$authorID]==0;$customEmoji[arrow12] ya tienes otro potenciador activado utilizalo hasta que se te acabe para poder comprar este otro potenciador]

$globalCooldown[120s;para comprar otro potenciador necesitas esperar %time%]
$endelseIf

$elseIf[$message==piedra]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-200];$authorID]

$giveRole[$authorID;926120546951913552]

$giveRole[$authorID;926120283759317083]

$setGlobalUserVar[piedra;1;$authorID]
$title[Has comprado el role *piedra* *comun*]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=200;necesitas $customEmoji[arrow12]\`\`200\`\` monedas]
$onlyIf[$getGlobalUserVar[piedra;$authorID]==0;$customEmoji[arrow12] ya lo has comprado estupid@]
$endelseIf

$elseIf[$message==oro]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-200];$authorID]

$giveRole[$authorID;926121806484619316]

$giveRole[$authorID;926120283759317083]

$setGlobalUserVar[oro;1;$authorID]
$title[Has comprado el role *Oro* *comun*]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=200;necesitas $customEmoji[arrow12]\`\`200\`\` monedas]
$onlyIf[$getGlobalUserVar[oro;$authorID]==0;$customEmoji[arrow12] ya lo has comprado estupid@]
$endelseIf

$elseIf[$message==lapiz]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-300];$authorID]

$giveRole[$authorID;926120404895027251]

$giveRole[$authorID;926122436817203241]

$setGlobalUserVar[lapiz;1;$authorID]
$title[Has comprado el role *Lapiz Lazuli* *Poco Comun*]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=300;necesitas $customEmoji[arrow12]\`\`300\`\` monedas]
$onlyIf[$getGlobalUserVar[lapiz;$authorID]==0;$customEmoji[arrow12] ya lo has comprado estupid@]
$endelseIf

$elseIf[$message==redstone]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-500];$authorID]

$giveRole[$authorID;926122562415644742]

$giveRole[$authorID;926122436817203241]

$setGlobalUserVar[redstone;1;$authorID]
$title[Has comprado el role *Redstone* *Poco Comun*]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=500;necesitas $customEmoji[arrow12]\`\`500\`\` monedas]
$onlyIf[$getGlobalUserVar[redstone;$authorID]==0;$customEmoji[arrow12] ya lo has comprado estupid@]
$endelseIf


$elseIf[$message==killz]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-10000];$authorID]

$giveRole[$authorID;926129368491778148]

$giveRole[$authorID;926129306877427742]

$setGlobalUserVar[killz;1;$authorID]
$setGlobalUserVar[hunt;1;$authorID]
$title[Has comprado el role *Killz* *RARO*]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=10000;necesitas $customEmoji[arrow12]\`\`10,000\`\` monedas]
$onlyIf[$getGlobalUserVar[killz;$authorID]==0;$customEmoji[arrow12] ya lo has comprado estupid@]
$endelseIf

$elseIf[$message==antirob]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-50000];$authorID]

$setGlobalUserVar[antirob;1;$authorID]
$title[Has comprado la habilidad *Anti Rob* solo te durara 1 hora]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=50000;necesitas $customEmoji[arrow12]\`\`50,000\`\` monedas]
$color[RED]
$onlyIf[$getGlobalUserVar[antirob;$authorID]==0;$customEmoji[arrow12] ya lo has comprado estupid@]
$endelseIf

$elseIf[$message==perro]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-20000];$authorID]

$setGlobalUserVar[dog;1;$authorID]
$setGlobalUserVar[pet;1;$authorID]
$title[Has comprado un perro ponle un nombre \`,petname\` y el nombre para tu mascota. Podras usar muchas cosas como por ejemplo \`,pet-w\`]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=20000;necesitas $customEmoji[arrow12]\`\`20,000\`\` monedas]
$color[RED]
$onlyIf[$getGlobalUserVar[dog;$authorID]==0;$customEmoji[arrow12] yo haz comprado uno]
$endelseIf
$elseIf[$message==pico]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-5000];$authorID]
$setGlobalUserVar[pico;1;$authorID]
$title[Has comprado un $customEmoji[woodenpickaxe] usa el comando \`,mine\` o \`,m\` tu pico podra subir de nivel, minetras mas nivel el pico cambiara y se volvera mejor y podras obtener mas monedas!]
$onlyIf[$getGlobalUserVar[coins;$authorID]>=5000;necesitas $customEmoji[arrow12]\`\`5,000\`\` monedas]
$giveRole[$authorID;927280295802196028]
$image[https://minecraftskinstealer.com/achievement/20/Logro+desbloqueado/Minero%21]
$color[RED]
$onlyIf[$getGlobalUserVar[pico;$authorID]==0;$customEmoji[arrow12] yo haz comprado uno]
$endelseIf

$endif
`
})

bot.command({
name: "search",
  aliases: ['s',], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[20;60]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[1;5]];$authorID]
$title[Search]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[miraste debajo de la alfombra de bienvenida.; buscaste en el bolso de tu mamá mientras ella dormía.; tienes hambre, así que decidiste buscar en el contenedor de basura detrás del metro.; registraste la camioneta de tu papá muy a fondo.; vinieron tus amigos y cuando uno de ellos fue al baño, buscaste en los bolsillos de su abrigo.]
]
$footer[💵 +$$random[20;60] | 🗡 +$random[1;5]xp]
$globalCooldown[35s;em todavia no hay nada que buscar usa este comando en  %time%]
$onlyIf[$getGlobalUserVar[x2;$authorID]==0;]
$onlyIf[$getGlobalUserVar[x3;$authorID]==0;]
`
})
 

 bot.command({
name: "search",
  aliases: ['s',], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[50;100]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[1;5]];$authorID]
$setGlobalUserVar[x2mine;$sum[$getGlobalUserVar[x2mine;$authorID];1];$authorID]
$title[$customEmoji[star2] Search]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$customEmoji[star2] $username, $randomText[miraste debajo de la alfombra de bienvenida.; buscaste en el bolso de tu mamá mientras ella dormía.; tienes hambre, así que decidiste buscar en el contenedor de basura detrás del metro.; registraste la camioneta de tu papá muy a fondo.; vinieron tus amigos y cuando uno de ellos fue al baño, buscaste en los bolsillos de su abrigo.]
]

$image[https://i.pinimg.com/originals/32/f8/ee/32f8ee1f68495231452451a2edfe9b7b.gif]
$setGlobalUserVar[x2mine;$sum[$getGlobalUserVar[x2mine;$authorID];1];$authorID]
$footer[💵 +$$random[50;100] | 🗡 +$random[1;5]xp]
$globalCooldown[35s;em todavia no hay nada que buscar usa este comando en  %time%]
$onlyIf[$getGlobalUserVar[x2;$authorID]==1;]
`
})

bot.command({
name: "search",
  aliases: ['s',], 
code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[200;400]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[1;5]];$authorID]
$setGlobalUserVar[x3mine;$sum[$getGlobalUserVar[x3mine;$authorID];1];$authorID]
$title[$customEmoji[star4] Search]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$customEmoji[star4] $username, $randomText[miraste debajo de la alfombra de bienvenida.; buscaste en el bolso de tu mamá mientras ella dormía.; tienes hambre, así que decidiste buscar en el contenedor de basura detrás del metro.; registraste la camioneta de tu papá muy a fondo.; vinieron tus amigos y cuando uno de ellos fue al baño, buscaste en los bolsillos de su abrigo.]
]

$image[https://images.squarespace-cdn.com/content/v1/574ba3064c2f85ab1d8f303a/1482530934576-BZ9SSUCCANO1K8KL4A48/MoneyCoinsGold.gif?format=1000w]
$setGlobalUserVar[x2mine;$sum[$getGlobalUserVar[x2mine;$authorID];1];$authorID]
$footer[💵 +$$random[200;400] | 🗡 +$random[1;5]xp]
$globalCooldown[35s;em todavia no hay nada que buscar usa este comando en  %time%]
$onlyIf[$getGlobalUserVar[x3;$authorID]==1;]
`
})

bot.command({
 name: "daily",
 code: `$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[2000;30000]];$authorID]
$thumbnail[https://art.pixilart.com/8d42eeff0affb06.gif]
$title[Esta abriendo el cofre diario!!] $editIn[3s; {description:has recibido $random[2000;30000]!!}
$globalCooldown[24h;usa este comando en %time%]`
});