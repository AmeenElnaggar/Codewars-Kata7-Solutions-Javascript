// Code wars Kata8 Solutions

/*
Write a function, isItLetter or is_it_letter or IsItLetter,
which tells us if a given character is a letter or not.
*/

/*
    1) Use regularExpression to get the charcters
    2) Use match method to check if the character mathch with the regex or no
*/

// Solution
function isItLetter(character) {
  return character.match(/[a-z]/) ? true : false;
}
console.log(isItLetter('A'));
