// Winter is coming, you must prepare your ski holidays. 
// The objective of this kata is to determine the number 
// of pair of gloves you can constitute from the gloves 
// you have in your drawer.

// Given an array describing the color of each glove, return
// the number of pairs you can constitute, assuming that only
// gloves of the same color can form pairs.

function numberOfPairs(gloves) {
    let obj = {};

    gloves.forEach(item => {
        obj[item] = obj[item] ? obj[item] + 1 : 1;
    });

    return Object.values(obj).reduce((acc, curr) => {
        acc += Math.floor(curr / 2)
        return acc;
    }, 0);
}

// Doesn't work on big number of pairs
function numberOfPairs(gloves) {
    let count = 0

    let result = [...gloves].reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    for (let i in result) {
        if (result[i] === 2) {
            count++
        } else if (result[i] === result[i] % 2 == 0) {
            for (let j in result) {
                if (result[i] % 2 == 0) {
                    count = result[j] + 1
                } else {
                    count += result[j] / 2
                }
            }
        }
    }
    return count;
}
numberOfPairs(['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'blue', 'blue', 'blue'])