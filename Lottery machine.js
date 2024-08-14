// Code wars Kata7 Solutions

/*
Your task is to write an update for a lottery machine.
Its current version produces a sequence of random letters and integers (passed as a string to the function).
Your code must filter out all letters and return unique integers as a string, in their order of first appearance.
If there are no integers in the string return "One more run!"

Examples
"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5"
*/

/*
    1) Use regularExpression to replace any character with empty string
    2) Use new Set to return array with unique values 
    3) Use Array.from object to get array from the new Set
    4) Use join method to get the string from the array
*/

//Solution
function lottery(str) {
  return str.replace(/[a-z]/gi, '').length > 0
    ? Array.from(new Set(str.replace(/[a-z]/gi, ''))).join('')
    : 'One more run!';
}
console.log(lottery('wQ8Hy0y5m5oshQPeRCkG'));
