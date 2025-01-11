/*
Take a string and return a hash with all the ascii values of the characters in the string. Returns nil (Ruby), None (Python) or null (JavaScript) if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.
*/

// function charToAscii(string) {
//   if (!string) return null;
//   let result = {};

//   const removeNonAlphabetical = string.replace(/[^A-Za-z]/g, '');
//   const allUnique = new Set(removeNonAlphabetical);

//   if ([...allUnique].length === 0) return null;

//   for (let symbol of [...allUnique]) {
//     result[symbol] = symbol.charCodeAt(0);
//   }

//   console.log(result);
//   return result;
// }

function charToAscii(string) {
  if (!string) return null;

  const result = {};
  const uniqueAlphabeticalChars = [
    ...new Set(string.replace(/[^A-Za-z]/g, '')),
  ];

  if (uniqueAlphabeticalChars.length === 0) return null;

  for (const char of uniqueAlphabeticalChars) {
    result[char] = char.charCodeAt(0);
  }

  return result;
}

charToAscii(''); // null
charToAscii('.'); // null
charToAscii('a'); // { a: 97 }
charToAscii('aaa'); // { a: 97 }
charToAscii('hello world'); // { h: 104, e: 101, l: 108, o: 111, w: 119, r: 114, d: 100 }
charToAscii('ABaa ^'); // { A: 65, B: 66, a: 97 }
