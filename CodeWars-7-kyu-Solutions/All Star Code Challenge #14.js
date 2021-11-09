// This Kata is intended as a small challenge for my students
// All Star Code Challenge #14

// Your non-profit company has assigned you the task of 
// calculating some simple statistics on donations. 
// You have an array of integers, representing various 
// amounts of donations your company has been given. 
// In particular, you're interested in the median 
// value for donations.

// The median is the middle number of a sorted list 
// of numbers. If the list is of even length, the 2 
// middle values are averaged.

// Write a function called median() that takes an array
// of integers as an argument and returns the median 
// of those integers.

// Note:
// The sorting step is vital


// Resolve
function median(array) {
    let sorted = array.sort((a, b) => a - b);
    let middleNum = array.length / 2;
    let middleLeft = Math.floor(middleNum);
    let middleRigth = middleLeft + 1;
    return array.length % 2 == 0 ?
        (array[array.length - middleLeft] + array[array.length - middleRigth]) / 2 :
        array[array.length - middleRigth];
}
median([33, 99, 100, 30, 29, 50])

// mediana of whole array
function median(array) {
    let median = 0;
    for (let i = 0; i < array.length; i++) {
        median += array[i];
    }
    return median / array.length;
}
median([3, 2, 1])