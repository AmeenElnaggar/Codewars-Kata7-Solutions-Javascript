// Code wars Kata8 Solutions

/*
Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode 
that accepts a string containing up to 26 unique alphabetical characters, 
and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
*/

/*
    1) Use (split,sort,join) methods and return the sorted value
*/

// Solution
function sortGiftCode(code) {
  return code.split('').sort().join('');
}
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'));
