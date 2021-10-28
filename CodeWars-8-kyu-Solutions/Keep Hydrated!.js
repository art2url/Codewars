// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated,
// he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to 
// return the number of litres Nathan will drink, 
// rounded to the smallest value.


//v1
let litres = time => Math.floor(time * 0.5);

//v2
function litres(time) {
    let litresPerHour = 0.5;
    let waterAmount = Math.floor(time * litresPerHour);
    return waterAmount;
}