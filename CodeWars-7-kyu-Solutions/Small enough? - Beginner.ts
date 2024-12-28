/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

export function smallEnough(a: number[], limit: number): boolean {
  return a.every((num) => num <= limit);
}

smallEnough([66, 101], 200); // true;
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100); // false;
smallEnough([101, 45, 75, 105, 99, 107], 107); // true;
smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120); // true;
smallEnough([1, 1, 1, 1, 1, 2], 1); // false;
smallEnough([78, 33, 22, 44, 88, 9, 6], 87); // false;
smallEnough([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); // true;
smallEnough([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], 12); //true;
