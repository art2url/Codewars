/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

export function reverseWords(str: string): string {
  const reversedWords = str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');

  return reversedWords;
}

reverseWords('The quick brown fox jumps over the lazy dog.'); //'ehT kciuq nworb xof spmuj revo eht yzal .god'
reverseWords('apple'); // 'elppa'
reverseWords('a b c d'); // 'a b c d'
reverseWords('  double  spaced  words  '); //'  elbuod  decaps  sdrow  ';
