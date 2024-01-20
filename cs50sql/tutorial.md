# SQL tutorial

## Write SQL query to solve the following questions using the schema given below:
> STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC/MUNICIPALITY, PROGRAM, BATCH, PHONE)

> ACCOUNT(CRN, ACCOUNT_ID, FEE, PAID_MONEY)

- Table creation
```sql
CREATE TABLE STUDENT (
    CRN VARCHAR(50) PRIMARY KEY,
    FNAME VARCHAR(50),
    LNAME VARCHAR(50),
    DOB DATE,
    AGE INT,
    DISTRICT VARCHAR(50),
    WARD_NO INT,
    VDC_MUNICIPALITY VARCHAR(50),
    PROGRAM VARCHAR(50),
    BATCH INT,
    PHONE VARCHAR(10)
);

CREATE TABLE ACCOUNT (
    CRN VARCHAR(50),
    ACCOUNT_ID INT PRIMARY KEY,
    FEE FLOAT,
    PAID_MONEY FLOAT,
    FOREIGN KEY (CRN) REFERENCES STUDENT(CRN) ON DELETE CASCADE
);
```
- Inserting data
```sql
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex025', 'Derrick', 'Wilson', '2003-02-03', 24, 'Dharan', 6, 'Jenniferbury', 'BEX', 2078, '9825377615');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex026', 'Jonathan', 'Alexander', '2002-10-15', 21, 'Lalitpur', 10, 'Elizabethville', 'BEX', 2076, '9834540773');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex027', 'Donna', 'Garcia', '1999-11-05', 25, 'Kathmandu', 7, 'South Tammyberg', 'BCE', 2078, '9897213146');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex028', 'Tammy', 'Zavala', '2002-07-24', 22, 'KTM', 4, 'Lake Christopher', 'BCE', 2078, '9826775950');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex029', 'Courtney', 'Daniel', '2000-09-05', 24, 'Chitwan', 8, 'East James', 'BCE', 2077, '9840801344');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex030', 'Steven', 'Andersen', '2003-09-02', 24, 'Itahari', 6, 'West Kristine', 'BCE', 2079, '9854000230');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex031', 'Gabriela', 'Harmon', '2001-09-21', 22, 'Chitwan', 10, 'West Donna', 'BCT', 2077, '9835433197');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex032', 'Donna', 'Guerrero', '1999-09-16', 22, 'Dharan', 8, 'East Leslietown', 'BCT', 2079, '9899940488');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex033', 'John', 'Buck', '2002-12-25', 21, 'Pokhara', 2, 'Hudsonmouth', 'BEX', 2077, '9824062669');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex034', 'Amanda', 'Knox', '2002-05-09', 20, 'Nepalgunj', 2, 'Lake Monica', 'BEX', 2077, '9816712505');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex035', 'Michele', 'Nolan', '2000-02-15', 24, 'Chitwan', 1, 'Lake Courtney', 'BCE', 2077, '9844716336');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex036', 'Miguel', 'Shaw', '2003-10-29', 23, 'Biratnagar', 7, 'Clarkhaven', 'BCT', 2078, '9881949916');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex037', 'Alicia', 'Bentley', '2003-11-05', 23, 'Pokhara', 10, 'Smithstad', 'BEX', 2079, '9877119168');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex038', 'Gwendolyn', 'Wiley', '1998-04-18', 25, 'Chitwan', 7, 'Whiteburgh', 'BEX', 2079, '9898239475');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex039', 'Joseph', 'Mcmillan', '1999-01-04', 21, 'Bhaktapur', 10, 'New Tiffany', 'BCE', 2078, '9842327439');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex040', 'Claire', 'Carpenter', '2003-03-15', 23, 'Bhaktapur', 9, 'West Eric', 'BEX', 2077, '9877917204');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex041', 'Kathleen', 'Rogers', '2002-10-24', 24, 'Lalitpur', 1, 'Williamtown', 'BCE', 2079, '9877208424');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex042', 'Zachary', 'Robinson', '1998-06-10', 20, 'Bhaktapur', 8, 'Laurastad', 'BCE', 2079, '9823309810');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex043', 'Eric', 'Harris', '2000-01-02', 24, 'Itahari', 9, 'Perryside', 'BCT', 2078, '9877082892');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex044', 'John', 'Martin', '1999-06-24', 20, 'Bhaktapur', 9, 'East Tiffanyshire', 'BEX', 2077, '9889461397');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex045', 'Brandon', 'Sanchez', '2000-05-02', 23, 'Biratnagar', 6, 'Tiffanyshire', 'BEX', 2077, '9848994136');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex046', 'Tracy', 'Beck', '2003-08-17', 21, 'Dharan', 2, 'Nelsonburgh', 'BCT', 2079, '9886317010');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex047', 'Lori', 'Torres', '1999-05-09', 23, 'Biratnagar', 4, 'Rodriguezmouth', 'BCT', 2077, '9856618655');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex048', 'Jessica', 'Bernard', '2003-11-15', 24, 'Pokhara', 6, 'Maddenstad', 'BCT', 2078, '9832638456');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex049', 'Tamara', 'Edwards', '1999-09-18', 22, 'Dharan', 9, 'Jenniferburgh', 'BCE', 2077, '9891200484');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex050', 'Carolyn', 'Perry', '2003-03-02', 23, 'Dharan', 7, 'Jenningstown', 'BCT', 2079, '9856511297');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex051', 'Craig', 'Howard', '2003-12-21', 23, 'Itahari', 5, 'South Jacob', 'BEX', 2078, '9880792138');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex052', 'Jennifer', 'Butler', '2003-10-04', 22, 'Kathmandu', 4, 'South Richard', 'BEX', 2077, '9861976287');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex053', 'Danny', 'Murphy', '2000-04-04', 20, 'Lalitpur', 5, 'Fisherborough', 'BCE', 2076, '9844777866');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex054', 'Courtney', 'Williamson', '2003-03-17', 23, 'Butwal', 10, 'South Richard', 'BCT', 2076, '9818794131');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex055', 'Leah', 'Thompson', '1998-01-26', 25, 'Butwal', 2, 'Joshuachester', 'BEX', 2079, '9835795339');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex056', 'Mandy', 'Armstrong', '1999-08-06', 21, 'Dharan', 4, 'East Christopherberg', 'BEX', 2077, '9881230410');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex057', 'Jorge', 'Marshall', '1999-01-16', 21, 'Lalitpur', 5, 'Port Stephen', 'BCT', 2078, '9869012441');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex058', 'Brandon', 'Johnson', '2003-03-01', 24, 'Kathmandu', 9, 'South Toni', 'BEX', 2077, '9874780944');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex059', 'Marcus', 'Matthews', '2002-07-13', 21, 'Dharan', 7, 'New Rebecca', 'BCT', 2078, '9878624383');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex060', 'Craig', 'Lopez', '2003-09-12', 22, 'Bhaktapur', 1, 'Eddiechester', 'BCE', 2079, '9892651566');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex061', 'Monica', 'Mclean', '2003-06-17', 23, 'Lalitpur', 4, 'New Shanehaven', 'BCT', 2078, '9830741247');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex062', 'Ryan', 'Harris', '2001-10-20', 23, 'Biratnagar', 1, 'Longville', 'BEX', 2079, '9878094606');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex063', 'Michael', 'Williams', '2000-08-29', 21, 'Bhaktapur', 7, 'Kristenborough', 'BEX', 2076, '9893179563');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex064', 'Melinda', 'Cantu', '2003-11-01', 24, 'Lalitpur', 6, 'East Jesse', 'BCE', 2076, '9878519444');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex065', 'Dustin', 'Baker', '2000-12-11', 24, 'Kathmandu', 5, 'West Stevenhaven', 'BCT', 2077, '9890885564');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex066', 'Alexander', 'Hansen', '2003-03-16', 25, 'Dharan', 3, 'Grossberg', 'BEX', 2077, '9857077363');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex067', 'Tyler', 'Nguyen', '1998-12-02', 24, 'Chitwan', 8, 'Romerofort', 'BCE', 2079, '9844476467');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex068', 'Garrett', 'Burns', '2001-12-19', 25, 'Kathmandu', 10, 'Barronport', 'BEX', 2078, '9894990438');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex069', 'Samantha', 'Thornton', '2002-08-29', 24, 'Dharan', 7, 'Port April', 'BEX', 2079, '9823636276');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex070', 'Brian', 'Lucas', '2000-02-03', 24, 'Kathmandu', 7, 'Samanthabury', 'BCT', 2077, '9834813391');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex071', 'Carrie', 'Massey', '2003-01-08', 21, 'Biratnagar', 3, 'Chelseyside', 'BCE', 2079, '9843989770');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex072', 'Elizabeth', 'Flores', '2001-05-11', 25, 'Bhaktapur', 2, 'North Patrickmouth', 'BCT', 2076, '9858987330');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex073', 'Scott', 'Williams', '2000-05-02', 24, 'Lalitpur', 9, 'South Jennifer', 'BEX', 2076, '9830940928');
INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('kan079bex074', 'Jennifer', 'Mack', '2000-10-08', 21, 'Butwal', 9, 'Wardberg', 'BCE', 2078, '9843331886');
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex025', 25, 820000, 196642.56);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex026', 26, 1090000, 101755.71);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex027', 27, 1090000, 844216.2);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex028', 28, 1060000, 20000);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex029', 29, 810000, 318212.39);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex030', 30, 990000, 466901.1);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex031', 31, 930000, 433655.47);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex032', 32, 920000, 721341.44);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex033', 33, 1290000, 625349.87);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex034', 34, 1080000, 834081.81);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex035', 35, 860000, 20000);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex036', 36, 990000, 355206.2);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex037', 37, 1000000, 859773.55);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex038', 38, 900000, 527506.65);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex039', 39, 1030000, 758729.48);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex040', 40, 910000, 403062.55);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex041', 41, 840000, 530870.12);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex042', 42, 1100000, 305163.01);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex043', 43, 1050000, 946061.31);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex044', 44, 980000, 830910.75);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex045', 45, 830000, 151654.97);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex046', 46, 870000, 499154.29);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex047', 47, 840000, 10235.63);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex048', 48, 900000, 574220.63);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex049', 49, 1200000, 1050935.87);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex050', 50, 850000, 473459.92);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex051', 51, 1040000, 241691.45);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex052', 52, 1140000, 924097.44);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex053', 53, 820000, 350462.83);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex054', 54, 1170000, 326900.84);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex055', 55, 1290000, 488724.74);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex056', 56, 1200000, 925392.79);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex057', 57, 870000, 737712.03);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex058', 58, 1130000, 602252.17);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex059', 59, 1200000, 410695.07);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex060', 60, 1270000, 196712.24);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex061', 61, 980000, 497584.63);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex062', 62, 1190000, 720445.08);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex063', 63, 970000, 587386.67);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex064', 64, 1220000, 1216241.7);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex065', 65, 900000, 8351.2);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex066', 66, 970000, 790041.48);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex067', 67, 1160000, 650027.48);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex068', 68, 860000, 456790.8);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex069', 69, 820000, 809250.18);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex070', 70, 830000, 360509.06);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex071', 71, 1290000, 1249255.36);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex072', 72, 890000, 346514.96);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex073', 73, 1080000, 629460.94);
INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('kan079bex074', 74, 1020000, 180086.52);

```

