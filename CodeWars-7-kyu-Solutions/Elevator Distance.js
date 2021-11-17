// Imagine you start on the 5th floor of a building, 
// then travel down to the 2nd floor, then back up 
// to the 8th floor. You have travelled a total of 
// 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors 
// you must reach by elevator, return an integer 
// representing the total distance travelled for 
// visiting each floor in the array in order.

function elevatorDistance(array) {
    let sum = 0;

    for (let i = 0; i < array.length - 1; i++) {
        sum += Math.abs(array[i] - array[i + 1]);
    }

    return sum;
}
elevatorDistance([5, 2, 8])