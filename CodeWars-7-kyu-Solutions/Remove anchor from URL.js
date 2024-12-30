/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// function removeUrlAnchor(url) {
//   const findHash = url.split('#');
//   const result = findHash[0];

//   return result;
// }

function removeUrlAnchor(url) {
  const anchorIndex = url.indexOf('#');

  return anchorIndex === -1 ? url : url.slice(0, anchorIndex);
}

removeUrlAnchor('www.codewars.com#about'); // 'www.codewars.com'
removeUrlAnchor('www.codewars.com/katas/?page=1#about'); // 'www.codewars.com/katas/?page=1'
removeUrlAnchor('www.codewars.com/katas/'); // 'www.codewars.com/katas/'
