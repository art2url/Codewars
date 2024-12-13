/*
Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold"
*/

function longestWord(stringOfWords) {
  const wordsArr = stringOfWords.split(' ');
  let longest = '';

  for (const word of wordsArr) {
    if (word.length >= longest.length) {
      longest = word;
    }
  }

  return longest;
}

longestWord('red white blue'); // "white"
longestWord('red blue gold'); // "gold"
longestWord('one two three'); // 'three'
longestWord('a b c d e fgh'); // 'fgh'
