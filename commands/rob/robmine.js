module.exports = ({
name: "t", 
     aliases: ['f','b','t','s','fish','beg','trabajar','search','slot'], 

code: `$title[se ha acabado tu **Anti Rob*]
$setGlobalUserVar[antirob;0;$authorID]
$setGlobalUserVar[mantirob;0;$authorID]
$onlyIf[$getGlobalUserVar[antirob;$authorID]==1;]
$onlyIf[$getGlobalUserVar[mantirob;$authorID]>=300;]`
})