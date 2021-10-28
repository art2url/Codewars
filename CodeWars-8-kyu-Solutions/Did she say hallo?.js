// You received a whatsup message from an unknown number. 
// Could it be from that girl/boy with a foreign accent you 
// met yesterday evening?

// Write a simple function to check if the string contains 
// the word hallo in different languages.

// These are the languages of the possible people you met 
// the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check 
// if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

function validateHello(greetings) {
    let arrGreetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    let word = greetings.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(' ');
    let result = arrGreetings.filter(i => word.includes(i));
    result.toString() !== '' ? result = true : result = false;
    return result;
}
validateHello('HOmbrE, QUE: HalLo: TRes YoU? TSchusS You wiE LA: wiE doiNg TsChuSs BieN WIE. visTa aRE LA aRE: VIsta')

// for one word
function validateHello(greetings) {
    let arrGreetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    let result = false
    for (let i = 0; i < arrGreetings.length; i++) {
        if (arrGreetings[i] === greetings) {
            result = true
        };
    }
    return result
}
validateHello('ahoj')