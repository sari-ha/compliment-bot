var slackbot = require('node-slackbot'),
  slackApiKey = process.env.SLACK_KEY,
  bot = new slackbot(slackApiKey);

bot.use(function(message, cb) {
  var botChannel = message.channel ? message.channel === 'D0NARQRGA' : false,
    msgType = message.type ? message.type === 'message' : false,
    toUser = message.text ? message.text.includes('<@') : false;

  if (botChannel && msgType && toUser) {
    bot.sendMessage('C0NANKWF7', message.text);
  }

  cb();
});

bot.connect();
