/**
 * 
 * @param {number} timestamp The timestamp
 * @param {string} type The timestamp type
 * @returns A timestamp formatted to fit in Discord
 */
module.exports = function timestamp(timestamp, type) {

   return `<t:${parseInt(timestamp/1000)}:${type}>`;

};