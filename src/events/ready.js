const Event = require('../structures/Event');

module.exports = new Event('ready', async (client) => {

   console.log(`[CLIENT]: Logged in as '${client.user.tag}'`);

   client.deploySlashCommands()
      .then(() => console.log(`[COMMANDS]: Deployed slash commands on ${client.guilds.cache.size} guilds`))
      .catch(console.error);

});