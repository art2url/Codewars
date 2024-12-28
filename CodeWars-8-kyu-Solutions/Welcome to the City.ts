/*
Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/

export const sayHello = (
  name: string[],
  city: string,
  state: string
): string => {
  const fullName = name.join(' ');
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
};

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'); // 'Hello, John Smith! Welcome to Phoenix, Arizona!'
sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois'); // 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
sayHello(['Wallace', 'Russel', 'Osbourne'], 'Albany', 'New York'); // 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!'
