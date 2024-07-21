// Code wars Kata7 Solutions

/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
*/

/*
    1) Create empty array
    2) Use Object.entries  to get array with key and value pairs
    3) Loop over the array and push to the empty array
*/

// Solution
function convertHashToArray(hash) {
  let arr = [];
  for (const [key, value] of Object.entries(hash)) {
    arr.push([key, value]);
  }
  return arr;
}

console.log(convertHashToArray({ name: 'Jeremy', age: 24 }));
