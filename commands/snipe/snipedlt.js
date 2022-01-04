module.exports = ({
    type: 'deletedCommand',
	channel: '$channelID',

	code:`
$setChannelVar[snipe_msg;$message]
$setChannelVar[snipe_author;$authorID]

$setChannelVar[snipe_channel;$channelID]

$setChannelVar[snipe_date;$day $month $year - $hour:$minute$timezone[Asia/kolkata]]

$setChannelVar[snipe_t;$truncate[$divide[$dateStamp;1000]]]`
});

