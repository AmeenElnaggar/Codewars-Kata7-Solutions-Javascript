// Code wars Kata7 Solutions

/*
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

/*
    1) Use regularExpression to replace any string not alphabetical with ""
    2) Use methods (split,reverse,join) to return the reversed string
*/

// Solution
function reverseLetter(str) {
  str = str.replace(/[^a-zA-Z]/g, '');
  return str.split('').reverse().join('');
}

console.log(reverseLetter('ultr53o?n'));
