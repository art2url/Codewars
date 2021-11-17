// Write a function that accepts two arguments 
// and returns the remainder after dividing the 
// larger number by the smaller number.

// Division by zero should return NaN. 

// Arguments will both be integers: 
// positive, negative, or neutral (0);

let remainder = (a, b) => a < b ? b % a : a % b;
remainder(17, 5)