declare module "botkit" {

  interface Bot {
    startRTM(callback?: (err: Error, bot: Bot, payload: {}) => void): this;
    closeRTM(): void;
    destroy(): void;
  }

  interface MessageCallback {
    (bot: Bot, message: Slack.Message): void
  }

  interface Controller {
    spawn(config: Slack.Config): Bot,
    hears(patterns: string | string[] | RegExp, types: Slack.MessageEvent[], cb: MessageCallback): void;
    hears(patterns: string | string[] | RegExp, types: Slack.MessageEvent[], middleware: Function, cb: MessageCallback): void;
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