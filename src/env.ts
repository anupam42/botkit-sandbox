require('dotenv').config();

const { NODE_ENV, SLACK_BOT_TOKEN } = process.env;

export const nodeEnv = NODE_ENV || '';
export const slackBotToken = SLACK_BOT_TOKEN || '';
