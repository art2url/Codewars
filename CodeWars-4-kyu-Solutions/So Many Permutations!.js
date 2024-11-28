/*
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!
*/

function permutations(string) {
  const uniquePermutations = new Set();

  function generatePermutations(current, remaining) {
    if (!remaining) {
      uniquePermutations.add(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const nextChar = remaining[i];
      const restChars = remaining.slice(0, i) + remaining.slice(i + 1);
      generatePermutations(current + nextChar, restChars);
    }
  }

  generatePermutations('', string);

  return Array.from(uniquePermutations);
}

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
