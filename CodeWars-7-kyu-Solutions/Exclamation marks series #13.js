// Count the number of exclamation marks and //question marks, 
// return the product.

// Examples:
// Product("") == 0
// product("!") == 0
// Product("!ab? ?") == 2
// Product("!!") == 0
// Product("!??") == 2
// Product("!???") == 3
// Product("!!!??") == 6
// Product("!!!???") == 9
// Product("!???!!") == 9
// Product("!????!!!?") == 20

function product(string) {
    let splitString = string.split('');

    let exclamationMark = splitString.reduce(
        (total, char) => (char === '!' ? total + 1 : total), 0);

    let questionMark = splitString.reduce(
        (total, char) => (char === '?' ? total + 1 : total), 0);

    return exclamationMark * questionMark
}

product("!???"); //6