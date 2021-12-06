// You will be given an array of objects (associative arrays in PHP) 
// representing data about developers who have signed up to attend 
// the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; 
// or false otherwise.

// For example, given the following input array:
var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

var list2 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'PHP' },
];

function isSameLanguage(obj) {
    let searchResult = [];
    for (let i = 0; i < obj.length; i++) {
        searchResult.push(obj[i].language);
    }
    let result = searchResult.every(value => value === searchResult[0]);
    return result;
}