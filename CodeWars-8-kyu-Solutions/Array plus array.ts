/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. 
I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
//   const allEl = [...arr1, ...arr2];
//   const res = allEl.reduce((acc, item) => acc + item, 0);

//   return res;
// };

export const arrayPlusArray = (arr1: number[], arr2: number[]): number =>
  [...arr1, ...arr2].reduce((acc, item) => acc + item, 0);

arrayPlusArray([1, 2, 3], [4, 5, 6]); // 21
arrayPlusArray([-1, -2, -3], [-4, -5, -6]); // -21
arrayPlusArray([0, 0, 0], [4, 5, 6]); // 15
arrayPlusArray([100, 200, 300], [400, 500, 600]); // 2100
arrayPlusArray([0, 0, 0], [0, 0, 0]); // 0
arrayPlusArray([1, 2, 3, 4, 5, 6, 7], [10, 20, 30, 40, 50]); // 178
arrayPlusArray([-1, -2, -3, -4], [10]); // 0
