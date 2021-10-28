// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space 
// in between them.

// The output should be two capital letters with a 
// dot separating them.

// It should look like this:

// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
    let firstLetter = name.toUpperCase().split(' ').map(a => a[0])
    return firstLetter[0] + `.` + firstLetter[1]
}
abbrevName("Evan Cole")