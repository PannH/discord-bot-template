/**
 * 
 * @param {any[]} array 
 * @param {any} element
 */
module.exports = function removeElement(array, element) {

   array.splice(array.indexOf(element), 1);

};