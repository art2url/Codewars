/*
Error Handling is very important in coding and seems to be overlooked or not implemented properly.

#Task
Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. Handle invalid input and don't forget to return valid ones.

#Input
The input is any random string. You must then discern what are vowels and what are consonants and sum for each category their total occurrences in an object. However you could also receive inputs that are not strings. If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)

Example:
Input: getCount('test')
Output: {vowels:1,consonants:3}

Input: getCount('tEst')
Output: {vowels:1,consonants:3}

Input getCount('    ')
Output: {vowels:0,consonants:0}

Input getCount()
Output: {vowels:0,consonants:0}
*/

function getCount(words) {
  const vowels = 'aeiou';
  const result = {
    vowels: 0,
    consonants: 0,
  };

  if (typeof words !== 'string') {
    return result;
  }

  for (const letter of words.replace(/\s/g, '').toLowerCase()) {
    if (vowels.includes(letter)) {
      result.vowels++;
    } else if (letter >= 'a' && letter <= 'z') {
      result.consonants++;
    }
  }

  return result;
}

getCount('HEre Is sOme text   '); // { vowels: 6, consonants: 8 }
getCount('aeiou'); // { vowels: 5, consonants: 0 }
getCount('To be a Codewarrior or not to be'); // { vowels: 12, consonants: 13 }
getCount(['To Kata or not to Kata']); // { vowels: 0, consonants: 0 }
getCount(); // { vowels: 0, consonants: 0 }
getCount(undefined); // { vowels: 0, consonants: 0 }
