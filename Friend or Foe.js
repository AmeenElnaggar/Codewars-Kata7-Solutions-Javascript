// Code wars Kata7 Solutions

/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]
*/

/*
    1) Use filter method and return each element have 4 letters only
*/

//Solution
function friend(friends) {
  return friends.filter(ele => ele.length === 4);
}
console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous']));
