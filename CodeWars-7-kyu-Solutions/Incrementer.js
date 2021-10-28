// Given an input of an array of digits, return the array
// with each digit incremented by its position in the array: 
// the first digit will be incremented by 1, the second digit by 2, 
// etc. Make sure to start counting your positions from 1 (and not 0).

// Your result can only contain single digit numbers, 
// so if adding a digit with it's position gives you 
// a multiple-digit number, only the last digit 
// of the number should be returned.

// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry 
// about checking that

// v1
function incrementer(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push((nums[i] + i + 1) % 10);
    }
    return arr;
}
incrementer([4, 6, 7, 1, 3])

// v2
function incrementer(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i] + i + 1);
    }
    let fixed = arr.map(item => item >= 10 ? Number(item.toString().substring(1)) : item);
    return fixed;
}
incrementer([4, 6, 7, 1, 3])