// The first century spans from the year 1 up 
// to and including the year 100, the second 
// century - from the year 101 up to and 
// including the year 200, etc.

// Given a year, return the century it is in.

// diapazone +infinity
function century(year) {
    return year % 100 ? Math.trunc(year / 100) + 1 : year / 100;
}
century(2001)

// diapazone 1-2100
function century(year) {
    return (year <= 100) ? 1 :
        (year <= 200) ? 2 :
        (year <= 300) ? 3 :
        (year <= 400) ? 4 :
        (year <= 500) ? 5 :
        (year <= 600) ? 6 :
        (year <= 700) ? 7 :
        (year <= 800) ? 8 :
        (year <= 900) ? 9 :
        (year <= 1000) ? 10 :
        (year <= 1100) ? 11 :
        (year <= 1200) ? 12 :
        (year <= 1300) ? 13 :
        (year <= 1400) ? 14 :
        (year <= 1500) ? 15 :
        (year <= 1600) ? 16 :
        (year <= 1700) ? 17 :
        (year <= 1800) ? 18 :
        (year <= 1900) ? 19 :
        (year <= 2000) ? 20 :
        (year <= 2100) ? 21 : "Out of diapazone"
}
century(301)