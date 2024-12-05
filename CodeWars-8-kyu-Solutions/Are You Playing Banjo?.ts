/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

export function areYouPlayingBanjo(name: string): string {
  return name[0].toLowerCase() === 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

areYouPlayingBanjo('Adam'); // 'Adam does not play banjo'
areYouPlayingBanjo('Paul'); // 'Paul does not play banjo'
areYouPlayingBanjo('Ringo'); // 'Ringo plays banjo'
areYouPlayingBanjo('bravo'); // 'bravo does not play banjo'
areYouPlayingBanjo('rolf'); // 'rolf plays banjo'
