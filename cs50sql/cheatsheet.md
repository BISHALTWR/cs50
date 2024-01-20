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

# SQL Designing

## CREATE
- Creates new table
```sql
CREATE TABLE riders (
    "id",
    "name"
)
```
- This is technically valid (without affinity types)

```sql
CREATE TABLE riders (
    "id" INTEGER,
    "name" TEXT
)
```

> If Columns have type affinities, SQL tries to convert an input value into the type they have an affinity for.
> Five type affinities: Text, Numeric(Real or Integer based on situation), Integer, Real, and Blob

## DROP
- Deletes table
```sql
DROP TABLE riders;
```

## Table Constriants
```sql
CREATE TABLE riders (
    "id" INTEGER,
    "name" TEXT,
    PRIMARY KEY("id")
)
```
- Primary key is unique identifier of each record (row).
- Enclosing attribute name in double inverted commas is not compulsory

```sql
CREATE TABLE visits (
    "rider_id" INTEGER,
    "station_id" INTEGER,
    FOREIGN KEY("rider_id") REFERENCES "riders"("id"),
    FOREIGN KEY("station_id") REFERENCES "stations"("id")
);
```
- Foreign keys reference primary key of other table.
    - Ensuring that primary key referenced by foreign key exits is referential integrity

```sql
CREATE TABLE visits(
    rider_id INTEGER,
    station_id INTEGER,
    PRIMARY KEY(rider_id, station_id)
);
```
- It is possible to create a primary key composed of two columns.

## Column Constriants
- Column constriant applies to a specified column in the table.
```sql
CREATE TABLE riders (
    "id" INTEGER,
    "name" TEXT NOT NULL UNIQUE,
    "line" TEXT NOT NULL,
    PRIMARY KEY ("id")
);
```
- Four column constriants: CHECK, DEFAULT, NOT NULL, UNIQUE (no repeteatition except NULL value)
- Primary keys and by extension, foreign keys must be unique and NOT NULL, so no need to include.

## Alter

```sql
ALTER TABLE "visits"
RENAME TO swipes;
```

```sql
ALTER TABLE "swipes"
ADD COLUMN "swipetype" TEXT;
```

```sql
ALTER TABLE "swipes"
RENAME COLUMN "swipetype" TO "type";
```

```sql
ALTER TABLE "swipes"
DROP COLUMN "type";
```

# Writing

## INSERT
```sql
INSERT INTO collection (id, title, accesssion_number, acquired)
    VALUES (1, "Profusion of flowers", 56.257, 1956-04-12);
```

> In sqlite, you can omit id column and it will be added automatically.
> It selects highest primary key and increments it to get new one.

```sql
INSERT INTO "collections" ("title", "accession_number", "acquired") 
    VALUES 
    ('Imaginative landscape', '56.496', NULL),
    ('Peonies and butterfly', '06.1899', '1906-01-01');
```
- You can insert multiple rows(records) like that.

## Importing from CSV in SQLite

```sql
.import --csv --skip 1 mfa.csv collections
```
- Import csv skip first row i.e. header and make a new collections table.

```sql
INSERT INTO table2 (name, class, roll_no)
SELECT name, class, roll_no FROM students;
```
> SQLite will automatically add the primary key values in the id column.

## DELETE 
```sql
DELETE FROM collection; -- This empties the table collection
DROP TABLE collection; -- This remove the table
```

```sql
DELETE FROM collection
WHERE title = "What?";
```

## Foreign key
- We can specify what happens when primary key referenced by foreign key is removed.
    - ON DELETE RESTRICT: This restricts deleting ids when foreign key constriant is violated
    - ON DELETE NO ACTION: nothing extra happens
    - ON DELETE SET NULL: sets foreign key references to NULL
    - ON DELETE SET DEFAULT: allows us to set default value instead of NULL
    - ON DELETE CASCADE: cascadingly deleted the referencing foreign key row. i.e. if you delete an artist ID, every record that has artist id as foreign key is also removed.

