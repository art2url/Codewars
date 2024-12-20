/*
Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

For example,

ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17] // [7,70,17]

Don't worry about bad input, you will always receive a finite list of integers.
*/

// const filterLucky = (x) => {
//   const haveSeven = /.*7.*/;
//   const result = x.filter((item) => item.toString().match(haveSeven));

//   return result;
// };

const filterLucky = (x) => {
  const haveSeven = /7/;
  const result = x.filter((item) => item.toString().match(haveSeven));

  return result;
};

filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]); // [7, 70, 17]
filterLucky([71, 9907, 69]); // [71, 9907]
