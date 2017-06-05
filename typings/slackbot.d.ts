declare namespace Slack {
  type MessageEvent = 'direct_message' | 'direct_mention' | 'mention' | 'ambient';
  type MessageSubtype = 'bot_message'
    | 'channel_archive'
    | 'channel_join'
    | 'channel_leave'
    | 'channel_name'
    | 'channel_purpose'
    | 'channel_topic'
    | 'channel_unarchive'
    | 'file_comment'
    | 'file_mention'
    | 'file_share'
    | 'group_archive'
    | 'group_join'
    | 'group_leave'
    | 'group_name'
    | 'group_purpose'
    | 'group_topic'
    | 'group_unarchive'
    | 'me_message'
    | 'message_changed'
    | 'message_deleted'
    | 'message_replied'
    | 'pinned_item'
    | 'reply_broadcast'
    | 'unpinned_item';

  interface Config {
    token: string;
  }

  interface Message {
    type: string;
    subtype?: MessageSubtype;
    channel: string;
    user: string;
    text: string;
    ts: string;
    source_team: string;
    team: string;
    event: MessageEvent;
    match: RegExpMatchArray;
    action?: string;
  }
}
