# Lab 2 - DML (Data Manipulation Language)

- Table creation

CREATE TABLE employees(
	Empid INT NOT NULL,
	Name varchar(50) NOT NULL,
	Phone INT NOT NULL,
	Designation varchar(50) NOT NULL,
	Hiredate date,
	Sal INT NOT NULL,
	Comm INT NOT NULL,
	Dept no INT NOT NULL
);

## Queries

- Insert the data of employee given below:

| EmpID | Name | Phone | Designation | Hiredate | Sal | Comm | Deptno |
|---|---|---|---|---|---|---|---|
| 700 | Krish | 424572 | Clerk | 01-dec-90 | 4000| | 10 |
| 1500 | Saroj | 552222 | Manager | 01-jan-90 | 2000 | 370 | 20 |
| 1099 | Manoj | 678799 | Accountant | 01-jan-91 | 12000 | 500 | 10 |
| 1045 | Sita | | Clerk | 03-jul-80 | 3500 | 700 | 20 |
| 1011 | Manoj | 440245 | Sub-accountant | 01-jun-89 | 1100 | 23 | 20 |
| 1060 | Saroj | 552262 | Manager | 01-jan-90 | 2000 | 370 | 20 |

```sql
INSERT INTO employees (EmpID, Name, Phone, Designation, Hiredate, Sal, Comm, Deptno) VALUES
(700, 'Krish', 424572, 'Clerk', '1990-12-01', 4000, NULL, 10);

INSERT INTO employees (EmpID, Name, Phone, Designation, Hiredate, Sal, Comm, Deptno) VALUES
(1500, 'Saroj', 552222, 'Manager', '1990-01-01', 2000, 370, 20);

INSERT INTO employees (EmpID, Name, Phone, Designation, Hiredate, Sal, Comm, Deptno) VALUES
(1099, 'Manoj', 678799, 'Accountant', '1991-01-01', 12000, 500, 10);

INSERT INTO employees (EmpID, Name, Phone, Designation, Hiredate, Sal, Comm, Deptno) VALUES
(1045, 'Sita', NULL, 'Clerk', '1980-07-03', 3500, 700, 20);

INSERT INTO employees (EmpID, Name, Phone, Designation, Hiredate, Sal, Comm, Deptno) VALUES
(1011, 'Manoj', 440245, 'Sub-accountant', '1989-06-01', 1100, 23, 20);

INSERT INTO employees (EmpID, Name, Phone, Designation, Hiredate, Sal, Comm, Deptno) VALUES
(1060, 'Saroj', 552262, 'Manager', '1990-01-01', 2000, 370, 20);
```

- Increment the salary of all employee by 10%
```sql
UPDATE employees
SET Sal = Sal * 1.1;
```

- Update Sita's information to add her telephone number 542229
```sql
UPDATE employees
SET Phone = 542229
WHERE Name = 'Sita';
```

- Give all the Employee hired before 1990, a commission of 10% of his salary
```sql
UPDATE employees
SET Comm = Sal * 0.1
WHERE Hiredate < '1990-01-01';
```

- Decrease 10% income Tax from all employee whose total income exceeds 12000
```sql
UPDATE employees
SET Sal = Sal * 0.9
WHERE Sal + Comm > 12000;
```

- Increment salary of employee by 20% whose commission range from 500 to 1000
```sql
UPDATE employees
SET Sal = Sal * 1.2
WHERE Comm BETWEEN 500 AND 1000;
```

- Transfer Manoj to Department 10
```sql
UPDATE employees
SET Deptno = 10
WHERE Name = 'Manoj';
```

- Transfer the Saroj with Empid 1060 to Department 50
```sql
UPDATE employees
SET Deptno = 50
WHERE EmpID = 1060;
```

- Delete the Record of Sita
```sql
DELETE FROM employees
WHERE Name = 'Sita';
```

- Delete the record of Manoj whose empid is 1099
```sql
DELETE FROM employees
WHERE EmpID = 1099;
```

- Transfer the employee Krish to Department 20 as manager and increment his salary by 1000
```sql
UPDATE employees
SET Deptno = 20, Sal = Sal + 1000
WHERE Name = 'Krish';
```

- Update all the Sub-Account working in the department 20 to get the same salary as the manager who has the lowest salary among all the manager
```sql
UPDATE employees
SET Sal = (
    SELECT MIN(Sal)
    FROM employees
    WHERE Designation = 'Manager' AND Deptno = 20
)
WHERE Designation = 'Sub-accountant' AND Deptno = 20;
```

- Empty all the records of the table employee
```sql
-- DELETE FROM employees;
TRUNCATE TABLE employees;
```