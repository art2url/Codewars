/*
Write a function which converts the input string to uppercase.

--# write your SQL statement here: 
you are given a table 'makeuppercase' with column 's', 
return a table with column 's' and your uppercased result 
in a column named 'res'.
*/

SELECT s, UPPER(s) AS res
FROM makeuppercase;