import 'dotenv/config'

export function loadEnv() {
  return {
    botToken: () => process.env.BOT_TOKEN,
  };
}
