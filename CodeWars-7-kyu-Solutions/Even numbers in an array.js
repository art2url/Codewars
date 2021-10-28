// Given an array of digitals numbers, return a new array of length
// number containing the last even numbers from the original array 
// (in the same order). The original array will be not empty 
// and will contain at least "number" even numbers.

// v1
let evenNumbers = (array, number) => array.filter(n => n % 2 == 0).slice(-number);

// v2
function evenNumbers(array, number) {
    return array.filter(n => n % 2 == 0).slice(-number);
}

// v3
function evenNumbers(array, number) {
    let evenArr = array.filter(n => n % 2 == 0).reverse();
    evenArr.length = number;
    return evenArr.reverse();
}