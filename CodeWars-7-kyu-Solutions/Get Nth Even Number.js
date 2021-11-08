// Get Nth Even Number1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

function nthEven(n) {
    let evenArr = [];
    for (let i = 0; i < n * 2; i++) {
        if (i % 2 == 0) {
            evenArr.push(i)
        }
    }
    return evenArr[evenArr.length - 1]
}
nthEven(100)