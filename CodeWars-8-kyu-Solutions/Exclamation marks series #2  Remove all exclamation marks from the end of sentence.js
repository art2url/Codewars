// Remove all exclamation marks from the end of sentence.

// Examples:
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

//v2
function remove(s) {
    let reverseText = s.split('').reverse();
    while (reverseText[0] === '!') {
        reverseText.shift()
    }
    return reverseText.reverse().join('')
}

//v1
let remove = (s) => s.replace(/(!+)(?=\d|$)/g, ''); // $ - конец строки; /g - глобальный поиск?
let remove = s => s.replace(/!+$/, ''); // /!+$/ - совпадение ! в конце строки + заменить на '' как второй параметр