- Find Name (combine FNAME and LNAME) of students who study in either BCT or BEX

```sql
SELECT (FNAME||" "||LNAME) AS Name 
FROM STUDENT
WHERE PROGRAM IN ('BCT', 'BEX');
```
> For ORACLE, SQL server, Mysql, PostgreSQL you can use CONCAT() function.
```sql
SELECT CONCAT(FNAME," ",LNAME) AS Name 
FROM STUDENT
WHERE PROGRAM IN ('BCT', 'BEX');
```
> This is for SQLITE, POSTFRESQL
> For SQL server, use (FNAME+' '+LNAME)

- Find FNAME of students between age 20 to 25
```sql
SELECT FNAME FROM STUDENT
WHERE AGE BETWEEN 20 AND 25;
```

- Find ACCOUNT_ID of the student whose age is 20
```sql
SELECT ACCOUNT_ID FROM ACCOUNT
WHERE CRN IN (
    SELECT CRN FROM STUDENT
    WHERE age = 20
);
```

- Find FNAME of the students whose last name begin form 'S'
```sql
SELECT FNAME FROM student
WHERE lname LIKE 'S%';
```

- Find FNAME of student who is the youngest of the college
```sql
SELECT FNAME FROM student
WHERE dob = (
    SELECT MIN(dob) FROM student
);
```

