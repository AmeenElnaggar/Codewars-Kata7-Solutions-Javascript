// Code wars Kata7 Solutions

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
*/

/*
    1) Use math.abs to return positive value 
    2) Use (toString,split) methods to get array from the number 
    3) Use reduce method to return the result
*/

// Solution
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce((s, e) => s + +e, 0);
}
console.log(sumDigits(-32));
