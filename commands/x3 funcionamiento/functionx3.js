module.exports = ({
name: "t", 
     aliases: ['f','b','t','s','fish','beg','trabajar','search'], 

code: `$title[se ha acabado tu x3 booster]
$setGlobalUserVar[x3;0;$authorID]
$setGlobalUserVar[x3mine;0;$authorID]
$onlyIf[$getGlobalUserVar[x3;$authorID]==1;]
$onlyIf[$getGlobalUserVar[x3mine;$authorID]>=80;]`
})