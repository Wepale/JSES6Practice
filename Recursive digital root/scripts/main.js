"use strict";

/*.
you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n,
take the sum of the digits of n. If that value has two digits, continue reducing
in this way until a single-digit number is produced. This is only applicable to
the natural numbers.

Here's how it works:

digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2

*/
const digital_root = n => {
  return String(n).length === 1 ? n : digital_root(String(n).split("").reduce((a, b) => Number(a) + Number(b)))
}

console.log(`Exercise 4: ${digital_root(493193)}`);

//String(n).length == 1                   Transform n to string and check the length
//String(n).split("")                     Transfor to string and create an array with each digit
//reduce((a, b) => Number(a) + Number(b)  a is the first element of the array and b the second one. The second part (=> a+b) indicate the operation we want to do
