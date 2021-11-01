// In this Kata, you will be given a string that may have mixed 
// uppercase and lowercase letters and your task is to convert 
// that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase 
// letters, convert the string to lowercase.

// solve("coDe") = "code". Lowercase characters > uppercase. 
// solve("CODe") = "CODE". Uppercase characters > lowecase. 
// solve("coDE") = "code". Upper == lowercase.


// v1
function solve(s) {
    let arr = s.split('');
    let test = s.toUpperCase();
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == test[i]) {
            count++;
        }
    }
    return count > arr.length / 2 ? s.toUpperCase() : s.toLowerCase();
}

// v2
function solve(s) {
    let arr = s.split('');
    let test = s.toUpperCase();
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == test[i]) {
            count++;
        }
    }
    if (count > (arr.length) / 2) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase();
    }
}