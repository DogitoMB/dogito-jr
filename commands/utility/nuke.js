module.exports = {
name:"nuke",
code:`
$channelSendMessage[$channelID[$get[channel]];☑️ | $userTag[$authorid] Channel Successfully Nuked!
$randomText[{attachment:nuke.gif:https://i.pinimg.com/originals/6c/48/5e/6c485efad8b910e5289fc7968ea1d22f.gif};{attachment:nuke.gif:https://cdn.discordapp.com/attachments/681447100369731808/749666929077125170/ezgif.com-optimize_32.gif};{attachment:nuke.gif:https://cdn.discordapp.com/attachments/681447100369731808/749665482579247144/dcccc1599e477dc4b33bdd890295a0eb.gif};{attachment:nuke.gif:https://cdn.discordapp.com/attachments/681447100369731808/749665483170775090/gif-explosion-57.gif};{attachment:nuke.gif:https://cdn.discordapp.com/attachments/681447100369731808/749665483623628850/200.gif};{attachment:nuke.gif:https://cdn.discordapp.com/attachments/681447100369731808/749665484139397210/1e5ae8453f3ed25e4cc1c0a0ea4e8f5d.gif};{attachment:nuke.gif:https://cdn.discordapp.com/attachments/681447100369731808/749666090614784080/Minecraft-tnt-explosion.gif};{attachment:nuke.gif:https://cdn.discordapp.com/attachments/681447100369731808/749666134235807804/u9gxyavtmcbhzcgcgqms.gif};{attachment:nuke.gif:https://cdn.discordapp.com/attachments/681447100369731808/749666134235807804/u9gxyavtmcbhzcgcgqms.gif};{attachment:nuke.gif:https://cdn.discordapp.com/attachments/681447100369731808/749666145157775370/40512312328d1281f6fa05ba6f163991.gif}];no]
$wait[1ms]
$let[channel;$channelName]
$cloneChannel
$deleteChannels[$channelID]
$wait[2ms]
$onlyBotPerms[managechannels;I dont have manage channels permission in this server!]
$onlyPerms[managechannels;You dont have permission to do that!]
`
}