module.exports = class Event {

   /**
    * 
    * @param {string} name The event's name
    * @param {Function} runFn The run function
    */
   constructor(name, runFn) {

      this.name = name;
      this.run = runFn;

   };

};