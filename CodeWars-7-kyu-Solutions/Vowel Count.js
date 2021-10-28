// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata 
// (but not y).

// The input string will only consist of lower case letters 
// and/or spaces.

// v1 regexp
function getCount(str) {
    let vowelsArr = str.match(/[aeiou]/gi);
    return vowelsArr ? vowelsArr.length : 0;
}
getCount("abracadabra")

// v2
function getCount(str) {
    let vowelsCount = 0;
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < vowelsArr.length; j++) {
            if (strArr[i] == vowelsArr[j]) {
                vowelsCount++;
            }
        }
    }
    return vowelsCount;
}
getCount("abracadabra")