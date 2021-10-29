// Write a function that accepts two arguments and 
// generates a sequence containing the integers 
// from the first argument to the second inclusive.

// Pair of integers greater than or equal to 0. 
// The second argument will always be greater than 
// or equal to the first.

// Example
// generateIntegers(2, 5) // --> [2, 3, 4, 5]

function generateIntegers(m, n) {
    let arr = [];
    for (let i = m; i < n + 1; i++) {
        arr.push(i);
    }
    return arr;
}
generateIntegers(2, 5)