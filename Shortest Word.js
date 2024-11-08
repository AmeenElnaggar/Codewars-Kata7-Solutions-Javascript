// Code wars Kata7 Solutions

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

/*
    1) Use split to get array from the string
    2) Loop over the array and get the length of each element 
    3) Use Math.min method and spread opreator to return the minimum number
*/

//Solution
function findShort(s) {
  return Math.min(...s.split(' ').map(ele => ele.length));
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
