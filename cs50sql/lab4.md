1.
```sql
CREATE TABLE student (
    crn varchar(20) primary key,
    name varchar(50),
    address varchar(50),
    phone_number int,
    dob date
);
CREATE TABLE course(
    course_id varchar(20) primary key,
    course_name varchar(50),
    duration int,
    fee int
);
```

2.
```sql
INSERT INTO student (crn, name, address, phone_number, dob)
    VALUES ('058/bct766', 'Binod', 'Lalitpur', NULL, '12-jan-1992');
INSERT INTO student (crn, name, address, phone_number, dob)
    VALUES ('058/bct778', 'Shyam', 'Ktm', 4288888, '1-dec-1990');
INSERT INTO student (crn, name, address, phone_number, dob)
    VALUES ('058/bct777', 'Puja', 'Ktm', 4272222, '10-jan-1982');
INSERT INTO student (crn, name, address, phone_number, dob)
    VALUES ('058/bct779', 'Hari', 'Bkt', 667890, '12-jul-1983');
INSERT INTO student (crn, name, address, phone_number, dob)
    VALUES ('058/bct729', 'John', 'Ktm', 667890, '12-jun-1983');
INSERT INTO student (crn, name, address, phone_number, dob)
    VALUES ('058/bct730', 'Sim', 'Dhapakhel', 4567890, '10-jun-1990');
```

3.
```sql
INSERT INTO course (course_id, course_name, duration, fee)
    VALUES ('c123', 'java', 5, 3000);
INSERT INTO course (course_id, course_name, duration, fee)
    VALUES ('c111', 'linux', 8, 60000);
INSERT INTO course (course_id, course_name, duration, fee)
    VALUES ('c133', 'oracle', 9, 8000);
INSERT INTO course (course_id, course_name, duration, fee)
    VALUES ('c143', 'A+', 5, 1500);
```

4.
```sql
CREATE TABLE enroll(
    enroll_id varchar(20) PRIMARY KEY,
    crn varchar(20),
    course_id varchar(20),
    enroll_dt date,
    complete_dt date,
    FOREIGN KEY (crn) REFERENCES student(crn),
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);
```

5.
```sql
INSERT INTO enroll (enroll_id, crn, course_id, enroll_dt, complete_dt)
    VALUES ('e12', '058/bct766', 'c111', '23-jan-2003', NULL);
INSERT INTO enroll (enroll_id, crn, course_id, enroll_dt, complete_dt)
    VALUES ('e13', '058/bct778', 'c111', '23-jan-2003', '1-jan-2003');
INSERT INTO enroll (enroll_id, crn, course_id, enroll_dt, complete_dt)
    VALUES ('e14', '058/bct766', 'c123', '1-jan-2004', NULL);
INSERT INTO enroll (enroll_id, crn, course_id, enroll_dt, complete_dt)
    VALUES ('e15', '058/bct766', 'c111', '1-jun-2004', NULL);
INSERT INTO enroll (enroll_id, crn, course_id, enroll_dt, complete_dt)
    VALUES ('e18', '058/bct779', 'c111', '1-jun-2004', NULL);
INSERT INTO enroll (enroll_id, crn, course_id, enroll_dt, complete_dt)
    VALUES ('c20', '058/bct729', 'c143', '23-jan-2006', NULL);
INSERT INTO enroll (enroll_id, crn, course_id, enroll_dt, complete_dt)
    VALUES ('c21', '058/bct730', 'c143', '23-jan-2006', NULL);
```
6.
```sql
INSERT INTO enroll (enroll_id, crn, course_id)
    VALUES ( 'e23', '058/bct766', 'c22');
```

7.
```sql
SELECT * FROM student
CROSS JOIN enroll;
```

8.
```sql
SELECT * FROM student
NATURAL JOIN enroll;
```

9.
```sql
SELECT student.crn, student.name, enroll.enroll_dt FROM student
JOIN enroll ON student.crn = enroll.crn
JOIN course ON enroll.course_id = course.course_id
WHERE course.course_name = 'java';
```

10.
```sql
SELECT student.crn, student.name, student.address, enroll.enroll_dt FROM student
JOIN enroll ON student.crn = enroll.crn
WHERE enroll.enroll_dt = '1-jun-2004';
```

11.
```sql
SELECT student.name FROM student
JOIN enroll ON student.crn = enroll.crn
WHERE course_id IN (
    SELECT course_id FROM course
    WHERE course_name IN ('java', 'linux')
)
GROUP BY (enroll.crn)
HAVING count(*) >= 2;
```

12.** is getting deleted despite foreign key reference **
```sql
DELETE FROM student
WHERE crn = '058/bct779';
```

13.
```sql
DELETE FROM student
WHERE crn = (
    SELECT crn FROM enroll
    WHERE enroll_id = 'e12'
);
```

14.
```sql
DELETE FROM student
WHERE crn = (
    SELECT crn FROM enroll
    JOIN course ON enroll.course_id = course.course_id
    WHERE course.fee < 2000
);
```

15.
```sql
CREATE VIEW student_info AS
    SELECT student.crn, student.name, student.address FROM Student;
```

16.
```sql
CREATE VIEW student_course AS
    SELECT student.crn, student.name, student.phone_number, course.course_name, enroll.enroll_dt FROM student
    JOIN enroll ON student.crn = enroll.crn
    JOIN course ON enroll.course_id = course.course_id;
```

17.
```sql
CREATE VIEW linux_enrolled AS
    SELECT student.crn, student.name FROM student
    JOIN enroll ON  student.crn = enroll.crn
    JOIN course ON enroll.course_id = course.course_id
    WHERE course.course_name = 'linux';
```

18.
```sql
DROP view student_course;
```

12.
```sql
DROP table student;
```