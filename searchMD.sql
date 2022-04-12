create database  searchMD;
use searchMd;

drop database searchmd;



create table patienttable(
patientId int(4) not null auto_increment,
userId int(4),
plName varchar(500),
pfName varchar(500),
dob datetime,
insuranceId varchar(100),
userRole varchar(1) default 'p',
primary key(patientId)
 );

CREATE TABLE doctortable(
doctorId int(4) not null auto_increment,
userId int(4),
dlName varchar(500),
dfName varchar(500),
specialty varchar(500),
userRole varchar(1) default 'd',
primary key(doctorId)

);


CREATE TABLE admintable(
adminId int(4)  not null auto_increment,
userId int(4),
alName varchar(500),
afName varchar(500),
userRole varchar(1)default 'a',
primary key(adminId)
);


CREATE TABLE appointmenttable(
appId int(4)  not null auto_increment,
patientId int(4) ,
doctorId int(4) ,
appDate datetime,
primary key(appId),

FOREIGN KEY (patientId) REFERENCES patienttable(patientId) ON DELETE CASCADE, 
FOREIGN KEY (doctorId) REFERENCES doctortable(doctorId) ON DELETE CASCADE
);


CREATE TABLE usertable(
userId int(4) not null auto_increment primary key,
password varchar(500)
-- userRole varchar(1)
-- patientId int(4) ,
-- doctorId int(4) ,
-- adminId int(4),

-- FOREIGN KEY (patientId) REFERENCES PatientTable(patientId) ON DELETE CASCADE, 
-- FOREIGN KEY (doctorId) REFERENCES DoctorTable(doctorId) ON DELETE CASCADE,
-- FOREIGN KEY (adminId) REFERENCES AdminTable(adminId) ON DELETE CASCADE
);



-- insert into PatientTable(userId, plName , pfName, dob, insuranceId,  userRole) values ('2','Taylor','Ellis','2019-06-19','898080', 'p');
-- insert into PatientTable(patientId , userId, plName , pfName, dob, insuranceId) values ('2','1','Meyers','Adele','2019-06-19','898080');

-- insert into DoctorTable(doctorId ,userId, dlName , dfName, specialty) values ('4','3','Smith','Bob','genereal');
-- insert into DoctorTable(doctorId ,userId, dlName , dfName, specialty) values ('8','4','Boyer','Anna','brain');
-- insert into DoctorTable(doctorId , userId, dlName , dfName, specialty) values ('10','5','Monroe','John','genereal');

-- insert into AdminTable(adminId ,userId, alName , afName) values ('2','6','Admin','Bob');
-- insert into AdminTable(adminId ,userId, alName , afName) values ('8','7','Admin2','Anna');
-- insert into AdminTable(adminId ,userId, alName , afName) values ('10','8','Admin3','John');

-- insert into UserTable(userId , password ) values ('1','User1');
-- insert into UserTable(userId , password ) values ('2','User2');
-- insert into UserTable(userId , password ) values ('3','User3');
-- insert into UserTable(userId , password ) values ('4','User1');
-- insert into UserTable(userId , password ) values ('5','User2');
-- insert into UserTable(userId , password ) values ('6','User3');
-- insert into UserTable(userId , password ) values ('7','User3');
-- insert into UserTable(userId , password ) values ('8','User3');

-- insert into AppointmentTable(appId  , patientId, doctorId, appDate) values ('44','2','8', '2022-01-13');


-- inner join patientTable
-- on userTable.userId = patientTable.userId;