/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(text) {
  let highestWord = '';
  let highestScore = 0;

  for (const word of text.split(' ')) {
    let score = 0;

    for (const char of word) {
      score += char.charCodeAt(0) - 96; // Calculate score based on letter positions
    }

    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}

// function high(text) {
//   const words = text.split(' ');

//   const getScore = (word) => {
//     let score = 0;
//     for (const char of word) {
//       score += char.charCodeAt(0) - 96;
//     }
//     return score;
//   };

//   let highestScore = 0;
//   let highestScoringWord = '';

//   for (const word of words) {
//     const score = getScore(word);
//     if (score > highestScore) {
//       highestScore = score;
//       highestScoringWord = word;
//     }
//   }

//   return highestScoringWord;
// }

strictEqual(high('man i need a taxi up to ubud')); //'taxi'
strictEqual(high('what time are we climbing up the volcano')); //'volcano'
strictEqual(high('take me to semynak')); // 'semynak'
strictEqual(high('aa b')); // 'aa'
strictEqual(high('b aa')); // 'b'
strictEqual(high('bb d')); //'bb'
strictEqual(high('d bb')); // 'd'
strictEqual(high('aaa b')); // 'aaa'
