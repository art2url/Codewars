/*
Task:
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn
Examples:
pattern(5):

1
22
333
4444
55555
pattern(11):

1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111
Hint: Use \n in string to jump to next line
*/

// export function pattern(n: number): string {
//   let output = '';
//   for (let i = 1; i <= n; i++) {
//     output += `\n`;
//     for (let j = 1; j <= i; j++) {
//       output += i;
//     }
//   }
//   console.log(output.slice(1));
//   return output.slice(1);
// }

export function pattern(n: number): string {
  if (n <= 0) return '';

  let output = '';
  for (let i = 1; i <= n; i++) {
    output += `${String(i).repeat(i)}\n`;
  }

  return output.trim();
}

pattern(1); // '1'
pattern(2); // '1\n22'
pattern(3); // '1\n22\n333'
pattern(5); // '1\n22\n333\n4444\n55555'
pattern(-1); //''
