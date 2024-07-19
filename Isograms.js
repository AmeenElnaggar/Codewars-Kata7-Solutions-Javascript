// Code wars Kata7 Solutions

/*
An isogram is a word that has no repeating letters,consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

/*
    1) Get new unique array with the conditions only
    2) Check the length after get the new unique array 
*/

// Solution
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}
console.log(isIsogram('Aba'));
