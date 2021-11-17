// Write a function that accepts an array of 10 
// integers (between 0 and 9), that returns a string 
// of those numbers in the form of a phone number.

// The returned format must be correct in order 
// to complete this challenge.
// Don't forget the space after the closing parentheses!

//v1
function createPhoneNumber(numbers) {
    let sprite = '(xxx) xxx-xxxx';
    numbers.forEach(item => {
        sprite = sprite.replace('x', item);
    });
    return sprite;
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// v2
function createPhoneNumber(numbers) {
    return (`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`)
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])