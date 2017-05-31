import * as botkit from 'botkit';

export type Types = Slack.MessageEvent;
export type Message = Slack.Message;

export const hears
  : (p: string | string[] | RegExp, t: Types[], c: (b: botkit.Bot, m: Message) => void) =>
    (_: botkit.Controller) => botkit.Controller
  = (patterns, types, callback) => (controller) => {
    controller.hears(patterns, types, callback);
    return controller;
  };
