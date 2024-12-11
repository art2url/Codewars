/*
Description:
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

export function findSmallestInt(args: number[]): number {
  let smallest = args[0];
  for (const num of args) {
    if (num < smallest) {
      smallest = num;
    }
  }

  return smallest;
}

findSmallestInt([78, 56, 232, 12, 8]); // 8
findSmallestInt([78, 56, 232, 12, 18]); // 12
findSmallestInt([78, 56, 232, 412, 228]); // 56
findSmallestInt([78, 56, 232, 12, 0]); // 0
findSmallestInt([1, 56, 232, 12, 8]); // 1
