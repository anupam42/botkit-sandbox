import * as Botkit from 'botkit';
import * as env from '../env';

const controller = Botkit.slackbot({});
controller.spawn({ token: env.slackBotToken }).startRTM((err) => {
  if (err) throw new Error('Could not connect to Slack');
});

controller.hears('ping', ['direct_message', 'direct_mention', 'mention', 'ambient'], (bot, message) => {
  console.log(bot, message);
});