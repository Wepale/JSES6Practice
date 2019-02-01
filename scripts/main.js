"use strict";

/*
You are given an array (which will have a length of at least 3, but could be very large)
containing integers. The array is either entirely comprised of odd integers or entirely
comprised of even integers except for a single integer N. Write a method that takes the
array as an argument and returns this "outlier"
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/

const findOutlier = integers =>{
  let counter = 0;
  let result;
  for (let i= 0; i < 3; i++){
    if(integers[i] % 2 === 0){
      counter++;
    }
  }
  if(counter >= 2) {                              //Even array, get the odd number
    return integers.find(x => !(x % 2 == 0));
  } else {                                        //Odd array, get the odd number
    return integers.find(x => x % 2 == 0);
  }
  //return result;
}

//A better way

const findOutlier2 = integers =>{
  let even = integer.filter(item => item % 2 == 0);
  let odd = integer.filter(item => item % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

  const array =[2, 4, 0, 100, 4, 11, 2602, 36];
  console.log(`Exercise 1.1 : ${findOutlier(array)}`);
  console.log(`Exercise 1.2 : ${findOutlier(array)}`);



/*Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

*/

const createPhoneNumber = numbers =>{
  let firstNumbers= numbers.slice(0 , 3).join("");
  let secondNumbers= numbers.slice(3 , 6).join("");
  let thirdNumbers = numbers.slice(6, 10).join("");

  return `(${firstNumbers}) ${secondNumbers}-${thirdNumbers}`;
}
const tel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(`Exercise 2: ${createPhoneNumber(tel)}`);


/*
In this kata you will create a function that takes a list of non-negative integers
and strings and returns a new list with the strings filtered out.

Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

const filter_list = list =>{
  const onlyNumbers=[];
  for (let item of list){
    if(typeof item === "number") onlyNumbers.push(item);
  }
  return onlyNumbers;
}

//Another way

const filter_list2 = list =>{
  return list.filter(item => typeof item === "number");
}

const numberList = [1,2,"aasf","1","123",123];
console.log(`Exercise 3.1: ${filter_list(numberList)} `);
console.log(`Exercise 3.2: ${filter_list2(numberList)} `);

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
const digital_root = n =>{
  return String(n).length === 1 ? n : digital_root(String(n).split("").reduce((a, b) => Number(a) + Number(b)))}

console.log(`Exercise 4: ${digital_root(493193)}`);

//String(n).length == 1                   Transform n to string and check the length
//String(n).split("")                     Transfor to string and create an rray with each digit
//reduce((a, b) => Number(a) + Number(b)  a is the first element of the array and b the second one. The second part (=> a+b) indicate the operation we want to do
