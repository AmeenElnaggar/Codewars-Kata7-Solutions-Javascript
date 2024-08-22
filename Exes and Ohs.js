// Code wars Kata7 Solutions

/*
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
*/

/*
Solution 1 : 
            1) declare 2 variables 
            2) Use toLowerCase and split methods to get array with characters
            3) Loop over the array and check if the element is x x++ if the element o o++

Solution 2 :
            1) Use regularExpression and use match method to get array of each character
            2) Compare between the length of each character variables
*/
function XO(str) {
  // Sol 1 :
  //   let x = 0;
  //   let o = 0;
  //   str = str
  //     .toLowerCase()
  //     .split('')
  //     .forEach(ele => (ele === 'x' ? x++ : ele === 'o' ? o++ : false));
  //   return x === o;

  // Sol 2 :
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return x?.length === o?.length;
}
console.log(XO('xxxm'));
