/*
Task: Write a function "coffee"
that accepts a string as a parameter and returns that string with every instance of coffee in all caps.

Examples:

Input: "Did I only have two cups of coffee this morning? I need more."
Output: "Did I only have two cups of COFFEE this morning? I need more."

Input: "Coffee! Buy me a COFFEE!" 
Output: "COFFEE! Buy me a COFFEE!"
*/

/*
    1) Use replace method 
    2) Use regularExpression To convert to Caps
*/

// Solution
function coffee(str) {
  return str.replace(/(coffee|Coffee)/gi, 'COFFEE');
}
console.log(coffee('Coffee! Buy me a COFFEE!'));
