// Complete the solution so that it reverses 
// the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

let solution = str => {
    if (str === '') {
        return '';
    } else {
        return solution(str.substr(1)) + str.charAt(0);
    }
}
solution('world')