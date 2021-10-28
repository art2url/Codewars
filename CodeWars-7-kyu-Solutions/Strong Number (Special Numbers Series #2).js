// Strong number is the number that the sum of 
// the factorial of its digits is equal 
// to number itself.

// Given a number, Find if it is Strong or not.

function strong(n) {
    let arr = n.toString().split('');
    let result = [];
    let sumResult = 0;

    for (let i = 0; i < arr.length; i++) {
        result.push(getFactorial(arr[i]));
    }

    for (let j = 0; j < result.length; j++) {
        sumResult += result[j];
    }

    function getFactorial(nums) {
        if (nums == 0 || nums == 1) return 1;
        return nums * getFactorial(nums - 1);
    }

    return (n === sumResult) ? "STRONG!!!!" : "Not Strong !!";
}

strong(11)