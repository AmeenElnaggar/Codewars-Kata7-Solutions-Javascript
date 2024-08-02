// Code wars Kata8 Solutions

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

/*
    1) Use split method to get array from the string 
    2) Use map method to convert each ele to number
    3) Use spread operator with math.(max,min) to get the highest and lowest values
*/

//Solution
function highAndLow(numbers) {
  const arrayOfNumbers = numbers.split(' ').map(ele => +ele);
  return `${Math.max(...arrayOfNumbers)} ${Math.min(...arrayOfNumbers)}`;
}
console.log(highAndLow('1 2 -3 4 5'));
