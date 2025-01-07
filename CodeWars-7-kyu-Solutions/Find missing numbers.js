/*
You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:
[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]
*/

function findMissingNumbers(arr) {
  if (arr.length === 0) return [];

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const missingNumbers = [];
  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

findMissingNumbers([-3, -2, 1, 4]); // [-1, 0, 2, 3]
findMissingNumbers([-1, 0, 1, 2, 3, 4]); //[]
findMissingNumbers([]); //[]
