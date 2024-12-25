/*
Task:
You have to write a function pattern which creates the following pattern up to n/2 number of lines.

If n <= 1 then it should return "" (i.e. empty string).
If any odd number is passed as argument then the pattern should last up to the largest even number which is smaller than the passed odd number.
Examples:
n = 8:

22
4444
666666
88888888
n = 5:

22
4444
Note: There are no spaces in the pattern.

Hint: Use \n in string to jump to next line.
*/

function pattern(n) {
  if (n <= 0) return '';

  const evenNumbers = [...Array(n + 1).keys()].filter(
    (num) => num % 2 === 0 && num > 0
  );

  const rows = evenNumbers.map((num) => String(num).repeat(num));

  return rows.join('\n');
}

pattern(2); // '22'
pattern(1); // ''
pattern(5); // '22\n4444'
pattern(0); // ''
pattern(-25); // ''
