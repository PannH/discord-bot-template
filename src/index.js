require('dotenv').config();

const DiscordClient = require('./structures/DiscordClient');

const client = new DiscordClient({ intents: 32767 });

client.login(process.env.CLIENT_TOKEN);

client.initEvents()
   .then((events) => console.log(`[EVENTS]: Loaded ${events.size} events`))
   .catch(console.error);

client.initSlashCommands()
   .then((slashCommands) => console.log(`[COMMANDS]: Loaded ${slashCommands.size} slash commands`))
   .catch(console.error)