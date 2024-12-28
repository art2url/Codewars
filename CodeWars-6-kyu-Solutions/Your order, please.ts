/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
 */

export function order(words: string): string {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const wordsSplit = words.split(' ');
  const wordsOrder = [];

  if (words.length === 0) {
    return words;
  }

  for (const number of numbers) {
    for (const word of wordsSplit) {
      if (word.includes(number)) {
        wordsOrder.push(word);
      }
    }
  }

  return wordsOrder.join(' ');
}

// export function order(words: string): string {
//   if (words.length === 0) {
//     return words;
//   }

//   return words
//     .split(' ')
//     .sort((a, b) => {
//       const numA = a.match(/\d/)[0];
//       const numB = b.match(/\d/)[0];
//       return numA - numB;
//     })
//     .join(' ');
// }

order('is2 Thi1s T4est 3a'); // 'Thi1s is2 3a T4est'
order('4of Fo1r pe6ople g3ood th5e the2'); // 'Fo1r the2 g3ood 4of th5e pe6ople'
order(''); // ''
