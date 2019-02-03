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