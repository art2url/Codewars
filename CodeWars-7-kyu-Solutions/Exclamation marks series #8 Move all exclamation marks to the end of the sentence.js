// Move all exclamation marks to the end of the sentence
// remove("Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!!"
// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

// v1 regexp
function remove(s) {
    return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
}

// v2
function remove(s) {
    let string = s.split('!');
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '!') {
            counter++;
        }
    }

    for (let j = 0; j < counter; j++) {
        string.push('!');
    }

    return string.join('');
}

remove("Hi! Hi!! Hi!")