// Code wars Kata7 Solutions

/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.
*/

/*
Solution 1 : 
    1) Create variable to merge all the given ages in array
    2) Loob over the array array and get the Result of the ages after add and multiple all of them
    3) Get the nearst down number based on usage of Math.floor and Math.sqrt methods

  Solution 2 :
    1) Use Rest parameter to get array based on the given ages 
    2) Use Math.hypot method to get the the result of the ages after add and multiple all of them
*/
function predictAge(...ages) {
  //Sol 1
  // const arrayOfAges = [age1, age2, age3, age4, age5, age6, age7, age8];
  // return Math.floor(
  //   Math.sqrt(arrayOfAges.reduce((acc, ele) => acc + ele * ele, 0)) / 2
  // );

  //Sol 2
  return Math.floor(Math.hypot(...ages) / 2);
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
