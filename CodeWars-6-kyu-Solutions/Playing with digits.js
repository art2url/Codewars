/*
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
(a \cdot p + b \cdot p^1 + c \cdot p^2 + d \cdot p^3 + \ldots) = n \cdot k

If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k
n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

function digPow(n, p) {
  const arrOfNums = n.toString().split('');
  let result = 0;

  for (const num of arrOfNums) {
    result += (+num) ** p;
    p++;
  }

  if (result % n === 0) {
    return result / n;
  } else {
    return -1;
  }
}

// function digPow(n, p) {
//   const sum = n
//     .toString()
//     .split('')
//     .reduce((acc, digit) => acc + Math.pow(+digit, p++), 0);

//   return sum % n === 0 ? sum / n : -1;
// }

digPow(89, 1); // 1
digPow(92, 1); // -1
digPow(46288, 3); // 51
