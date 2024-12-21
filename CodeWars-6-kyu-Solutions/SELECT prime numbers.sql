/*
Write a SELECT query which will return all prime numbers smaller than 100 in ascending order.
Your query should return one column named prime.
*/

-- SELECT prime
-- FROM (VALUES 
--     (2), (3), (5), (7), (11), (13), (17), (19), (23), (29),
--     (31), (37), (41), (43), (47), (53), (59), (61), (67), (71),
--     (73), (79), (83), (89), (97)
-- ) AS primes(prime)
-- ORDER BY prime;

WITH RECURSIVE numbers AS (
    SELECT 2 AS n
    UNION ALL
    SELECT n + 1
    FROM numbers
    WHERE n < 99
), is_prime AS (
    SELECT n AS prime
    FROM numbers
    WHERE NOT EXISTS (
        SELECT 1
        FROM numbers AS divisors
        WHERE divisors.n < n AND divisors.n > 1 AND n % divisors.n = 0
    )
)
SELECT prime
FROM is_prime
ORDER BY prime;