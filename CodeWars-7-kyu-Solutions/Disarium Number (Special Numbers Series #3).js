// Disarium number is the number that The sum of its 
// digits powered with their respective positions 
// is equal to the number itself.

// Given a number, Find if it is Disarium or not.

// Number passed is always Positive.
// Return the result as String

function disariumNumber(n) {
    let num = 0;
    let arrNum = [];
    let arr = n.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        arrNum.push(arr[i] ** j);
    }
    for (let i = 0; i < arrNum.length; i++) {
        num += arrNum[i];
    }
    return num == n ? 'Disarium !!' : 'Not !!';
}