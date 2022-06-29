/**
 * 
 * @param {any[]} array The array
 * @returns A random element from the given array
 */
module.exports = function randomElement(array) {
  
   return array[Math.floor(Math.random() * array.length)];

};