<!-- SELECT keyword returns values from the database
SELECT * FROM "table_name"; //Selects all the columns 
SELECT column_name1,column_name2...column_nameN FROM "table_name"; //Selects specified columns

// It is good practice to use double quotes around table and column names, which are called SQL identifiers.
// SQL also has strings and we use single quotes around strings to differentiate them from identifiers.
// Although most SQL based DBMS are case-insensitive, it is a good practice to use uppercase for SQL keywords.

Limit <number> at end lets you specify the number of rows in the query output.
WHERE <condition> lets you select rows based on a condition.
    - Operators: = ("equals to"), != ("not equal to"), <> ("not equal to")
    - You can combine with AND and OR.
    - You can use NOT .
    - You can use IS NULL or IS NOT NULL in conditionals as well.
        -- Eg: WHERE "column_name" IS NOT NULL;
    - LIKE keyword can be used to select data that roughly matches the specified string.
        -- WHERE "TITLE" LIKE '%love%'; // For book titles that contain word love
        -- WHERE "TITLE" LIKE 'The%'; // For book titles that begin with The (or They or These or Their and so on)
        -- WHERE "TITLE" LIKE 'The %'; // For books titles that begin strictly with The 
        -- WHERE "TITLE" LIKE 'P_re'; // For books titles with name Pyre or Pure or Pire or.. 
        -- You can use multiple % or _ symbols in a query
        -- Comparision using LIKE is case-insensitive by default and using = is case-sensitive by default.
    - Operators >,<,<= and >= can be used to match a range of values:
        -- WHERE "year" >= 2019 AND "year" <= 2022;
    - You can also use BETWEEN and AND for same result:
        -- WHERE "year" BETWEEN 2019 AND 2022;
    - For range operators, the values can be integer or float

ORDER BY <column_name> <ASC/DESC> can be used to organize the returned rows in some specified order.
    - ORDER BY "rating" LIMIT 10;

Aggregate functions:
    - COUNT(), AVG(), MIN(), MAX(), SUM()
    - COUNT() function doesn't count NULL values
    - Using MAX on column with string values will return the last title alphabetically.

AS keyword can be used to rename the column in which the results are displayed.
    - SELECT ROUND(AVG("rating"),2) AS "average rating";

DISTINCT keyword can be used to ensure that only distinct values are counted.
    - SELECT COUNT(DISTINCT "publisher") FROM "longlist"; -->


This document provides a quick reference for common SQL commands.

# SQL Queries

## SELECT

The `SELECT` keyword returns values from the database.

- Select all columns from a table:
    ```sql
    SELECT * FROM "table_name";
    ```
- Select specific columns from a table:
    ```sql
    SELECT column_name1,column_name2...column_nameN FROM "table_name";
    ```

> Note: It is good practice to use double quotes around table and column names, which are called SQL identifiers. SQL also has strings and we use single quotes around strings to differentiate them from identifiers. Although most SQL based DBMS are case-insensitive, it is a good practice to use uppercase for SQL keywords.

## LIMIT

The `LIMIT` keyword lets you specify the number of rows in the query output (at end of query).
> This is also same in PostgreSQL but in SQL Server it is:
> SELECT TOP(2) id,name FROM employees

## WHERE

The `WHERE` keyword lets you select rows based on a condition.

- Operators: `=`, `!=`, `<>`
- Combine conditions with `AND` and `OR`.
- Negate conditions with `NOT`.
- Check for null values with `IS NULL` or `IS NOT NULL`.
    ```sql
    WHERE "column_name" IS NOT NULL;
    ```
- Use `LIKE` to select data that roughly matches the specified string.
    ```sql
    WHERE "TITLE" LIKE '%love%'; // For book titles that contain word love
    WHERE "TITLE" LIKE 'The%'; // For book titles that begin with The (or They or These or Their and so on)
    WHERE "TITLE" LIKE 'The %'; // For books titles that begin strictly with The 
    WHERE "TITLE" LIKE 'P_re'; // For books titles with name Pyre or Pure or Pire or.. 
    ```
    > Note: You can use multiple % or _ symbols in a query. Comparison using LIKE is case-insensitive by default and using = is case-sensitive by default.
- Use `>`, `<`, `<=` and `>=` to match a range of values:
    ```sql
    WHERE "year" >= 2019 AND "year" <= 2022;
    ```
- Use `BETWEEN` and `AND` for same result:
    ```sql
    WHERE "year" BETWEEN 2019 AND 2022;
    ```
    > Note: For range operators, the values can be integer or float.

## ORDER BY

- The `ORDER BY` keyword can be used to organize the returned rows in some specified order.
    ```sql
    ORDER BY "rating" LIMIT 10;
    ```

## Aggregate Functions

- `COUNT()`, `AVG()`, `MIN()`, `MAX()`, `SUM()`
- `COUNT()` function doesn't count NULL values. 
- Using `MAX` on column with string values will return the last title alphabetically.

