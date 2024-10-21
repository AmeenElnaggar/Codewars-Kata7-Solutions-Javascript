// Code wars Kata7 Solutions

/*
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument,
and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/

/*
    1) Use split method to get array from the word
    2) Loop over the array with map method and return the index of the capital element
    3) Loop over the capital array with filter method to return the typeof number
*/

//Solutin
const capitals = function (word) {
  return word
    .split('')
    .map((ele, i) => {
      return ele === ele.toUpperCase() ? i : ele;
    })
    .filter(ele => typeof ele === 'number');
};
console.log(capitals('AmeEnSayed'));
