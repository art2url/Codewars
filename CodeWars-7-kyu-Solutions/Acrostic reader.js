// Write a program that reads an acrostic to identify
// the "hidden" word. Specifically, your program will 
// receive a list of words (reprensenting an acrostic) 
// and will need to return a string corresponding 
// to the word that is spelled out by taking 
// the first letter of each word in the acrostic.

function readOut(acrostic) {
    return acrostic.map((acrostic) =>
        acrostic[0]).join('')
}
readOut(['Jolly', 'Amazing', 'Courteous', 'Keen'])