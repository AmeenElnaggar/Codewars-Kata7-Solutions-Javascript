// Code wars Kata7 Solutions

/*
In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17,88]
*/

/*
    1) Use map method and use index to compare between 2 arrays 
    2) Return new array with the biggest numbers of 2 arrays
*/

// Solution
function getLargerNumbers(arr1, arr2) {
  return arr1.map((ele, i) => (ele > arr2[i] ? ele : arr2[i]));
}
console.log(getLargerNumbers([34, -64, 15, 17, 88], [23, 14, 53, 17, 80]));
