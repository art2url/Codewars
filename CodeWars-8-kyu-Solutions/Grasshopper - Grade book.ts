/*
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

export function getGrade(a: number, b: number, c: number): string {
  const average = (a + b + c) / 3;

  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

getGrade(95, 90, 93); // 'A'
getGrade(82, 85, 87); // 'B'
getGrade(70, 70, 70); // 'C'
getGrade(65, 70, 59); // 'D'
getGrade(44, 55, 52); // 'F'
