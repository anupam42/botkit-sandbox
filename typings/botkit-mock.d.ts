declare namespace BotkitMock {
  interface Controller {
      spawn: (config: { type: string }) => Bot;
      shutdown: () => void;
    }

  interface Bot {
    usersInput: (inputs: Input[]) => Promise<Message>;
  }

  interface Input {
    user: string,
    channel: string,
    type?: 'direct_message' | 'message_received' | 'interactive_message_callback'
    messages: Message[],
  }

  interface Message {
    text: string | undefined;
    isAssertion: boolean;
    channel?: string;
    deep?: number;
    timeout?: number;
  }
}

declare module 'botkit-mock' {
  
  function Botmock(config: { stats_optout?: boolean, debug?: boolean }): BotkitMock.Controller;

  export = Botmock;
}