- Find CRN and FNAME of the students whose LNAME has at least five characters
```sql
SELECT CRN,fname FROM student
WHERE lname like '_____%';
```
> PostgreSQL and MySQL support regular expression too

- Sort the list of students according to age in ascending order. If there are number of students having [Title](https://chat.openai.com/c/4da2aab6-8ab0-4c6e-aeea-9afcdf77626b)same age then sort them in descending order according to first name

```sql
SELECT * FROM student
ORDER BY age ASC, fname DESC;
```

- Find the name of the students who live in KTM district and paid money is 20000.

```sql
SELECT fname, lname FROM student
JOIN account on student.crn = account.crn
WHERE district = 'KTM' and paid_money = 20000;
```

- Count the total number of studens in each ward of Lalitpur metropolitan city
```sql
SELECT ward_no, COUNT(*) FROM student
WHERE district = 'Lalitpur'
GROUP BY ward_no;
```

- Find the eldest person in each batch
```sql
SELECT MIN(dob) FROM student
GROUP BY batch;
```

- Find the name of students whose age and batch is same as of Rita
```sql
SELECT FNAME, LNAME FROM student
WHERE age = (
    SELECT age FROM student
    WHERE fname = 'Rita'
) AND batch = (
    SELECT batch FROM student
    WHERE fname = 'Rita'
);
```

- Find the program and average age of students in each program that average age greater than 20
```sql
SELECT program, AVG(age) FROM student
GROUP BY program
HAVING AVG(age) > 20;
```

- Display name and account_id of student who live in chitwan district
```sql
SELECT (fname||' '||lname) AS name,account_id FROM student
JOIN account ON student.crn = account.crn
WHERE district = 'Chitwan';
```

- Find the total number of computer students in each batch
```sql
SELECT batch, COUNT(*) FROM student
WHERE PROGRAM = 'BCT'
GROUP BY batch;
``` 

- Find the name of students whose age is same as age of Ram
> name isn't unique key. So lets get 1
```sql
SELECT (fname||' '||lname) AS name FROM student
WHERE age = (
    SELECT age FROM student
    WHERE fname = 'Ram'
)
```

- Find the name of student who are elder than the some student that live in KTM district.
> Huh?

- Delete record of students who live in Kathmandu city.

```sql
DELETE FROM account
WHERE crn IN (
    SELECT crn FROM student
    WHERE district = 'Kathmandu'
);
DELETE FROM student
WHERE district = 'Kathmandu';
```

- Delete a record of students whose district is same as that of Hari

```sql
DELETE FROM student
WHERE district = (
    SELECT district FROM student
    WHERE fname = 'Hari'
);
```

- Change the batch 2066 to 2068 of all students whose program is BCT

```sql
UPDATE student
SET batch = 2068
WHERE program = 'BCT' AND batch = 2066;
```

- Update the batch of all the student from 2066 to 2068, 2067 to 2069 and rest batch as it is of all student

```sql
UPDATE student
SET batch = batch + 2
WHERE batch = 2066 OR batch = 2067;
```

## Past Questions:

### Question no. 1
Consider the following relational database model:
    Hotel (Hotel_No, Name, Address)
    Room (Room_No, Hotel_No, Type, Price)
    Booking (Hotel_No, Guest_No, Date_From, Date_To, Room_No)
    Guest (Guest_No, Name, Address)

Write SQL statement for the following.

a. List all the guests who have booked rooms at the Everest Hotel.
```sql
SELECT Name FROM Guest
WHERE Guest_No IN (
    SELECT Guest_No FROM Booking
    JOIN Hotel ON Booking.Hotel_No = Hotel.Hotel_No
    WHERE Hotel.Name = 'Everest Hotel'
)
```
b. Create a view to expose only the hotel_No, Guest_No, Room_No, and price of all booked rooms.
```sql
CREATE VIEW view1 AS
SELECT Booking.Hotel_No, Booking.Guest_No, Booking.Room_No, Room.Price FROM Booking
JOIN Room ON Booking.Room_No = Room.Room_No AND Booking.Hotel_No = Room.Hotel_No;
```
c. Find the total cost of the deluxe rooms at Everest hotel after offering a 5% discount.
```sql
SELECT SUM(Price)*0.95 FROM Room
JOIN Hotel ON Room.Hotel_No = Hotel.Hotel_No
WHERE Hotel.Name = 'Everest Hotel';
```

d. Identify the hotel name which has the highest total guests.

```sql
SELECT Name FROM Hotel
WHERE Hotel_No IN (
    SELECT Hotel_No FROM (
        SELECT Hotel_No, COUNT(*) as count FROM Booking
        GROUP BY Hotel_No
    ) AS counts
    WHERE count = (
        SELECT MAX(count) FROM (
            SELECT COUNT(*) as count FROM Booking
            GROUP BY Hotel_No
        ) AS max_count
    )
)
```

### Question no 2.

For the relational database model given in the question above. Write the relational algebraic expression for the following:

a. List the names of hotels in Kathmandu
b. List the name of hotels and their available types of room with price.
c. List the guest names who have booked deluxe room at Everest Hotel.
d. List total number of rooms booked(types wise) of the Everest Hotel.

### Question no 3.
Consider following relational schema:
    Tblsalesman (S_id, name,city, commission)
    Tblorders (Ord_no, prch_amt, ord_date, c_id, s_id)
    TblCustomer (C_Id, name, city, grade, s_Id)

Write SQL query expression to:

a. Find those salesman with all information whose name containing the 1st character is ‘N’ and the 4th character as ‘R’ and rest may be any character.
```sql
SELECT * FROM Tblsalesman
    WHERE name LIKE "N__R%";
```

b. Find the highest purchases amount on a date ‘2017-07-17’ for each salesman with their ID.
```sql
SELECT s_id, MAX(prch_amt) FROM Tblorders
    WHERE ord_date = '2017-07-17'
    GROUP BY s_id;
```
c. Count the customers with grades above Kathmandu’s average.
```sql
SELECT COUNT(*) FROM TblCustomer
    WHERE grade > (
        SELECT AVG(grade) FROM TblCustomer
        WHERE city = "Kathmandu";
    );
```
d. Increase commission of salesman by 2% if they are from humla.
```sql
UPDATE Tblsalesman
    SET commission = commission*1.02
    WHERE city = "humla";
```

### Question no 4.
Consider the following relational database model:
    Author (a_name,citizenship,birthYear)
    Book (isbn,title,a_name)
    Topic(isbn,subject)
    Branch(libname,city)
    Instock(isbn,libname,quantity)

Write the relational algebra expression for the following:
a. Give the cities where each book is held.
b. Give the title and author of each book of which least two copies are held in a branch located in
Kathmandu.
c. Delete those books that are from author ‘xyz’
d. list total no.of availabae books of each subjects.


### Question no 5.
Consider the relational database as follows:
    Worker (worker_id,First_name,last_name,Salary,Joining _date,department)
    Bonus (worker_id,bonus_amount,bonus_date)
    Title (worker_id,worker_title,affected_from)

a. Write an expression in SQL to fetch unique values of department from worker table
```sql
SELECT DISTINCT(department) FROM Worker;
```
b. Write an expression in sql to print details of workers with department names as “Admin”
```sql
SELECT * FROM Workers
WHERE department = "Admin";
```
c. Write and expression in SQL to print details of works who are also Managers.
```sql
SELECT * FROM Worker
JOIN Title ON Worker.worker_id = Title.worker_id
WHERE Title.worker_title = "Manager";
```
d. Write an expression in SQL to show the second highest salary from a table.
```sql
SELECT MIN(Salary) FROM (
    SELECT Salary FROM Worker
    WHERE Salary <> (
        SELECT MAX(Salary) FROM Worker
    )
);
```

### Question no 6.
Consider the following relational model:
    Passenger (Pid,pname,pgneder,pcity)
    Agency (aid,aname,acity)
    Flight (fid,fdate,time,src,dest)
    Booking (pid,aid,fid,fdate)

a. Write an expression in relational algebra to get the details about all flights from Kathmandu to Biratnagar.
b. Write an expression is relational algebra to find only the flight numbers for passengers with pid is 123 for flights to Kathmandu before 06/11/2020.
c. Write a skeleton table in QBE to find the details of all male passengers who are associated with jet agency.

### Question no 7.
Consider the following relational data model
    Student (crn,name,address,phone,dob)
    Course (coursed,crn,duration,fee)
    Enroll (enrolled,cname,coursed,enrolldate,completedate)

a. Write the SQL statements required to create the above relations including appropriate versions of all primary key integrity constraints.
```sql
CREATE TABLE Student (
    crn VARCHAR(10) PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(100),
    phone INTEGER,
    dob date
);

CREATE TABLE Course (
    coursed VARCHAR(20) PRIMARY KEY,
    crn VARCHAR(20),
    DURATION INTEGER,
    FEE INTEGER,
    FOREIGN KEY (crn) REFERENCES Student(crn) ON DELETE CASCADE
);

CREATE TABLE Enroll (
    enrolled VARCHAR(20) PRIMARY KEY,
    cname VARCHAR(20),
    coursed VARCHAR(20),
    enrolldate date,
    completedate date,
    FOREIGN KEY (coursed) REFERENCES Course(coursed)
)
```

b. Write an expression in SQl to find crn ,names and enroll date of all students who have taken the course ‘Java’(cname)
```sql
SELECT Student.crn, Student.name, Enroll.enrolldate
FROM Student
JOIN Course ON Student.crn = Course.crn
JOIN Enroll ON Course.coursed = Enroll.coursed
WHERE Enroll.cname = 'Java';
```
c. Write SQL to find names and address of all students who have taken both course Java and Linux.
```sql
SELECT s.name, s.address
FROM Student s
JOIN Course c ON s.crn = c.crn
JOIN Enroll e ON c.coursed = e.coursed
WHERE e.cname IN ('Java', 'Linux')
GROUP BY s.crn, s.name, s.address
HAVING COUNT(DISTINCT e.cname) = 2;
```

d. Write an expression to SQL yo create a view ‘Student_Course”having the attributes
Crn,Name,Phone,Course_name,enrolldate
```sql
CREATE VIEW Student_Course AS
SELECT S.crn, S.name, S.phone, C.cname AS Course_name, E.enrolldate
FROM Student S
JOIN Course C ON S.crn = C.crn
JOIN Enroll E ON C.coursed = E.coursed;
```

### Question no 8.
Consider the Following relational model
    Passenger (Pid,pname,pgender,pbirthplace)
    Agency (aid,aname,acity)
    Flight (fid,fdate,time,source,destination)
    Booking (pid,aid,fid,bookdate,amount)

a. find all the passenger details who are travelling from Kathmandu to Pokhara
```sql
SELECT p.*
FROM Passenger p
JOIN Booking b ON p.Pid = b.pid
JOIN Flight f ON b.fid = f.fid
WHERE f.source = 'Kathmandu' AND f.destination = 'Pokhara';
```
b. Update the booking amount with 10% discount if the flight destination is same as the passenger’s birth city.
```sql
UPDATE Booking
SET amount = amount * 0.9
WHERE fid IN (
    SELECT f.fid
    FROM Flight f
    JOIN Passenger p ON Booking.pid = p.Pid
    WHERE f.destination = p.pbirthplace
);
```
c. Create a view names “EsewaReport” in which calculate the total amount of booking made in the current date through agency name “Esewa”.
```sql
CREATE VIEW EsewaReport AS
SELECT SUM(b.amount) AS total_amount
FROM Booking b
JOIN Agency a ON b.aid = a.aid
WHERE a.aname = 'Esewa' AND b.bookdate = CURDATE();
```
d. List flight wise total number of booking for current date.
```sql
SELECT f.fid, COUNT(*) AS total_bookings
FROM Flight f
JOIN Booking b ON f.fid = b.fid
WHERE b.bookdate = CURDATE()
GROUP BY f.fid;
```

### Question no 9.

Consider the following relational database model :
    Employee (eid,ename,phone,address)
    Department (dept-id,dname,block)
    Designation (did,title,salary)
    Works (eid,deptid,did,effective_date)

Write relational algebra expression for the following:
a. List all the designation title with starting letter ‘M’
b. List the names and id of employees who worked for 10 years in the same department.
c. Find the total salary that should be paid by organization every month.
d. List all the employees who are from Ktm and works in ADMIN department

### Question no 10.
For the relational model given in Q 13 Write SQL statements for the following:
1. List the names, email of all employees from electronic department who have joined the department this month.
```sql
SELECT e.ename, e.email
FROM Employee e
JOIN Works w ON e.eid = w.eid
JOIN Department d ON w.deptid = d.dept-id
WHERE d.dname = 'electronic' AND MONTH(w.effective_date) = MONTH(CURRENT_DATE) AND YEAR(w.effective_date) = YEAR(CURRENT_DATE);
```
2. List the name, designation of the employees with their monthly salary.
```sql
SELECT e.ename, d.title, d.salary
FROM Employee e
JOIN Works w ON e.eid = w.eid
JOIN Designation d ON w.did = d.did;
```
3. List the name of departments having more than 10 employees.
```sql
SELECT d.dname
FROM Department d
JOIN Works w ON d.dept-id = w.deptid
GROUP BY d.dname
HAVING COUNT(*) > 10;
```
4. Find the highest paying employee’s name for each department.
```sql
SELECT d.dname, e.ename, MAX(dg.salary) as max_salary
FROM Employee e
JOIN Works w ON e.eid = w.eid
JOIN Department d ON w.deptid = d.dept-id
JOIN Designation dg ON w.did = dg.did
GROUP BY d.dname;
```

### Question no 11.
Consider the relational model.
    Employee (empid,empname,address,title)
    Project (Pid,pname,budget,location)
    Assignment (empid,pid,responsibility,duration)
    Payment (title,salary)

a. Write SQL to count the number of projects with the duration more than 2 years.
```sql
SELECT COUNT(*)
FROM Assignment
WHERE duration > 2; -- assuming duration is in years
```
b. Write SQL query to find the name of engineers working in ICTC project and earning salary more than 20K.
```sql
SELECT e.empname
FROM Employee e
JOIN Assignment a ON e.empid = a.empid
JOIN Project p ON a.pid = p.Pid
JOIN Payment pay ON e.title = pay.title
WHERE p.pname = 'ICTC' AND pay.salary > 20000;
```
c. Write SQL query to update salary of employees by 5% if salary less than 10K by 7% if salary between 10K and 20K and ,by 9% if salary greater than 20K.
```sql
UPDATE Payment
SET salary = CASE
    WHEN salary < 10000 THEN salary * 1.05
    WHEN salary BETWEEN 10000 AND 20000 THEN salary * 1.07
    ELSE salary * 1.09
END;
```
d. Write relational algebra to find the projects having budget more than 500k

e. Write relational algebra to list the employees working for more than 10 years in CAD/CAM project.

f. Write relational algebra to find the name and salary of employee working in Kathmandu.

g. Give an expression in QBE to find the employee name and address who have salary greater than 50K.

### Question no 12.
Consider the following relational database.
    Sailor (Sailorid,sname,rating,age)
    Boat (boated,boatname,color)
    Reserves (Sailorid,boated,date)

Write relational algebra expression for the following.
1. Find the names of sailor who has reserved boat number 105.
2. Find the names of sailors who have reserved a red boat.
3. Find thr name of all sailor who have beem reserved either a red boat or a green boat.

### Question no 13.
Consider the following relational database model :
    Passenger (pid,pname,pgender,pbirthplace)
    Agency (aid,aname,acity)
    Flight (fid,fdate,time,source,destination)
    Booking (pid,aid,fid,bookdate,amount)
    
Write relational algebraic expression for the following:
a. Find the details of all flights to “Kathmandu”
b. Find the names of all passengers who have booked at least one flight.
c. List the names of all agencies who have made highest booking till date.
d. Find all the passengers who have booked from agency “Esewa”