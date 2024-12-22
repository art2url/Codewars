/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/

// function comp(a1, a2) {
//   let allEqual = false;
//   const ifAllEqual = [];

//   if (!a1 || !a2) {
//     return false;
//   } else {
//     ((arrA1, arrA2) => {
//       arrA1.sort((a, b) => a - b);
//       arrA2.sort((a, b) => a - b);
//     })(a1, a2);
//   }

//   for (let i = 0; i < a1.length; i++) {
//     if (Math.pow(a1[i], 2) === a2[i]) {
//       ifAllEqual.push((allEqual = true));
//     } else {
//       ifAllEqual.push((allEqual = false));
//     }
//   }

//   console.log(a1, a2, ifAllEqual);

//   if (ifAllEqual.length === a1.length && ifAllEqual.every((v) => v === true)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// export function comp(a1: number[] | null, a2: number[] | null): boolean {
//   if (!a1 || !a2 || a1.length !== a2.length) {
//     return false;
//   }

//   a1 = a1.slice().sort((a, b) => a - b);
//   a2 = a2.slice().sort((a, b) => a - b);

//   return a1.every((num, index) => num ** 2 === a2[index]);
// }

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!a1 || !a2 || a1.length !== a2.length) {
    return false;
  }

  const sortedA1 = [...a1].sort((a, b) => a - b);
  const sortedA2 = [...a2].sort((a, b) => a - b);

  return sortedA1.every((num, index) => num ** 2 === sortedA2[index]);
}

comp(
  [121, 144, 19, 161, 19, 144, 19, 11],
  [
    11 * 11,
    121 * 121,
    144 * 144,
    19 * 19,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19,
  ]
); // true

comp(
  [121, 144, 19, 161, 19, 144, 19, 11],
  [
    11 * 21,
    121 * 121,
    144 * 144,
    19 * 19,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19,
  ]
); // false
