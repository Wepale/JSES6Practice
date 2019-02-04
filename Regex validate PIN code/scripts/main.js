"use strict";

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/
const validatePIN = pin => {
  let correctLength = (pin.length === 4 || pin.length === 6);
  let onlyPossitiveNumbers = pin.split("").every(item => item >= 0 && item != "\n" && item != " ");
  return correctLength && onlyPossitiveNumbers ? true : false;
}

//Another way

const validatePIN2 = pin => {
  return (pin.length === 4 || pin.length === 6) && parseInt(pin) == pin;
}

console.log(`Exercise 5.1: 123? => ${validatePIN("123?")}`);
console.log(`Exercise 5.1: a12345 => ${validatePIN("a12345")}`);
console.log(`Exercise 5.1: 000000 => ${validatePIN("000000")}`);
console.log(`Exercise 5.2: 123? => ${validatePIN2("123?")}`);
console.log(`Exercise 5.2: a12345 => ${validatePIN("a12345")}`);
console.log(`Exercise 5.2: 000000 => ${validatePIN("000000")}`);
