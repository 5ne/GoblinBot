import 'dotenv/config'

var unknownMsgReplyWithUsage = 'false';

export function loadEnv() {
  return {
    botToken: () => process.env.BOT_TOKEN,
    unknownMsgReplyWithUsage: () => process.env.UNKNOWN_MSG_REPLY_WITH_USAGE || unknownMsgReplyWithUsage,
  };
}
