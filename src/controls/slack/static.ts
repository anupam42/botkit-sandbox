import { Controller } from 'botkit';
import * as R from 'ramda';

export const ping
: (_: Controller) => Controller
= R.tap<Controller>(controller => controller.hears(
  /^ping$/, 
  ['direct_message', 'direct_mention', 'mention', 'ambient'],
  (bot, message) => bot.reply(message, 'pong'),
  ),
);
