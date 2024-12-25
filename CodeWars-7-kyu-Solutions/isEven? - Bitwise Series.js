/*
Is the number even?
If the numbers is even return true. If it's odd, return false.

Oh yeah... the following symbols/commands have been disabled!

use of %
use of .even? in Ruby
use of mod in Python
*/

const isEven = function (n) {
  const result = Math.floor(n / 2) * 2 === n;

  return result;
};

isEven(2); // true
isEven(3); // false
isEven(14); // true
isEven(15); // false
isEven(26); // true
isEven(27); // false
