// Code wars Kata7 Solutions

/*
String 1: "abcdefg"
String 2: "abcqetg"
Notice how the "d" from String 1 has become a "q" in String 2, and "f" from String 1 has become a "t" in String 2.

It's your job to help Mary solve the puzzles.
Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ
In the example above, 
your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.
*/

/*
    1) Create a empty array
    2) Use split and map methods to check if elements are same or no 
    3) Return new arr with indexes of the different elements
*/

// Solution
function spot(s1, s2) {
  const arr = [];
  s1.split('').map((ele, i) => (ele !== s2[i] ? arr.push(i) : ele));
  return arr;
}
console.log(
  spot(
    'FpWAS xkDZ pAwQ CgAU  mOTjUBqYLb f cP yE',
    'FwOAS.xkkZ pAnQ CgAH  mOTjUBqYLb f cPHyE'
  )
);
