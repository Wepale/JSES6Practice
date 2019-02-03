"use strict";

/*Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

*/

const createPhoneNumber = numbers => {
  let firstNumbers = numbers.slice(0, 3).join("");
  let secondNumbers = numbers.slice(3, 6).join("");
  let thirdNumbers = numbers.slice(6, 10).join("");

  return `(${firstNumbers}) ${secondNumbers}-${thirdNumbers}`;
}
const tel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(`Exercise 2: ${createPhoneNumber(tel)}`);
