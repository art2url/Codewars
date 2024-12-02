/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

export function findUniq(arr: number[]): number {
  const [a, b, c] = arr.slice(0, 3);

  const repeatedValue = a === b ? a : c === a ? a : b;

  for (const num of arr) {
    if (num !== repeatedValue) {
      return num;
    }
  }

  throw new Error('No unique number found');
}

findUniq([1, 1, 1, 2, 1, 1]); // 2
findUniq([0, 0, 0.55, 0, 0]); // 0.55
