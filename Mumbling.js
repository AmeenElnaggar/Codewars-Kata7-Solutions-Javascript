// Code wars Kata7 Solutions

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

/*
    1) Declare variable and use toUpperCase and split methods to get array of string with uppercase
    2) Loob over the array with map method and use repeat and toLowerCase and join methods to return the result
*/

//Solution
function accum(s) {
  const arrayOfUpperCase = s.toUpperCase().split('');
  return arrayOfUpperCase
    .map((ele, i) => (i === 0 ? ele : ele + ele.repeat(i).toLowerCase()))
    .join('-');
}
console.log(accum('abcd'));
