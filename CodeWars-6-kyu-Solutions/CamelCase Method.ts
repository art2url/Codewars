/*
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

export function camelCase(str: string): string {
  const camelTex = str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  return camelTex;
}

camelCase(''); // ''
camelCase('test case'); // 'TestCase'
camelCase('camel case method'); //'CamelCaseMethod'
camelCase('say hello'); //'SayHello'
camelCase('camel case word'); //'CamelCaseWord'
