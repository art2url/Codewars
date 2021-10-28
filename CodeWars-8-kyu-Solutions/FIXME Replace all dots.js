// The code provided is supposed replace all the dots "."
// in the specified String str with dashes "-"
// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

var replaceDots = str => str.replace(/[.]/g, '-');

// other regexp
let remove = s => s.replace(/!+$/, "") // in end of sentence "!!!!!Hi!!!!!" => "!!!!!Hi"
let remove = s => s.replace(/^!+/, "") // in start of sentence "!!!!!Hi!!!!!" => "Hi!!!!!"