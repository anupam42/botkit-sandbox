import { Controller } from 'botkit';
import * as R from 'ramda';

export const ping
  : (_: Controller) => Controller
  = R.tap<Controller>(controller => controller.hears(
    /^ping$/i,
    ['direct_message', 'direct_mention', 'mention'],
    (bot, message) => bot.reply(message, 'pong'),
  ));

export const pang
  : (_: Controller) => Controller
  = R.tap<Controller>(controller => controller.hears(
    /^pang$/i,
    ['direct_message', 'direct_mention', 'mention'],
    (bot, message) => bot.startConversation(message, (err, conv) => {
      // conv.addMessage({ text: 'hello', action: 'foo' }, 'default');
    }),
  ));
