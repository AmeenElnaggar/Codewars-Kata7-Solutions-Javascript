// Code wars Kata7 Solutions

/*
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

minValue ({1, 3, 1})  ==> return (13)
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications
*/

/*
    1) Use new Set and spread opreator to get array of unigue numbers
    2) Use sort method to sort the array and join to get string from the array
    3) Convert the string to number
*/

//Solution
function minValue(values) {
  return +[...new Set(values)].sort((a, b) => a - b).join('');
}
console.log(minValue([1, 2, 3, 1]));
