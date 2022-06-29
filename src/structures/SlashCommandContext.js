const { CommandInteraction, GuildMember } = require('discord.js');
const DiscordClient = require('./DiscordClient');

module.exports = class SlashCommandContext {

   /**
    * 
    * @param {CommandInteraction} interaction The command interaction
    * @param {DiscordClient} client The client
    */
   constructor(interaction, client) {

      this.interaction = interaction;
      this.client = client;

   };

   get memberClient() {
      return this.interaction.guild.me;
   };

   get executor() {
      return this.interaction.user;
   };

   get member() {
      return this.interaction.member;
   };

   get guild() {
      return this.interaction.guild;
   };

   get channel() {
      return this.interaction.channel;
   };

   get command() {
      return this.client.slashCommands.get(this.interaction.commandName);
   };

   async errorReply(content) {

      const embed = {
         color: 0xdd2e44,
         description: content
      };

      if (this.interaction.deferred || this.interaction.replied) {

         return void this.interaction.editReply({
            embeds: [embed],
            components: []
         });

      } else {
        
         return void this.interaction.reply({
            embeds: [embed],
            ephemeral: true
         });

      };

   };

   async successReply(content) {

      const embed = {
         color: 0x77b255,
         description: content
      };

      if (this.interaction.deferred || this.interaction.replied) {

         return void this.interaction.editReply({
            embeds: [embed],
            components: []
         });

      } else {
        
         return void this.interaction.reply({
            embeds: [embed],
            ephemeral: true
         });

      };

   };

};