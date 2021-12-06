// The following code is not giving the expected 
// results. Can you figure out what the issue is?

// The following is an example of data that 
// would be passed in to the function.

var data = [
    { name: 'Joe', age: 20 },
    { name: 'Bill', age: 30 },
    { name: 'Kate', age: 23 }
]

let getNames = data => {
    let names = [];
    for (let i = 0; i < data.length; i++) {
        names.push(data[i].name);
    }
    return names;
}

getNames(data)