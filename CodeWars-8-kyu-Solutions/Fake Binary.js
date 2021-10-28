// Given a string of digits, you should replace 
// any digit below 5 with '0' and any digit 5 
// and above with '1'. Return the resulting string.

function fakeBin(x) {
    let arr = String(x).split('').map(Number);
    for (var i = 0; i < arr.length; i++)
        if (arr[i] < 5) {
            arr[i] = 0;
        } else if (arr[i] <= 9) {
        arr[i] = 1;
    }
    return arr.join('').toString();
}
fakeBin("45385593107843568")