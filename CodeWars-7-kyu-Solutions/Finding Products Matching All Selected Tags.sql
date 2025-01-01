/*
Imagine you are managing an e-commerce platform. It offers a diverse range of products, each tagged with various attributes to help customers filter and find items that match their preferences. These tags could represent categories, features, styles, or any other relevant attributes.

You want to implement a feature that allows customers to filter products by selecting multiple tags. Specifically, when a customer selects several tags, the platform should display only those products that are associated with all the selected tags. This ensures that the search results precisely match the customer's combined tag preferences.

We have a product_tags table:

product_id (int): Unique identifier for each product
tag (varchar): Tag associated with the product
The table may contain duplicate rows where the same product is associated with the same tag multiple times.

For our task, we want to find products that are tagged with both Electronics and Gadgets. The query should return product_id values in desc order for products that are associated with both of these tags.

for this sample data:

| product_id | tag         |
+------------+-------------+
|    101     | Electronics |
|    101     | Gadgets     |
|    102     | Home        |
|    103     | Electronics |
|    103     | Accessories |
|    104     | Kitchen     |
|    105     | Electronics |
|    105     | Gadgets     |
|    105     | Accessories |
|    106     | Gadgets     |
|    106     | Accessories |
the expected result is the following:

| product_id |
+------------+
|    105     |
|    101     |
*/

SELECT 
    product_id
FROM 
    product_tags
WHERE 
    tag IN ('Electronics', 'Gadgets')
GROUP BY 
    product_id
HAVING 
    COUNT(DISTINCT tag) = 2
ORDER BY 
    product_id DESC;

