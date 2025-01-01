/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// function isIsogram(str) {
//   const uniqueLetters = new Set(str.toLowerCase());
//   return [...uniqueLetters].length !== str.length ? true : false;
// }

isIsogram = (str) =>
  [...new Set(str.toLowerCase())].length !== str.length ? false : true;

isIsogram('Dermatoglyphics'); // true;
isIsogram('isogram'); // true;
isIsogram('aba'); // false,
isIsogram('moOse'); // false,
isIsogram('isIsogram'); // false;
isIsogram(''); // true
