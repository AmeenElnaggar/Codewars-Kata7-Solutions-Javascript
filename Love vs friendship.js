// Code wars Kata8 Solutions

/*
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108
So friendship is twice as strong as love :-)
Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
The input will always be made of only lowercase letters and will never be empty.
*/

/*
    1) Use spread operator to get array from the string
    2) Loop over the array and get the total result of each uni code of each char
*/

//Solution
function wordsToMarks(string) {
  return [...string].reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0);
}
console.log(wordsToMarks('love'));
