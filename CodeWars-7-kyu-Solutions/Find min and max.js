/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// function getMinMax(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (const num of arr) {
//     if (num < min) min = num;
//     if (num > max) max = num;
//   }

//   return [min, max];
// }

getMinMax([1]); // [1, 1]
getMinMax([1, 2]); // [1, 2]
getMinMax([2, 1]); // [1, 2]
