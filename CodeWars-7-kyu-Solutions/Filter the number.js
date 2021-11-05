// Oh no! The number has been mixed up with the text. 
// Your goal is to retreive the number from the text, 
// can you return the number back to it's 
// original state?

// Your task is to return a number from a string.

// You will be given a string of numbers and letters 
// mixed up, you have to return all the numbers in 
// that string in the order they occur.

let FilterString = value => {
    let pattern = /[0-9]/g;
    return Number(value.match(pattern).join(''));
}

FilterString("a1b2c3")