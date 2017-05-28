import * as Botkit from 'botkit';

const controller = Botkit.slackbot({});
controller.spawn({ token: 'test' }).startRTM();
