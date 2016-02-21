var slackbot = require('node-slackbot'),
  slackApiKey = process.env.SLACK_KEY,
  bot = new slackbot(slackApiKey);

bot.use(function(message, cb) {
  var msgType = message.type ? message.type === 'message' : false,
    toUser = message.text ? message.text.includes('<@') : false;

  if (msgType && toUser) {
    bot.sendMessage(message.channel, "Posted to #you-guys-are-awesome!")
    bot.sendMessage('C0NANKWF7', message.text);
  } else if (msgType && message.channel !== 'C0NANKWF7') {
    bot.sendMessage(
      message.channel,
      'You need to @ mention a user in your message in order to send a compliment!'
    );
  }

  cb();
});

bot.connect();
