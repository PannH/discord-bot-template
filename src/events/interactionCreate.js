const SlashCommandContext = require('../structures/SlashCommandContext');
const Event = require('../structures/Event');

module.exports = new Event('interactionCreate', async (client, interaction) => {
   
   if (interaction.isCommand()) {

      const slashCommand = client.slashCommands.get(interaction.commandName);
      const commandContext = new SlashCommandContext(interaction, client);

      slashCommand.run(commandContext)
         .catch(console.error);
      
   };

});