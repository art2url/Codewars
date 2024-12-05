/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/

export function pyramid(height: number): Array<Array<number>> {
  const resultArray: Array<Array<number>> = [];

  for (let i = 1; i <= height; i++) {
    resultArray.push(Array(i).fill(1));
  }

  return resultArray;
}

pyramid(0), [];
pyramid(1), [[1]];
pyramid(2), [[1], [1, 1]];
pyramid(3), [[1], [1, 1], [1, 1, 1]];
pyramid(4), [[1], [1, 1], [1, 1, 1], [1, 1, 1, 1]];
