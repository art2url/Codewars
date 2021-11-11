// The aim of this kata is to split a given string 
// into different strings of equal size (note size
// of strings is passed to the method)

function splitInParts(s, partLength) {
    return s.match(
        new RegExp('.{1,' + partLength + '}', 'g')
    ).join(' ');
}
splitInParts("supercalifragilisticexpialidocious", 3);
// 'sup erc ali fra gil ist ice xpi ali doc iou s'