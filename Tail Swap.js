// Code wars Kata7 Solutions

/*
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end)
. The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list),
 but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

/*
    1) Use split method to get the value of each element in the array
    2) Return array with strings that each element have different value
*/

// Solution
function tailSwap(arr) {
  const split_1 = arr[0].split(':');
  const split_2 = arr[1].split(':');
  return [`${split_1[0]}:${split_2[1]}`, `${split_2[0]}:${split_1[1]}`];
}
console.log(tailSwap(['a:123', 'b:456']));
