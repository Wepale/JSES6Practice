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
