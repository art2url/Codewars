/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1
*/

export function sameCase(a: string, b: string): number {
  let lowerCase = /[a-z]/;
  let upperCase = /[A-Z]/;
  let nonText = /[^A-Za-z]/g;

  if (a.match(nonText) || b.match(nonText)) {
    return -1;
  }

  if (
    a.match(lowerCase) === b.match(lowerCase) ||
    a.match(upperCase) === b.match(upperCase)
  ) {
    return 1;
  } else {
    return 0;
  }
}

sameCase('a', 'g'); // 1
sameCase('A', 'C'); // 1
sameCase('b', 'G'); // 0
sameCase('B', 'g'); // 0
sameCase('0', '?'); // -1
