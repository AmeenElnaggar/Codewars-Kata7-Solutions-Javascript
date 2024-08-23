// Code wars Kata7 Solutions

/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"
*/

/*
    1) Use reduce method to calculate the total
    2) Use modulas to check if the total is even or odd
*/

//Solution
function oddOrEven(array) {
  const total = array.reduce((acc, ele) => acc + ele, 0);
  return total % 2 ? 'odd' : 'even';
}
console.log(oddOrEven([1, 2, 3]));
