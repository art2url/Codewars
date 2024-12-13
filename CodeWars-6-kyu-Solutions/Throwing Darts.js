/*
Scoring specifications:

0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5
If all radii are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

An empty array should return 0.

Examples:
scoreThrows( [1, 5, 11] )    =>  15
scoreThrows( [15, 20, 30] )  =>  0
scoreThrows( [1, 2, 3, 4] )  =>  140
*/

function scoreThrows(radii) {
  if (radii.length === 0) return 0;

  let score = 0;
  let allUnderFive = true;

  for (const rad of radii) {
    if (rad < 5) {
      score += 10;
    } else if (rad <= 10) {
      score += 5;
      allUnderFive = false;
    } else {
      allUnderFive = false;
    }
  }

  if (allUnderFive) score += 100;

  console.log(score);
  return score;
}

scoreThrows([1, 5, 11]); // 15
scoreThrows([15, 20, 30, 31, 32, 44, 100]); // 0
scoreThrows([1, 2, 3, 4]); // 140
scoreThrows([]); // 0, 'Empty list'
scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 65
scoreThrows([0, 5, 10, 10.5, 4.5]); // 30
