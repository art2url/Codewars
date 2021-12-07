// Given two integers a and b, which can be positive 
// or negative, find the sum of all the integers 
// between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
    let arr = [];
    let count = 0;

    if (a < b) {
        for (let i = a; i <= b; i++) {
            arr.push(i);
            count = arr.reduce((a, b) => a + b);
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            arr.push(i);
            count = arr.reduce((a, b) => a + b);
        }
    } else if (a == b) {
        count = a;
    }
    return count;
}

getSum(-146, -410)