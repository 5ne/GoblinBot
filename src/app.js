import { Client, Options } from 'discord.js';
import { loadEnv } from './bot_env.mjs';

import * as bot from "./bot.js";

// Setup Discord
const env = loadEnv();
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"], rejectOnRateLimit: Options.rejectOnRateLimit})
client.login(env.botToken());

// ready bot
client.on('ready', () => {
    bot.setup(client, env);
});

// handle messages for goblin requests
client.on('messageCreate', async function (msg) {
    // ignore messages from the bot itself!
    if (msg.author.bot) return;
    
    bot.handleMessage(msg);
});
