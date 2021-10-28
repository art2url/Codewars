// Given a random non-negative number, 
// you have to return the digits of this 
// number within an array in reverse order.

function digitize(n) {
    let arr = String(n).split('').reverse()
    return arr.map(Number)
}

digitize(35231)