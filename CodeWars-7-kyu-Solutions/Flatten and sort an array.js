// Challenge:
// Given a two-dimensional array of integers, return 
// the flattened version of the array with all 
// the integers in the sorted (ascending) order.

// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], 
// your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:
// Please, keep in mind, that JavaScript is by default sorting 
// objects alphabetically.


// works fine
"use strict";

function flattenAndSort(array) {
    const arrayFull = [].concat(...array)
    arrayFull.sort((a, b) => a - b);
    return arrayFull;
}
flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5]
])

// doesn't works with old version of node
"use strict";

function flattenAndSort(array) {
    const arrayAll = array.flat();
    arrayAll.sort((a, b) => a - b);
    return arrayAll;
}

flattenAndSort([
    [1, 3, 5],
    [100],
    [2, 4, 6]
])