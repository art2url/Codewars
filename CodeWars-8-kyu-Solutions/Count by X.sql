/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]
*/

-- # write your SQL statement here: 
-- you are given a table 'counter' with columns 'x' (int) and 'n' (int)
-- return a query with columns 'x', 'n' and your result in a column named 'res' (array)
-- sort results by column 'x' ascending, then by 'n' ascending
-- note that each pair of 'x' and 'n' in 'counter' is unique 

WITH RECURSIVE generate_multiples AS (
    SELECT 
        x,
        n,
        x AS current_multiple,
        1 AS step
    FROM counter
    UNION ALL
    SELECT
        g.x,
        g.n,
        g.current_multiple + g.x,
        g.step + 1
    FROM generate_multiples g
    WHERE g.step < g.n
)
SELECT 
    x, 
    n, 
    ARRAY_AGG(current_multiple ORDER BY step) AS res
FROM generate_multiples
GROUP BY x, n
ORDER BY x, n;