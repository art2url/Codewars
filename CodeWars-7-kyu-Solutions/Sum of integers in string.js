// Your task in this kata is to implement a function that calculates 
// the sum of the integers inside a string. For example, in the string 
// "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 
// the sum of the integers is 3635.

// Note: only positive integers will be tested.

// v1 
const sumOfIntegersInString = (s) => {
    const numbers = s.match(/\d+/g).map(Number);
    const count = numbers.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    return count;
}

// v2
function sumOfIntegersInString(s) {
    let count = 0;
    let numbers = s.match(/\d+/g);
    numbers.forEach(function(elem) {
        count += +(elem)
    });
    return count;
}

// v3
function sumOfIntegersInString(s) {
    const arrOfString = s.match(/\d+/g);
    let count = 0;
    for (let i = 0; i < arrOfString.length; i++) {
        count += +(arrOfString[i])
    }
    return count;
}

sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
)