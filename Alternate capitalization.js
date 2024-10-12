// Code wars Kata7 Solutions

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
*/

/*
    1) Use split method to get array from string
    2) Use moduls to check if the index of the element is odd or even 
    3) Use map method to return array with the odd and even result
*/

//Solution
function capitalize(s) {
  const oddString = s
    .split('')
    .map((ele, i) => (i % 2 === 0 ? ele.toUpperCase() : ele))
    .join('');

  const evenString = s
    .split('')
    .map((ele, i) => (i % 2 !== 0 ? ele.toUpperCase() : ele))
    .join('');

  return [oddString, evenString];
}
console.log(capitalize('codewars'));
