create database  searchMD;
use searchMd;

-- drop database searchmd;



create table patienttable(
patientid int(4) not null auto_increment,
userid int(4),
plname varchar(500),
pfname varchar(500),
dob datetime,
insuranceid varchar(100),
userrole varchar(1) default 'p',
primary key(patientid)
 );

drop table if exists doctortable;
CREATE TABLE doctortable(
doctorid int(4) not null auto_increment,
userid int(4),
dlname varchar(500),
dfname varchar(500),
specialty varchar(500),
userrole varchar(1) default 'd',
zipcode int(5),
primary key(doctorid)

);


CREATE TABLE admintable(
adminid int(4)  not null auto_increment,
userid int(4),
alname varchar(500),
afname varchar(500),
userrole varchar(1)default 'a',
primary key(adminid)
);

drop table if exists appointmenttable;
CREATE TABLE appointmenttable(
appid int(4)  not null auto_increment,
patientid int(4) ,
doctorid int(4) ,
appdate datetime,
primary key(appid),

FOREIGN KEY (patientid) REFERENCES patienttable(patientid) ON DELETE CASCADE, 
FOREIGN KEY (doctorid) REFERENCES doctortable(doctorid) ON DELETE CASCADE
);

DROP TABLE IF EXISTS usertable;
CREATE table usertable(
userid int(4) not null auto_increment primary key,
email varchar(500) not null unique,
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