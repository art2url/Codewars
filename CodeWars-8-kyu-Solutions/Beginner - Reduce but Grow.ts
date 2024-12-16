/*
Given a non-empty array of integers, return the result of multiplying the values together in order. 

Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

export function grow(arr: number[]): number {
  return arr.reduce((acc, value) => acc * value);
}

grow([1, 2, 3]); // 6
grow([4, 1, 1, 1, 4]); // 16
grow([2, 2, 2, 2, 2, 2]); // 64
