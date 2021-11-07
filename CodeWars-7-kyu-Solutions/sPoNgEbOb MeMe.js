// Remember the spongebob meme that is meant to make fun 
// of people by repeating what they say in a mocking way?

// You need to create a function that converts the input 
// into this format, with the output being the same 
// string expect there is a pattern of uppercase 
// and lowercase letters.

function spongeMeme(sentence) {
    return sentence.split('').map((v, i) => i % 2 ? v.toLowerCase() : v.toUpperCase()).join('');
}
spongeMeme("colored teens cant Be successful in tech");