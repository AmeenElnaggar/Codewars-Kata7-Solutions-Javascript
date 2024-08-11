// Code wars Kata7 Solutions

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

/*
    1) Use sort method to sort the array
    2) Create first 2 variables
    3) Get the total of the 2 minimum values
*/

//Solution
function sumTwoSmallestNumbers(numbers) {
  const [num1, num2] = numbers.sort((a, b) => a - b);
  return num1 + num2;
}
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));
