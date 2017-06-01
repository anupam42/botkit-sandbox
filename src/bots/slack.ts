import * as R from 'ramda';
import * as Botkit from 'botkit';
import * as env from '../env';
import * as statics from '../controls/slack/static';

export const controller = Botkit.slackbot({});
controller.spawn({ token: env.slackBotToken }).startRTM((err) => {
  if (err) throw new Error('Could not connect to Slack');
});

R.pipe(
  statics.ping,
)(controller);
