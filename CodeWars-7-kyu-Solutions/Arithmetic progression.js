/*
In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
*/

function arithmeticSequenceElements(a, d, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(a + i * d);
  }

  return result.join(', ');
}

arithmeticSequenceElements(1, 2, 5); // '1, 3, 5, 7, 9';
arithmeticSequenceElements(1, 0, 5); // '1, 1, 1, 1, 1';
arithmeticSequenceElements(1, -3, 10); // '1, -2, -5, -8, -11, -14, -17, -20, -23, -26';
arithmeticSequenceElements(100, -10, 10); //'100, 90, 80, 70, 60, 50, 40, 30, 20, 10';