```sql
FOREIGN KEY (artist_id) REFERENCES artists(id) ON DELETE CASCADE
```

## UPDATE data
```sql
UPDATE student
SET fee = fee*1.1
WHERE rank > 10; 
```

# Viewing
- View is a virtual table defined by a query.
- Consider joining multiple tables and then selecting relevant columns to create a new table which can be saved as a view and used later.
- Views cannot be updated, they depend on the actual data.

- Views are useful for:
    - simplifying : making query simpler
    - aggregating : running aggregate functions like sum
    - partitioning : dividing data into logical pieces
    - securing : hiding columns that should be kept secure

```sql
CREATE VIEW "longlist" AS
SELECT "name", "title" FROM "authors"
JOIN "authored" ON "authors"."id" = "authored"."author_id"
JOIN "books" ON "books"."id" = "authored"."book_id";
```
## Simplifying and Aggregation
- Suppose, you wan't to frequenty calculate average from table
```sql
CREATE VIEW "average_book_ratings" AS
SELECT "book_id" AS "id", "title", "year", ROUND(AVG("rating"), 2) AS "rating" 
FROM "ratings"
JOIN "books" ON "ratings"."book_id" = "books"."id"
GROUP BY "book_id";
```
- Now you can use ```SELECT * FROM "average_book_ratings";``` to get average.
- And it adjusts with table.

## Partitioning
- Views can be used to break data into smaller logical pieces.
```sql
CREATE VIEW "2022" AS
SELECT "id", "title" FROM "books"
WHERE "year" = 2022;
```
- Now, data from 2022 is separately accessible.

## Securing
- Views can limit access to certain data.
- Consider a table with data of student. If an analyst needs marks to calculate average, mean, median, mode, standard deviation..., he doesn't need personal information of students. We can provide a view with only essential data.
- SQLite doens't support access control, but other DBMS do.

## Common table expression (CTE)
- A regular view exists forever in our database. A temporary fiew doesn't.
- CTE is a view that exists for a single query alone.
```sql
WITH "average_book_ratings" AS (
    SELECT "book_id", "title", "year", ROUND(AVG("rating"), 2) AS "rating" FROM "ratings"
    JOIN "books" ON "ratings"."book_id" = "books"."id"
    GROUP BY "book_id"
)
SELECT "year" ROUND(AVG("rating"), 2) AS "rating" FROM "average_book_ratings"
GROUP BY "year";
```
## Soft deletions.
- Soft deletions involve marking a row as deleted instead of actually removing it from table. (Perhaps adding a removed/deleted column)
- Then you can create view with undeleted and deleted records separately.
- Soft deletion can be done by updating value of the attribute to 1.

## Triggers
- It is not possible to insert data into or delete data from a view.
- We can setup a triiger that can insert into or delete from underlying table. 

```sql
CREATE VIEW "current_collections" AS
SELECT "id", "title", "accession_number", "acquired" 
FROM "collections" 
WHERE "deleted" = 0;

CREATE TRIGGER "delete"
INSTEAD OF DELETE ON "current_collections"
FOR EACH ROW
BEGIN 
    UPDATE "collections" SET "deleted" = 1
    WHERE "id" = OLD."id";
END;
```
> Now, everytime we try to delete rows from the view, the trigger will instead update the deleted column of the row in the underlying table collections, thus completing the soft deletion.
> We use OLD keyword to indicate that ID of the row updated in collections should be the same as the ID of the row we are trying to delte from current_collections.

```sql
DELETE FROM "current_collections"
WHERE "title" = "Imaginative landscape";
```
This sets delete = 1 for rows with title = Imaginative landscape.

- The following trigger inserts data into underlying table when we try to insert it into a view.
```sql
CREATE TRIGGER "insert_when_exists"
INSTEAD OF INSERT ON "current_collections"
FOR EACH ROW 
WHEN NEW."accession_number" IN (
    SELECT "accession_number" FROM "collections"
)
BEGIN
    UPDATE "collections" 
    SET "deleted" = 0 
    WHERE "accession_number" = NEW."accession_number";
END;
```