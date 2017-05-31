import * as botkit from 'botkit';
import { hears } from '../utils/functions';

export const ping = hears(
  'ping',
  ['direct_message', 'direct_mention', 'mention', 'ambient'],
  (bot, message) => {
    console.log(bot, message);
  });
