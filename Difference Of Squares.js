// Code wars Kata7 Solutions

/*
Find the difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.

Example
For example, when n = 10:

The square of the sum of the numbers is:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 55² = 3025
The sum of the squares of the numbers is:

1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10² = 385
Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbers is: 3025 - 385 = 2640
*/

/*
    1) Use for loope to get the number between 0 and 10
    2) Declare variables for total results 
*/

// Solution
function differenceOfSquares(x){
    let sum = 0, squareSum = 0,i;
    for (i =1 ; i <= x; i++) {
      sum += i*i;
      squareSum += i;
    }
    return squareSum*squareSum - sum;
  }
console.log(differenceOfSquares(10))