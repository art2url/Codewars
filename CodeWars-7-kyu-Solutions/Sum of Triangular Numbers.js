// Your task is to return the sum of Triangular Numbers 
// up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers 
// (1, 3, 6, 10, 15, etc.) obtained by continued summation 
// of the natural numbers 1, 2, 3, 4, 5, etc."

function sumTriangularNumbers(n) {
    let triangleSum = 0;
    for (let i = 0; i <= n; i++) {
        triangleSum += (i * (i + 1)) / 2
    }
    return triangleSum;
}
sumTriangularNumbers(4)