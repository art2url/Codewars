// Complete the function that calculates the area 
// of the red square, when the length of the circular 
// arc A is given as the input. Return the result 
// rounded to two decimals.

// Note: use the π value provided in your language 
// (Math.PI, M_PI, math.pi, etc)


function squareArea(A) {
    let radius = A / (2 * Math.PI * (90 / 360));
    let area = Math.pow(radius, 2);
    return Number(area.toFixed(2));
}
squareArea(2)