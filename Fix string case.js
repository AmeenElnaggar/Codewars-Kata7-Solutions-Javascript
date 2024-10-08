// Code wars Kata7 Solutions

/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is
to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

/*
    1) Declare 2 variables contains the length of the upper or lower letters 
    2) Check if the length of lettersDown is greater than lettersUp then the string will be lowerCase
    3) Check if the length of lettersUp is greater than lettersDown then the string will be upperCase
*/

//Soltuion
function solve(s) {
  const letterUp = s.split('').filter(ele => ele === ele.toUpperCase()).length;
  const letterDown = s
    .split('')
    .filter(ele => ele === ele.toLowerCase()).length;

  return letterUp > letterDown ? s.toUpperCase() : s.toLowerCase();
}
console.log(solve('CODe'));
