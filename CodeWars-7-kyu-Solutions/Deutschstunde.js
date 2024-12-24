/*
Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

each noun containing less than 2 vowels has the article "das"
each noun containing 2/3 vowels has the article "die"
each noun containing more than 3 vowels has the article "der"
Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

(This Kata is a joke, there is no such grammar rule!)
*/

// function derDieDas(wort) {
//   let vowels = ['a', 'ä', 'e', 'i', 'o', 'ö', 'u', 'ü'];
//   let counter = 0;

//   for (let i = 0; i < wort.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (wort[i].toLowerCase() === vowels[j]) {
//         counter++;
//       }
//     }
//   }

//   if (counter < 2) {
//     console.log(`${'das'} ${wort}`);
//     return `${'das'} ${wort}`;
//   }
//   if (counter === 2 || counter === 3) {
//     console.log(`${'die'} ${wort}`);
//     return `${'die'} ${wort}`;
//   }
//   if (counter > 3) {
//     console.log(`${'der'} ${wort}`);
//     return `${'der'} ${wort}`;
//   }
// }

function derDieDas(wort) {
  const vowels = 'aäeioöuü';
  let counter = 0;

  for (const char of wort.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++;
    }
  }

  const article = counter < 2 ? 'das' : counter <= 3 ? 'die' : 'der';
  const result = `${article} ${wort}`;

  return result;
}

derDieDas('OOOpa'); // 'der OOOpa',
derDieDas('Suppenhuhn'); // 'die Suppenhuhn',
derDieDas('Geheimdienst'); // 'der Geheimdienst',
derDieDas('Ofenkartoffel'); // 'der Ofenkartoffel',
derDieDas('Fisch'); // 'das Fisch',
derDieDas('Knödel'); // 'die Knödel',
derDieDas('Leberkaassemmi'); // 'der Leberkaassemmi'
