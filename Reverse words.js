// Code wars Kata7 Solutions

/*
Complete the function that accepts a string parameter,
and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

/*
    1) Use split to get array from the string 
    2) Use reverse to reverse each element in the array 
    3) Use join method to get new string from the reversed array

    And Use all of them again to get the final result
*/

//Solution
function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog'));
