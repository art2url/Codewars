/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

export function powersOfTwo(n: number): number[] {
  const resultArr = [];

  for (let i = 0; i < n + 1; i++) {
    resultArr.push(2 ** i);
  }

  return resultArr;
}

powersOfTwo(0); // [1]
powersOfTwo(1); // [1, 2]
powersOfTwo(4); // [1, 2, 4, 8, 16]
