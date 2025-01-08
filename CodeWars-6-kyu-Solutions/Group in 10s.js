/*
Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.

The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc.

Here's an example of the required output:

const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

grouped[0]     // [3, 8]
grouped[1]     // [12, 17, 19]
grouped[2]     // [25]
grouped[3]     // [35, 38]
grouped[4]     // undefined
grouped[5]     // [50]
*/

function groupIn10s(...args) {
  if (args.length === 0) return [];

  const result = [];

  for (const num of args) {
    const group = Math.floor(num / 10);
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(num);
  }

  for (const group of result) {
    if (group) group.sort((a, b) => a - b);
  }

  return result;
}

groupIn10s(1, 3, 2, 20); // [[ 1, 2, 3 ], , [20]]
groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50); // [[3, 8], [12, 17, 19], [25], [35, 38], , [50]];
groupIn10s(12, 10, 11, 13, 25, 28, 29, 49, 51, 90); //[, [10, 11, 12, 13], [25, 28, 29], , [49], [51], , , , [90]];
groupIn10s(); // [];
groupIn10s(100); // [, , , , , , , , , , [100]];
