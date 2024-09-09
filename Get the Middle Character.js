// Code wars Kata7 Solutions

/*
You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
*/

/*
Solution 1 : 
      1) Use modulas to check if the length of the string is even or odd
      2) If even use charAt method and get the middle character and the next of the mid
      3) If odd get the middle character 

Solution 2 : 
      1) Use slice method to get the middle character 
*/

//Solution
function getMiddle(s) {
// Sol 1 :

  //   let length = s.length;
  //   return length % 2 === 0
  //     ? `${s.charAt(length / 2 - 1)}${s.charAt(length / 2)}`
  //     : s.charAt(Math.trunc(length / 2));

// Sol 2 :

  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
console.log(getMiddle('middle'));
