// Code wars Kata7 Solutions

/*
Task
Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language),
whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

Examples
[13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is 
13 + 49 = 62 and the total weight of team 2 is 27.
*/

/*
    1) Declare two variables for the team 1 and 2
    2) Loop over the array and check with the modulas if the index is even or odd
*/

//Solution
function rowWeights(array) {
  let team1 = 0;
  let team2 = 0;
  array.forEach((ele, i) => (i % 2 === 0 ? (team1 += ele) : (team2 += ele)));
  return [team1, team2];
}
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]));
