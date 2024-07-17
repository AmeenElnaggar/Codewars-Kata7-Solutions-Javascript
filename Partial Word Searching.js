// Code wars Kata7 Solutions

/*
Write a method that will search an array of strings for all strings that contain another string,
ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array,
 the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
*/

/*
    1) Use filter method to get new array with the matched query 
    2) Check if the array is empty or no and return the value
*/

// Solution
function wordSearch(query, seq) {
  const matcedArray = seq.filter(ele => {
    return ele.toLowerCase().includes(query.toLowerCase());
  });
  return matcedArray.length > 0 ? matcedArray : ['Empty'];
}
console.log(wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc']));
