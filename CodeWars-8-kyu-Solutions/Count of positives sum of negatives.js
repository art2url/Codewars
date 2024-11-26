/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(numbers) {
  if (!numbers || numbers.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let negativeSum = 0;

  for (const number of numbers) {
    if (number > 0) {
      positiveCount++;
    } else if (number < 0) {
      negativeSum += number;
    }
  }

  return [positiveCount, negativeSum];
}

// countPositivesSumNegatives([
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
// ]); // [10, -65];

countPositivesSumNegatives([]); // null
countPositivesSumNegatives(null); //null
