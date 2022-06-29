/**
 * 
 * @param {number} includedMin The minimum (included)
 * @param {number} excludedMax The maximum (excluded)
 * @returns A random integer between the two given numbers
 */
module.exports = function randomInteger(includedMin, excludedMax) {

   const min = Math.ceil(includedMin);
   const max = Math.floor(excludedMax);

   return Math.floor(Math.random() * (max - min)) + min;

};