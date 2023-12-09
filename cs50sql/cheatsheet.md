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


# SQL Cheatsheet

This document provides a quick reference for common SQL commands.

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

The `LIMIT` keyword lets you specify the number of rows in the query output.

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
- `COUNT()` function doesn't count NULL values
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