## AS

- The `AS` keyword can be used to rename the column in which the results are displayed:
    ```sql
    SELECT ROUND(AVG("rating"),2) AS "average rating";
    ```

## DISTINCT

- The `DISTINCT` keyword can be used to ensure that only distinct values are counted.
    ```sql
    SELECT COUNT(DISTINCT "publisher") FROM "longlist";
    ```

> Note: While comparing with date use '' (single quote). i.e. treat as string.

<!-- 
Databases can have multiple tables.
.tables to view all the tables.
- These tables have some relationships between them, and hence we call the database a relational database.
    - Consider a book database
        - It can have tables like authors, books, publishers, translators
        - Authors write books
        - Publishers publish books
        - Books are translated by translators
- Why have different tables:
    - Consider using a single table for books and authors.
        - where in each row there is book name, book publish date... and author details too
    - but multiple books can have same authors
        - so, data is repeated in the table (redundancy)
    - This can be avoided by creating book table and author table separately.
    - Now author table doesn't have redundancy and neither does book table
    - Author info in author table can be referenced by book table.
    - Also same book can be co-authored

Entity Relationship(ER) diagrams:
- Relation between tables can be one-to-one, one-to-many and many-to-many.
- These relations can be shown in entity relationship diagram.
- The exact relationships between entities are really up to the designer of the database. ER diagram can be thought of as a tool to communicate these decisions with others.
- We can use keys to relate one table to another in SQL

- Primary keys:
    - Primary key is unique identifier for each record(row) in a table.
        - For eg; roll number for student of a class
    - Foreign keys: foreign key is a primary key taken from different table.
        - It helps relate tables by forming a link between them.

- Sub-queries:
    - A subquery is a query inside another query. These are also called nested queries.
    - SELECT "title"
    FROM "books"
    WHERE "publisher_id" = (
        SELECT "id"
        FROM "publishers"
        WHERE "publisher" = 'Fitzcarraldo Editions'
    );
    - Notice: subquery is in parentheses. The query that is furthest inside the parentheses will be run first, followed by outer queries.
    - The inner query is indented for readability.

 -->
# SQL Relating

## IN
- This keyword is used to check presence of desired value `IN` given list or set of values.

## JOIN
- `JOIN` keyword allows us to combine two or more tables together.

### INNER JOIN
```sql
-- Consider two tables: 
    -- sea lions with id and name column
    -- migrations with id, distance and days
-- To join the tables:
SELECT * 
FROM 'sea_lions'
JOIN 'migrations' ON 'migrations'.'id' = 'sea_lions'.'id';
```
- The `ON` keyword is used to specify which values match between tables being joined. (Required)
- If there is any IDs in one table not present in the other, this row will not be present in the joined table. This kind of join is called an `INNER JOIN`.

### OUTER JOIN

- These joins allow us to retain certain unmatched ids.
-  LEFT JOIN, RIGHT JOIN, FULL JOIN
- `LEFT JOIN` prioritizes the data in the left (or first) table.
- `RIGHT JOIN` prioritizes the data in the right (or second) table.
- `FULL JOIN` allows us to see the entirety of all tables.
-  OUTER JOIN can lead to empty or `NULL` values in the joined table.
- `NATURAL JOIN` automatically joins two table based on common column name. This doesn't require a `ON` section and works similarly to INNER JOIN.

## SETS
- On running a query, we get a `result set`.
- Consider the case with authors and translators in book database. A person could be either an author or a translator. If the two sets intersect, it is also possible that a person could be both an author and a translator.
- `INTERSECT` finds common between two sets
```sql
SELECT 'name' FROM 'translators'
INTERSECT
SELECT 'name' FROM 'authors'
```

- `UNION` combines two sets. Values are not repeated.
```sql
SELECT 'name' FROM 'translators'
UNION
SELECT 'name' FROM 'authors'
```

- `EXCEPT` finds difference between two sets.
```sql
SELECT 'name' FROM 'authors'
EXCEPT
SELECT 'name' FROM 'translators';
```

## Groups
-  `GROUP BY` keyword can be used to create groups based on certain attribute.
```sql
SELECT 'book_id', AVG('rating') AS 'average rating'
FROM 'ratings'
GROUP BY 'book_id';
```
- This creates group for each book and them collapse the ratings of the group into an average rating.

```sql
-- To find book with average rating above 4
SELECT 'book_id', ROUND(AVG('rating'),2) AS 'average rating'
FROM 'ratings'
GROUP BY 'book_id'
HAVING 'average rating' > 4.0;
```
> HAVING IS USED FOR GROUPS, WHERE IS USED FOR INDIVIDUAL ROWS.


> CREATE VIEW <name> AS 
> <Query here>
> Creates view of database. Which are virtual table that is result of SQL query.
> You can query a view using from like table

