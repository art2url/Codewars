// Write function RemoveExclamationMarks which 
// removes all exclamation marks from a given string.

// v2
function removeExclamationMarks(s) {
    return s.split('!').join('');
}

// v1
function removeExclamationMarks(s) {
    let text = s.split("")
    text = text.filter(function(item) {
        return item !== "!"
    })
    return text.join("")
}
removeExclamationMarks("Hello Wo!!rld!!")