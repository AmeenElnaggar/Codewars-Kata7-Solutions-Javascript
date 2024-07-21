// Code wars Kata8 Solutions

/*
Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.
Worked Example
("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

('abcdee', 'e', 'e') ➞ False
*/

/*
  1) Loop over the text 
  2) Check ele === a && the next ele !== b 
*/

// Solution
function bestFriend(txt, a, b) {
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === a && txt[i + 1] !== b) return false;
  }
  return true;
}

console.log(bestFriend('zoo wee mama', 'a', 'm'));
