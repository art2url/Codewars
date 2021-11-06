// Write a method that takes one argument as name 
// and then greets that name, capitalized and ends 
// with an exclamation point.

function greet(name) {
    let str = name.toLowerCase();
    return 'Hello ' + name[0].toUpperCase() + str.slice(1) + '!';
}
greet('riley')