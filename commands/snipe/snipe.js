module.exports = ({
	name: 'snipe',
	code: `
$color[$getVar[color]]

$author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]

$description[**Mensaje que fue eliminado** - \`\`\`$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]\`\`\` 

**canal** - <#$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]> \`($getChannelVar[snipe_channel;$mentionedChannels[1;yes]])\`

**tiempo** - \`$getChannelVar[snipe_date;$mentionedChannels[1;yes]]\` 
[<t:$getChannelVar[snipe_t;$mentionedChannels[1;yes]]:R>]
]

$onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=; {description:<a:c_s:902787152318984192> Nothing to snipe in <#$mentionedChannels[1;yes]>}{color:RED}]`
});


