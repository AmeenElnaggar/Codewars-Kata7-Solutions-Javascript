// Code wars Kata7 Solutions

/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321
*/

/*
Solution 1 : 
    1) Use Array.from method to get array from the given number
    2) Loop over the array to convert the ele to number
    3) Use sort method to sort the array in descending order
    4) Use join method to return the number again 

Solution 2 : 
    1) Use Array.from method to get array from the given number
    2) Use reverse method
    3) Use sort method to sort the array in descending order
    4) Use join method to return the number again 
*/

//Solutions
function descendingOrder(n) {
  // Sol 1
  //   const numbersArray = Array.from(`${n}`).map(ele => +ele);
  //   return +numbersArray.sort((a, b) => b - a).join('');

  //Sol 2
  const numbersArray = Array.from(`${n}`).reverse();
  return +numbersArray.sort((a, b) => b - a).join('');
}
console.log(descendingOrder(1234567));
