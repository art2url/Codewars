/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// function accum(s) {
//   const divider = '-';
//   const arrOfMumblings = [];
//   const newArrOfMumblings = [];

//   for (let i = 0; i < s.length; i++) {
//     arrOfMumblings.push(s[i].toUpperCase());
//     for (let j = 0; j < i; j++) {
//       arrOfMumblings.push(s[i].toLowerCase());
//     }
//   }

//   for (const el of arrOfMumblings) {
//     if (arrOfMumblings[0] != el && el === el.toUpperCase()) {
//       newArrOfMumblings.push(`${divider}` + el);
//     } else {
//       newArrOfMumblings.push(el);
//     }
//   }

//   return newArrOfMumblings.join('');
// }

export function accum(s: string): string {
  return s
    .split('')
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-');
}

accum('abcd'); // "A-Bb-Ccc-Dddd"
accum('ZpglnRxqenU'); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
accum('NyffsGeyylB'); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
accum('MjtkuBovqrU'); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
accum('EvidjUnokmM'); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
accum('HbideVbxncC'); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
