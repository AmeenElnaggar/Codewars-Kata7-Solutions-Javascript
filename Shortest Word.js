// Code wars Kata7 Solutions

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

/*
    1) Use split method to get array from the string
    2) Loop over the array with map method and return each element length
    3) Use Math.min() method to get the shortest length
*/

//Solution
function findShort(s) {
  let arrayOfLength = s.split(' ').map(ele => ele.length);
  return Math.min(...arrayOfLength);
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
