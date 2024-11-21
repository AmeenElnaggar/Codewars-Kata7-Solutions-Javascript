// Code wars Kata7 Solutions

/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

/*
    1) Check if the url include # or no
    2) Use slice method to return the url without # Sentence
*/

//Solution
function removeUrlAnchor(url) {
  return url.includes('#') ? url.slice(0, url.indexOf('#')) : url;
}
console.log(removeUrlAnchor('www.codewars.com/about'));
