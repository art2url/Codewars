// Define a function that removes duplicates from 
// an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

//v1
let distinct = (a) => [...new Set(a)];

//v2
function distinct(a) {
    return [...new Set(arr)];
}