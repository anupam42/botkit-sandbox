declare module "botkit" {

  type Message = Slack.Message;
  type MessageEvents = (Slack.MessageEvent)[];

  interface Bot {
    startRTM(callback?: (err: Error, bot: Bot, payload: {}) => void): this;
    closeRTM(): never;
    destroy(): never;
    say(options : { text: string, channel: string }) : never;
    reply(message : Message, text : string): never;
    startConversation(message: Message, cb: (err: Error, convo: Conversation) => void): never;
    createConversation(message: Message, cb: (err: Error, convo: Conversation) => void): never;
  }

  interface Conversation {
    messages: Message[];
    addMessage(message: string | Message, thread_name?: string): never;
    addQuestion(message: string | Message, cb: (response: Message, conv: Conversation, capture_options?: {}, thread_name?: string) => never): never;
    say(message: string | Message): never;
    ask(message: Message, cb: (response: Message, conv: Conversation) => never): never;
  }

  interface Controller {
    spawn(config: Slack.Config): Bot,
    hears(patterns: string | string[] | RegExp, types: MessageEvents, cb: (bot: Bot, message: Message) => never): never;
    hears(patterns: string | string[] | RegExp, types: MessageEvents, middleware: Function, cb: (bot: Bot, message: Message) => never): never;
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