const { Client, ClientOptions, Collection } = require('discord.js');
const { readdirSync } = require('fs');

module.exports = class DiscordClient extends Client {

   /**
    * 
    * @param {ClientOptions} options
    * @constructor
    */
   constructor(options) {

      super(options);

      this.slashCommands = new Collection();
      this.events = new Collection();

   };

   /**
    * 
    * @returns The events collection
    */
   async initEvents() {

      for (const fileName of readdirSync('./src/events')) {

         const event = require(`../events/${fileName}`);
         this.events.set(event.name, event);

      };

      this.events.forEach((event) => {

         this.on(event.name, event.run.bind(null, this))

      });

      return this.events;

   };

   /**
    * 
    * @returns The slash commands collection
    */
   async initSlashCommands() {

      for (const fileName of readdirSync('./src/commands')) {

         const slashCommand = require(`../commands/${fileName}`);
         this.slashCommands.set(slashCommand.config.name, slashCommand);

      };

      return this.slashCommands;

   };

   async deploySlashCommands() {

      this.guilds.cache.forEach((guild) => {

         guild.commands.set(
            this.slashCommands.map(({ config }) => config.slashData)
         );

      });

   };

};