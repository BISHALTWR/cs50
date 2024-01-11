# DBMS lab

# Lab 1 (DML)

- Table creation and insertion
```sql
CREATE TABLE employee(
	Emp_no int,
  	Emp_name varchar(50),
  	job varchar(50),
  	manager varchar(50),
  	hire_date date,
  	salary int,
  	commission int,
  	dept_no int
);

INSERT INTO employee(Emp_no, Emp_name, job, manager, hire_date,salary, commission, dept_no)
	VALUES(1,'Ram','Clerk',Null, '26-Jan 2007', 5000, 700, 10);
INSERT INTO employee(Emp_no, Emp_name, job, manager, hire_date,salary, commission, dept_no)
	VALUES(2,'James','Clerk',Null, '5-Dec 2008', 7000, 800, 20);
INSERT INTO employee(Emp_no, Emp_name, job, manager, hire_date,salary, commission, dept_no)
	VALUES(3,'Reema','Manager',Null, '2-Dec 2005', 15000, 1000, 20);
INSERT INTO employee(Emp_no, Emp_name, job, manager, hire_date,salary, commission, dept_no)
	VALUES(4,'Manish','Manager',Null, '5-Jun 2005', 25000, 1500, 10);
INSERT INTO employee(Emp_no, Emp_name, job, manager, hire_date,salary, commission, dept_no)
	VALUES(5,'Manoj','Analyst',Null, '12-Jan 2007', 20000, 1000, 10);
INSERT INTO employee(Emp_no, Emp_name, job, manager, hire_date,salary, commission, dept_no)
	VALUES(6,'Saroj','Analyst',Null, '5-Dec 2008', 25000,1100, 20);
INSERT INTO employee(Emp_no, Emp_name, job, manager, hire_date,salary, commission, dept_no)
	VALUES(7,'Sameer','President',Null, '2-Jan 2005', 50000, 5000, 20);
INSERT INTO employee(Emp_no, Emp_name, job, manager, hire_date,salary, commission, dept_no)
	VALUES(8,'Saroj','Salesman',Null, '1-Dec 2005', 15000, 1000, 20);
INSERT INTO employee(Emp_no, Emp_name, job, manager, hire_date,salary, commission, dept_no)
	VALUES(9,'Sumi','Salesman',Null, '1-Jan 2007', 18000, 1100, 20);
```
## Queries
- Retrieve all information about the employee
```sql
SELECT * FROM employee;
```
- Retrieve the name, job and salary of all employee
```sql
SELECT Emp_name, job, salary FROM employee;
```
- Find the names of all employee who work as a clerk
```sql
SELECT Emp_name FROM employee
WHERE job = 'Clerk';
```
- Display the record of all clerks working in a department number 20
```sql
SELECT * FROM employee
WHERE job = 'Clerk' AND dept_no = 20;
```
- Find the name, employee number, and job of all the employee who work as manager or analyst
```sql
SELECT Emp_name, Emp_no, job FROM employee
WHERE job = 'Manager' or job = 'Analyst';
```
- Find the records of all employees whose job is either president or salesman
```sql
SELECT * FROM employee
WHERE job = 'President' or job = 'Salesman';
```
- Find the records of all employee except those whose job is either president or salesman
```sql
SELECT * FROM employee
WHERE job <> 'President' AND job <> 'Salesman';
```
- Find the employee whose salary is greater than or equal to 11000 and less than or equal to 30000
```sql
SELECT Emp_name FROM employee
WHERE Salary BETWEEN 11000 AND 30000;
```
- Find the employee that who either earn less than 16000 or more than 35000
```sql
SELECT Emp_name FROM employee
WHERE Salary NOT BETWEEN 16000 AND 35000;
```
- Find the distinct jobs the employees hold
```sql
SELECT DISTINCT job AS distinct_jobs
FROM employee;
```
- Find the name of the employees whose name start with alphabet 'M'
```sql
SELECT Emp_name FROM employee
WHERE Emp_name LIKE "M%";
```
- Find the employee number and name of the employees whose name end in 'ER'
```sql
SELECT Emp_no, Emp_name FROM employee
WHERE Emp_name LIKE "%ER";
```
- Find the employee name whose name starts with J and ends with S
```sql
SELECT Emp_name FROM employee
WHERE Emp_name LIKE "J%S";
```
- Find the employee name whose name start with S and have four characters more after S
```sql
SELECT Emp_name FROM employee
WHERE Emp_name LIKE "S___";
```
- Find the name of the employees sorted in descending order
```sql
SELECT Emp_name FROM employee
ORDER BY Emp_name DESC;
```
- Display the names and the salaries of all employees after incrementing the salary by 10%
```sql
SELECT Emp_name,Salary*1.1 FROM employee;
```
- Display the names and the commission of all employees after incrementing the comm by 10%
```sql
SELECT Emp_name, commission*1.1 FROM employee;
```
- Display the name and total salary (i.e. Salary + commission) of employees in department 20
```sql
SELECT Emp_name, Salary+commission AS 'Total Salary' FROM employee
WHERE dept_no = 20;
```
- Display the records of all employees who are either a manager or earns more than 30000
```sql
SELECT * FROM employee
WHERE job = 'Manager' OR Salary > 30000;
```
- Find the total salary given to the employees
```sql
SELECT SUM(Salary) FROM employee;
```
- Find the total number of records of the employees
```sql
SELECT COUNT(*) FROM employee;
```
- Find the total number of departments
```sql
SELECT COUNT(DISTINCT dept_no) AS 'no of department'
FROM employee;
```
- Find the maximum salary of each department
```sql
SELECT dept_no, MAX(Salary) AS max_salary
FROM employee
GROUP BY dept_no;
```
- Display the records of employees who have highest salary
```sql
SELECT * FROM employee
WHERE Salary = (SELECT MAX(Salary) FROM employee);
```
- Find the Department number of the Employee who get salary more than the average salary
```sql
SELECT dept_no FROM employee
WHERE Salary > (SELECT avg(Salary) FROM employee);
```
- Find the Department that has maximum salary greater than 30000
```sql
SELECT dept_no
FROM employee
GROUP BY dept_no
HAVING MAX(Salary) > 30000;
```

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
	Dept_no INT NOT NULL
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
(1011, 'Manoj', 440245, 'Sub-account', '1989-06-01', 1100, 23, 20);

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
SET Deptno = 20, Sal = Sal + 1000, Designation = 'Manager'
WHERE Name = 'Krish';
```

- Update all the Sub-Account working in the department 20 to get the same salary as the manager who has the lowest salary among all the manager
```sql
UPDATE employees
SET Sal = (
    SELECT MIN(Sal)
    FROM employees
    WHERE Designation = 'Manager'
)
WHERE Designation = 'Sub-account' AND Deptno = 20;
```

- Empty all the records of the table employee
```sql
-- DELETE FROM employees; -- for oracle, mysql...
TRUNCATE TABLE employees; -- for sqlite
```