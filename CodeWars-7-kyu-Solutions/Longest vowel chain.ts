/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/

export function solve(s: string): number {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let currentSequence = 0;
  let maxSequence = 0;

  for (const letter of s) {
    if (vowels.includes(letter)) {
      currentSequence++;
      if (currentSequence > maxSequence) {
        maxSequence = currentSequence;
      }
    } else {
      currentSequence = 0;
    }
  }
  return maxSequence;
}

solve('codewarriors'); // 2
solve('suoidea'); // 3
solve('ultrarevolutionariees'); // 3
solve('strengthlessnesses'); // 1
solve('cuboideonavicuare'); // 2
solve('chrononhotonthuooaos'); // 5
solve('iiihoovaeaaaoougjyaw'); // 8
