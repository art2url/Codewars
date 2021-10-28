// Consider an array/list of sheep where 
// some sheep may be missing from their place. 
// We need a function that counts the number of sheep 
// present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let count = 0;
    for (var i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true)
            count++;
    }
    return count
}

countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
])