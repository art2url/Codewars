/*
You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

Example
# the bookseller's stocklist:
"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

# list of categories: 
"A", "B", "C", "W"

# result:
"(A : 20) - (B : 114) - (C : 50) - (W : 0)"
Explanation:

category A: 20 books (ABART)
category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
category C: 50 books (CDXEF)
category W: 0 books
*/

function stockList(books, categories) {
  if (books.length === 0 || categories.length === 0) {
    return '';
  }

  const firstLettersArr = books.map((book) => book[0]);
  const numbersArr = books.toString().match(/\d+/g).map(Number);

  const categoryTotals = categories.map((category) => {
    let total = 0;
    firstLettersArr.forEach((letter, index) => {
      if (letter === category) {
        total += numbersArr[index];
      }
    });
    return `(${category} : ${total})`;
  });

  return categoryTotals.join(' - ');
}

stockList(
  ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
  ['A', 'B', 'C', 'D']
);

// (A : 0) - (B : 1290) - (C : 515) - (D : 600)
