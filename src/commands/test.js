const SlashCommand = require('../structures/SlashCommand');

module.exports = new SlashCommand(async (ctx) => {

   console.log(`The command '/${ctx.command.config.name}' has been used by '${ctx.executor.tag}' in '${ctx.guild.name}' guild.`);

}, {
   name: 'test',
   slashData: {
      name: 'test',
      description: 'Test command.'
   }
});