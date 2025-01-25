// Code wars Kata7 Solutions

/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

/*
    1) Use math.(min,max) to get the minimum and maximum values
*/

//Solution
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log(getMinMax([1, 2]))
