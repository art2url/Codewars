// Define a method hello that returns "Hello, Name!"
// to a given name, or says Hello, World! if name 
// is not given (or passed as an empty String).

// Assuming that name is a String and it checks 
// for user typos to return a name with 
// a first capital letter (Xxxx).

function hello(name = "") {
    let arr = name.toLowerCase().split('').join('');
    let nameCamelCase = arr.charAt(0).toUpperCase() + arr.slice(1);
    return (nameCamelCase > "") ? ('Hello, ' + nameCamelCase + '!') : ('Hello, World!');
}