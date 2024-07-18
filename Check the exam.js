// Code wars Kata7 Solutions

/*
The first input array is the key to the correct answers to an exam, 
like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers,
 giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer,
  represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
*/

/*
    1) Use map method to return the points of the array 
    2) Use reduce method to calculate the pointsArray
*/

//Solution
function checkExam(array1, array2) {
  const pointsArray = array1.map((ele, i) => {
    return ele === array2[i] ? 4 : array2[i].length > 0 ? -1 : 0;
  });
  const result = pointsArray.reduce((acc, ele) => acc + ele);
  return result > 0 ? result : 0;
}
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']));
