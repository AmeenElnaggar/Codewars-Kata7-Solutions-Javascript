// Code wars Kata8 Solutions

/*
You will be given an array and a limit value.
You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

/*
    1) Use Math.max method with spread operator to check 
*/

//Solution
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
console.log(smallEnough([1, 2, 3, 4], 5));
