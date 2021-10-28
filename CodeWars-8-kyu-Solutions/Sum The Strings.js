// Create a function that takes 2 nonnegative 
// integers in form of a string as an input, 
// and outputs the sum (also as a string):

function sumStr(a, b) {
    let x = Number(a);
    let y = Number(b);
    return (x + y) > 0 ? String(x + y) : `0`
}