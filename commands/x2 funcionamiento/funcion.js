module.exports = ({
name: "t", 
aliases: ['f','b','t','s','fish','beg','trabajar','search'], 
code: `$title[se ha acabado tu x2 booster]
$setGlobalUserVar[x2;0;$authorID]
$setGlobalUserVar[x2mine;0;$authorID]
$onlyIf[$getGlobalUserVar[x2;$authorID]==1;]
$onlyIf[$getGlobalUserVar[x2mine;$authorID]>=20;]`
})