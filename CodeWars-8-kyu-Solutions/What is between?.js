//Complete the function that takes two integers (a, b, where a < b) 
//and return an array of all integers between the input parameters, including them.

function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr
}