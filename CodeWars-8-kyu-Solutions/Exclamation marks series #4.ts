/*
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"
*/

// export function remove(s: string): string {
//   const result = [];

//   for (const el of s) {
//     if (el != '!') {
//       result.push(el);
//     }
//   }

//   return result.join('') + '!';
// }

export function remove(s: string): string {
  return s.split('!').join('') + '!';
}

remove('Hi!'); // 'Hi!'
remove('Hi!!!'); // 'Hi!'
remove('!Hi'); // 'Hi!'
remove('!Hi!'); // 'Hi!'
remove('Hi! Hi!'); // 'Hi Hi!'
remove('Hi'); // 'Hi!'
