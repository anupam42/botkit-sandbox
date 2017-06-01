declare module "botkit" {

  type Message = Slack.Message;
  type MessageEvents = (Slack.MessageEvent)[];

  interface Bot {
    startRTM(callback?: (err: Error, bot: Bot, payload: {}) => void): this;
    closeRTM(): void;
    destroy(): void;
    say(options : { text: string, channel: string }) : void;
    reply(message : Message, text : string): void;
    startConversation(message: Message, cb: (err: Error, convo: Conversation) => void): never;
    createConversation(message: Message, cb: (err: Error, convo: Conversation) => void): never;
  }

  // TODO
  interface Conversation {
    
  }

  interface MessageCallback {
    (bot: Bot, message: Message): void
  }

  interface Controller {
    spawn(config: Slack.Config): Bot,
    hears(patterns: string | string[] | RegExp, types: MessageEvents, cb: MessageCallback): void;
    hears(patterns: string | string[] | RegExp, types: MessageEvents, middleware: Function, cb: MessageCallback): void;
  }

  export function slackbot(config: {
    debug?: Boolean;
    stale_connection_timeout?: number;
    send_via_rtm?: boolean;
    retry?: number;
    api_root?: string;
    disable_startup_messages?: boolean;
    require_delivery?: boolean;
  }): Controller;
}