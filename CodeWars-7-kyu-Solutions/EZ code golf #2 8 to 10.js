// You have to write a function f which 
// takes in an octal number in string format 
// and output its decimal representation 
// in less than 15 characters.

f = n => parseInt(n, 8) // 18 characters!!!! FUCK!

f = x => +('0o' + x) // solution