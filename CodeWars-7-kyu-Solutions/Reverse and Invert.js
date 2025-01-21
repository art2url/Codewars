/*
Reverse and invert all integer values in a given list.

[1,12,'a',3.4,87,99.9,-42,50,5.6] --> [-1,-21,-78,24,-5]
Remove all types other than integer.
*/

function reverseInvert(array) {
  const integers = array.filter((el) => Number.isInteger(el));

  const transformed = integers.map((num) => {
    const reversed = Math.abs(num).toString().split('').reverse().join('');
    return parseInt(reversed, 10) * -Math.sign(num);
  });

  return transformed;
}

reverseInvert([1, 2, 3, 4, 5]); // [-1, -2, -3, -4, -5]
reverseInvert([-10]); // [1]
reverseInvert([-9, -18, 99]); // [9, 81, -99]
reverseInvert([1, 12, 'a', 3.4, 87, 99.9, -42, 50, 5.6]); // [-1, -21, -78, 24, -5]
reverseInvert([]); // []
