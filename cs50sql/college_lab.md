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
- Find the records of all employees except those whose job is either president or salesman
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
SELECT DISTINCT job FROM employee;
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
- Display the name and total salary (i.e. Salary + commission) of employees in department 30
```sql
SELECT Emp_name, Salary+commission AS 'Name', 'Total Salary' FROM employee
WHERE dept_no = 30;
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
SELECT COUNT(DISTINCT dept_no) FROM employee;
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
SELECT * FROM employee
WHERE Salary > (SELECT avg(Salary) FROM employee);
```
- Find the Department that has maximum salary greater than 30000
```sql
SELECT dept_no
FROM employee
GROUP BY dept_no
HAVING MAX(Salary) > 30000;
```