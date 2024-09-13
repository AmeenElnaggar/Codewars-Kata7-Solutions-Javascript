// Code wars Kata7 Solutions

/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]
*/

/*
    1) Use sort method to sort the array by the length of each element
*/

//Solution
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']));
