// Code wars Kata7 Solutions

/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs.
Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
*/

/*
    1) Declare 2 variables with the number inside bus and off bus
    2) Loop over the busStops array and calculate the value of the 2 variables
    3) Substract the 2 values and return the people in the bus :D
*/

//Solution
const number = function (busStops) {
  let inBus = 0;
  let offBus = 0;
  busStops.forEach(ele => {
    inBus += ele[0];
    offBus += ele[1];
  });
  return inBus - offBus;
};
console.log(
  number([
    [5, 1],
    [5, 1],
    [5, 1],
  ])
);
