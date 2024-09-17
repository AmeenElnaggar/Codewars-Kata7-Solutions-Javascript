// Code wars Kata7 Solutions

/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

/*
    1) Declare new array
    2) Loop over the given Length and unshift to the array 
*/

//Solution
const reverseSeq = n => {
  const newArray = [];
  for (let i = 1; i < n + 1; i++) {
    newArray.unshift(i);
  }
  return newArray;
};
console.log(reverseSeq(5));
