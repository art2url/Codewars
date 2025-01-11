/*
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples:
1. booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False

2. booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True

3. booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False

Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"

Output
A Boolean value (True or False).
*/

function logicalCalc(array, operator) {
  switch (operator) {
    case 'AND':
      return array.every((value) => value);
    case 'OR':
      return array.some((value) => value);
    case 'XOR':
      return array.reduce((acc, value) => acc !== value, false);
    default:
      throw new Error('Invalid operator');
  }
}

logicalCalc([true, true, true, false], 'AND'); // false
logicalCalc([true, true, true, false], 'OR'); // true
logicalCalc([true, true, true, false], 'XOR'); // true
