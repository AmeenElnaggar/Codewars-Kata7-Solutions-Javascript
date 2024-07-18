// Code wars Kata8 Solutions

/*
DESCRIPTION:
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

/*
Solution (1) : 
      1) Use filter method to filter the array with strings and convert to number
      2) Use reduce method to calculate each array and return the result

Solution (2) : 
      1) Use reduce method 
      2) Check if the typeof ele is number or no 
      3) return the result
*/

//Solutin
function divCon(x) {
  // Sol(1)
  //   const stringArray = x.filter(ele => typeof ele === 'string').map(ele => +ele);
  //   const integerArray = x.filter(ele => typeof ele === 'number');
  //   return (
  //     integerArray.reduce((acc, ele) => acc + ele, 0) -
  //     stringArray.reduce((acc, ele) => acc + ele, 0)
  //   );

  // Sol(2)
  return x.reduce((acc, ele) =>
    typeof ele === 'number' ? acc + ele : acc - Number(ele, 0)
  );
}
console.log(divCon([9, 3, '7', '3']));
