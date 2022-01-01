// Take 2 strings s1 and s2 including only letters from ato z. 
// Return a new sorted string, the longest possible, 
// containing distinct letters - each taken only once - 
// coming from s1 or s2.

function longest(s1, s2) {

    let splitAndSort = () => {
        return (s1 + s2).split('')
            .sort((a, b) => a.localeCompare(b)).join('');
    };

    let removeDuplicates = () => {
        return splitAndSort()
            .replace(/(.)\1{1,}/g, "$1");
    };

    return removeDuplicates();
}
sortLetters("xyaabbbccccdefww", "xxxxyyyyabklmopq")