// Code wars Kata7 Solutions

/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

/*
    1) Use flat method to return new array with 1 level of the array
    2) Use sort method to sort the new array
*/

//Solution
function flattenAndSort(array) {
  return array.flat(1).sort((a, b) => a - b);
}
console.log(
  flattenAndSort([
    [1, 2],
    [3, 4],
    [5, 100],
  ])
);
