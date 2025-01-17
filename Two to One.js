// Code wars Kata7 Solutions

/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending),
the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

/*
    1) Use new Set to return unique string from the 2 given strings
    2) Use spread operator to return array from the Set
    3) Use sort and join method to get the result
*/

//Solution
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}
console.log(longest('aretheyhere', 'yestheyarehere'));
