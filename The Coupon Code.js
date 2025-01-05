// Code wars Kata7 Solutions

/*
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

/*
    1) Compare between the enteredCode and Correct Code and return true or false
    2) Get the date with new Date() and enter the given date 
    3) Compare between the currentDate and expirationDate and return true or false
*/

//Solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
}
console.log(checkCoupon('123', '123', 'July 9, 2015', 'July 9, 2015'));
