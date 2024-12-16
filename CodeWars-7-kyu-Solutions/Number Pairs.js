/*
In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
*/

function getLargerNumbers(a, b) {
  return a.map((item, i) => Math.max(item, b[i]));
}

getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]); // [23, 64, 53, 17, 88]
getLargerNumbers([34, -64, 15, 17, 88], [23, 14, 53, 17, 80]); // [34, 14, 53, 17, 88]
