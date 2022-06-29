module.exports = class SlashCommand {
  
   /**
    * 
    * @param {Function} runFn The run function
    * @param {object} config The command configuration
    */
   constructor(runFn, config) {

      this.run = runFn;
      this.config = config;

   };

};