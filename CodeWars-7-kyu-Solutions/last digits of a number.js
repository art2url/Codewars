// Your job is to implement a function which 
// returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.

function lastDigit(n, d) {
    let arr = n.toString().split('')
    if (d > arr.length) {
        return arr.map(Number);
    } else if (d <= 0) {
        arr = [];
    } else if (arr.length > 0) {
        arr.reverse().splice(d)
        return arr.reverse().map(Number)
    }
    return arr;
}