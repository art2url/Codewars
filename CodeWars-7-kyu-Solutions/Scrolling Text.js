// Let's create some scrolling text!

// Your task is to complete the function which takes a string, 
// and returns an array with all possible rotations of 
// the given string, in uppercase.

// Example:
// scrollingText("codewars") should return:
// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

const scrollingText = (text) => {
    text = text.toUpperCase();
    const textToArray = [...text];
    const variations = textToArray.map((_, i) =>
        text.slice(i) + text.slice(0, i));

    return variations;
};
scrollingText("codewars");