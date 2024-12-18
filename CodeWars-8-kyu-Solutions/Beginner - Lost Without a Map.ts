/*
Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/

export function maps(x: number[], index = 0, result: number[] = []): number[] {
  if (index >= x.length) {
    return result;
  }
  result.push(x[index] * 2);

  return maps(x, index + 1, result);
}

maps([1, 2, 3]); // [2, 4, 6]
maps([4, 1, 1, 1, 4]); // [8, 2, 2, 2, 8]
maps([2, 2, 2, 2, 2, 2]); // [4, 4, 4, 4, 4, 4]
