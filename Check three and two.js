// Code wars Kata7 Solutions

/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran),
check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

/*
    1) Create counter for each character
    2) Loop over the array and use trenray operator to add the count to the Specified Char
    3) Use logical operators to check the condiotions 
*/

//Solution
function checkThreeAndTwo(arr) {
  let countA = 0;
  let countB = 0;
  let countC = 0;

  arr.forEach(ele => {
    ele === 'a' ? countA++ : ele === 'b' ? countB++ : countC++;
  });
  return (
    (countA === 3 && (countB === 2 || countC === 2)) ||
    (countB === 3 && (countA === 2 || countC === 2)) ||
    (countC === 3 && (countB === 2 || countA === 2))
  );
}
console.log(checkThreeAndTwo(['c', 'c', 'b', 'b', 'c']))
