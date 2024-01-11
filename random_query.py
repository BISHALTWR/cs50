import random
import faker
fake = faker.Faker()

districts = ['Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur', 'Chitwan', 'Butwal', 'Dharan', 'Biratnagar', 'Nepalgunj', 'Itahari']
programs = ['BCT', 'BEX', 'BCE']

for i in range(25, 75):
    crn = f'kan079bex{i:03d}'
    fname = fake.first_name()
    lname = fake.last_name()
    dob = fake.date_of_birth(minimum_age=20, maximum_age=25).isoformat()
    age = random.randint(20, 25)
    district = random.choice(districts)
    ward_no = random.randint(1, 10)
    vdc_municipality = fake.city()
    program = random.choice(programs)
    batch = random.randint(2076, 2079)
    phone = f'98{random.randint(10000000, 99999999)}'
    print(f"INSERT INTO STUDENT (CRN, FNAME, LNAME, DOB, AGE, DISTRICT, WARD_NO, VDC_MUNICIPALITY, PROGRAM, BATCH, PHONE) VALUES ('{crn}', '{fname}', '{lname}', '{dob}', {age}, '{district}', {ward_no}, '{vdc_municipality}', '{program}', {batch}, '{phone}');")

for i in range(25, 75):
    crn = f'kan079bex{i:03d}'
    account_id = i
    fee = round(random.uniform(80.00, 130.00))*10000
    paid_money = round(random.uniform(0.00, fee), 2)
    print(f"INSERT INTO ACCOUNT (CRN, ACCOUNT_ID, FEE, PAID_MONEY) VALUES ('{crn}', {account_id}, {fee}, {paid_money});")