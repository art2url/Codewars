/*
Let's consider a situation where we have three tables:

users table:

Columns: id, name
Primary key: id
products table:

Columns: id, product_name
Primary key: id
orders table:

Columns: id, user_id, product_id
Primary key: id
Foreign keys: user_id references users(id), product_id references products(id)
In this kata, we need to find out the names and IDs of all users who ordered every available product at least once. The result should be ordered by user_id in descending order.

GLHF!

Desired Output
The desired output should look like this:

user_id	name
20	Lelia Bergstrom Sr.
15	Johnathon Hoppe
1	Sen. Ashley Brakus
*/

SELECT 
    u.id AS user_id,
    u.name
FROM 
    users u
JOIN 
    orders o ON u.id = o.user_id
GROUP BY 
    u.id, u.name
HAVING 
    COUNT(DISTINCT o.product_id) = (SELECT COUNT(*) FROM products)
ORDER BY 
    user_id DESC;