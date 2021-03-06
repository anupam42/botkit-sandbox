import * as R from 'ramda';
import * as Botkit from 'botkit';
import * as env from '../env';
import * as controllers from '../controllers/slack';

const controller = Botkit.slackbot({});
controller
  .spawn({ token: env.slackBotToken })
  .startRTM((err) => {
    if (err) throw new Error('Could not connect to Slack');
  });

R.pipe(
  controllers.ping,
  controllers.pang,
)(controller);
