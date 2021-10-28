//Create a function that accepts 2 string arguments and 
//returns an integer of the count of occurrences 
//the 2nd argument is found in the first one.

//If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter) {
    let count = 0;
    for (let char of str) {
        if (char == letter) {
            count += 1;
        }
    }
    return count
}

function strCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count
}

strCount("hello", "l")