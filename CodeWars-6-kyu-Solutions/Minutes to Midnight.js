/*
Teemo is not really excited about the new year's eve, but he has to celebrate it with his friends anyway.

He has a really big passion about programming and he wants to be productive till midnight. He wants to know how many minutes he has left to work on his new project.
He doesn't want to look on the clock all the time, so he thought about a function, which returns him the number of minutes.

Can you write him a function, so he can stay productive?

The function minutesToMidnight(d) will take a date object as parameter. Return the number of minutes in the following format:

"x minute(s)"

You will always get a date object with of today with a random timestamp.
You have to round the number of minutes.
Milliseconds doesn't matter!


Some examples:

10.00 am => "840 minutes"
23.59 pm => "1 minute"

*/

// function minutesToMidnight(d) {
//   // const hours = d.getHours();
//   // const minutes = d.getMinutes();
//   // const seconds = d.getSeconds();

//   const totalMinutes = d.getHours() * 60 + d.getMinutes();

//   const result = 1440 - totalMinutes;

//   console.log(result);

//   return result <= 1 ? `${result} minute` : `${result} minutes`;
// }

function minutesToMidnight(d) {
  const minutesPassed =
    d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60;
  const minutesToMidnight = Math.round(1440 - minutesPassed);

  return `${minutesToMidnight} minute${minutesToMidnight === 1 ? '' : 's'}`;
}

const dateBeforeMidnight = new Date(new Date().setHours(23, 59, 0, 0));
minutesToMidnight(dateBeforeMidnight); // '1 minute'

const fullDay = new Date(new Date().setHours(0, 0, 0, 0));
minutesToMidnight(fullDay); // '1440 minutes'
