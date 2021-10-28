// Fellow code warrior, we need your help! We seem 
// to have lost one of our sequence elements, 
// and we need your help to retrieve it!

// Our sequence given was supposed to contain all 
// of the integers from 0 to 9 (in no particular order), 
// but one of them seems to be missing.

// Write a function that accepts a sequence of unique 
// integers between 0 and 9 (inclusive), 
// and returns the missing element.

function getMissingElement(superImportantArray) {
    let sortedArr = superImportantArray.sort();
    let correctArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < correctArr.length; i++) {
        if (correctArr[i] !== sortedArr[i]) {
            return i;
        }
    }
}