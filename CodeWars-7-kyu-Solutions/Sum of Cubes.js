/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

function sumCubes(number) {
  let result = 0;

  for (let i = 1; i <= number; i++) result += i ** 3;

  return result;
}

sumCubes(1); // 1
sumCubes(2); // 9
sumCubes(10); // 3025
