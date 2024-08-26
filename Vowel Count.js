// Code wars Kata7 Solutions

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

/*
Solution 1 :
    1) Declare vowels variable contain the vowels characters
    2) Use split method to get array from the string
    3) Loop over the array and check if the array include the ele or no
    4) Return the count of vowels 

Solution 2 :
    1) Use regularExpression with match method 
    2) Get array from the match method with the vowels characters only
    3) Return the length of the array
*/

//Solution
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(getCount('aeioufdjsf'));
