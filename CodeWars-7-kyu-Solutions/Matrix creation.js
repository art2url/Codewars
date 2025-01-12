/*
Create an identity matrix of the specified size ( >= 0 ).

Some examples:
(1)  => [[1]]
(2) => [[1,0], [0,1]]
(5) => [[1,0,0,0,0], [0,1,0,0,0], [0,0,1,0,0], [0,0,0,1,0], [0,0,0,0,1]]   
*/

function getMatrix(number) {
  if (number === 0) return [];

  const result = [];

  for (let i = 0; i < number; i++) {
    const row = [];
    for (let j = 0; j < number; j++) {
      row.push(i === j ? 1 : 0);
    }
    result.push(row);
  }

  return result;
}

// function getMatrix(number) {
//   if (number === 0) return [];

//   return Array.from({ length: number }, (_, i) =>
//     Array.from({ length: number }, (_, j) => (i === j ? 1 : 0))
//   );
// }

// console.log(getMatrix(5));

getMatrix(0); // []
getMatrix(1); // [[1]]
getMatrix(2); // [[1, 0], [0, 1]]
getMatrix(5); // [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]
