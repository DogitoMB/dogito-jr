module.exports = {
 name: "pet-fight",
 code: `$if[$randomText[success;fail;sucess4;fail4]==success]
 $title[**__$getGlobalUserVar[petname;$mentioned[1;yes]] Gano!__** 
 $description[
   
**__GANASTE__** 
 
 $customEmoji[arrow12] **$random[100;300]** monedas
 $customEmoji[arrow12] **$random[10;150]** Xp
 $random[0;100]% **porcentaje de haber ganado Won Chance**
 ]
$setGlobalUserVar[staminap;$sub[$getGlobalUserVar[staminap;$authorID];$random[1;20]];$authorID]

$wait[7s]
 $bottyping
$thumbnail[https://i.pinimg.com/originals/15/c1/44/15c144e8dc552a100b3292d268854499.gif]
 $color[GREEN]
 $setGlobalUserVar[petxp;$sum[$getGlobalUserVar[petxp;$authorID];$random[10;150]];$authorID]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[100;300]];$authorID]
$else
$if[$randomText[success;fail;sucess4;fail4]==fail]
 $title[**__$getGlobalUserVar[petname;$mentioned[1;yes]] Perdio!__** 
 perdiste ]
 $description[
   


 $customEmoji[arrow12] **$random[50;100]** monedas
 $customEmoji[arrow12] **$random[10;50]** Xp
 $random[0;100]% **Percent Won Chance**
 ]
 $setGlobalUserVar[staminap;$sub[$getGlobalUserVar[staminap;$authorID];$random[1;30]];$authorID]

 $setGlobalUserVar[peth;$sub[$getGlobalUserVar[peth;$authorID];$random[1;30]];$authorID]

$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-$random[50;100]];$authorID]
$setGlobalUserVar[petxp;$sum[$getGlobalUserVar[petxp;$authorID];-$random[10;50]];$authorID]
 $wait[7s]
$bottyping
$thumbnail[https://i.pinimg.com/originals/15/c1/44/15c144e8dc552a100b3292d268854499.gif]
 $color[RED]
$else
$if[$randomText[success;fail;sucess4;fail4]==fail4]
 $title[**__$getGlobalUserVar[petname;$mentioned[1;yes]] Perdio!__** 

 $description[
   
**__tu mascota perdio__** 
 
 $customEmoji[arrow12] **$random[50;200]** coins
 $customEmoji[arrow12] **$random[10;50]** Xp
 $random[0;100]% **Percent Won Chance**
 ]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];-$random[500;2000]];$authorID]
 $wait[7s]
$bottyping
$thumbnail[https://i.pinimg.com/originals/15/c1/44/15c144e8dc552a100b3292d268854499.gif]
 $color[RED]
 $setGlobalUserVar[staminap;$sub[$getGlobalUserVar[staminap;$authorID];$random[1;30]];$authorID]

 $setGlobalUserVar[peth;$sub[$getGlobalUserVar[peth;$authorID];$random[1;30]];$authorID]

 $setGlobalUserVar[petxp;$sum[$getGlobalUserVar[petxp;$authorID];$random[10;50]];$authorID]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[500;2000]];$authorID]
$else

$if[$randomText[success;fail;sucess4;fail4]==sucess4]
 $title[**__$getGlobalUserVar[petname;$mentioned[1;yes]] GANO!__** 
 $description[
   
**__Tu mascota GANO__** 
 
 $customEmoji[arrow12] **$random[500;1000]** monedas
 $customEmoji[arrow12] **$random[100;1000]** Xp
 $random[0;100]% **Percent Won Chance**
 ]
$wait[7s]
 $bottyping
$thumbnail[https://i.pinimg.com/originals/15/c1/44/15c144e8dc552a100b3292d268854499.gif]
 $color[BLUE]
  $setGlobalUserVar[staminap;$sub[$getGlobalUserVar[staminap;$authorID];$random[1;30]];$authorID]
 $setGlobalUserVar[petxp;$sum[$getGlobalUserVar[petxp;$authorID];$random[100;1000]];$authorID]
$setGlobalUserVar[coins;$sum[$getGlobalUserVar[coins;$authorID];$random[500;1000]];$authorID]
$else

$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[pet;$authorID]==1;]
$onlyIf[$getGlobalUserVar[nivelpet;$authorID]>=10;tu mascota tiene que ser nivel 10 para poder empezar a pelear]
$globalCooldown[5m;tienes que esperar%time% para pelear otra vez]
$onlyIf[$getGlobalUserVar[dog;$authorID]==1;necesitas un perro para poder usar este comando]
`
}