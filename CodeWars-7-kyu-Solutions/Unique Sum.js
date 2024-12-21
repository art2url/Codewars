/*
Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

For example:

[ 1, 2, 3] ==> 6

[ 1, 3, 8, 1, 8] ==> 12

[ -1, -1, 5, 2, -7] ==> -1

[] ==> None
*/

// function uniqueSum(lst) {
//   if (lst.length === 0) {
//     return null;
//   }

//   const set = new Set(lst);
//   const res = [...set].reduce(acc, (el) => acc + el, 0);

//   return res;
// }

function uniqueSum(lst) {
  return lst.length === 0
    ? null
    : [...new Set(lst)].reduce((acc, el) => acc + el, 0);
}

uniqueSum([1, 2, 3]); // 6
uniqueSum([1, 3, 8, 1, 8]); // 12
uniqueSum([-1, -1, 5, 2, -7]); // -1
uniqueSum([]); // null
