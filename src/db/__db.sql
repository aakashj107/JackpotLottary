--To connect locally to postgres--
--psql -U postgres;

--To connect to external postgres db--
--psql -h hostname -d databasename -U username;


-- CREATE DATABASE cumin; --Create a new table/database named cumin

-- \c cumin; --Change the location to the newly created cumin database

CREATE TABLE app_user( 
retailerid SERIAL PRIMARY KEY, 
login_id VARCHAR(255) NOT NULL UNIQUE, 
hashed_password VARCHAR(255) NOT NULL, 
retailer_name VARCHAR(255) NOT NULL, 
mobile_number bigint,address VARCHAR(255),
pincode bigint,
balance bigint,
login_status varchar(255),
account_lock varchar(10)
);


insert into app_user
(login_id,hashed_password,retailer_name,mobile_number,address,pincode,balance,login_status,account_lock)  
values 
('RET0001','$2a$10$XdHsgoUyTTvaOL0QCFquxemDG85ZV5fgozzsLkTv0OL6Nu5PeO1hG','DEMO',9819981980,'Dadar',400016,108000,'ACTIVE','NO');


create table daily_game_master(gameid SERIAL PRIMARY KEY,gamename varchar(255),starttime varchar(255),endtime varchar(255))
 
insert into daily_game_master(gamename,starttime,endtime) values 
('game01','09:00:00','09:19:00'),
('game02','09:20:00','09:39:00'),
('game03','09:40:00','09:59:00'),
('game04','10:00:00','10:19:00'),
('game05','10:20:00','10:39:00'),
('game06','10:40:00','10:59:00'),
('game07','11:00:00','11:19:00'),
('game08','11:20:00','11:39:00'),
('game09','11:40:00','11:59:00'),
('game10','12:00:00','12:19:00'),
('game11','12:20:00','12:39:00'),
('game12','12:40:00','12:59:00'),
('game13','13:00:00','13:19:00'),
('game14','13:20:00','13:39:00'),
('game15','13:40:00','13:59:00'),
('game16','14:00:00','14:19:00'),
('game17','14:20:00','14:39:00'),
('game18','14:40:00','14:59:00'),
('game19','15:00:00','15:19:00'),
('game20','15:20:00','15:39:00'),
('game21','15:40:00','15:59:00'),
('game22','16:00:00','16:19:00'),
('game23','16:20:00','16:39:00'),
('game24','16:40:00','16:59:00'),
('game25','17:00:00','17:19:00'),
('game26','17:20:00','17:39:00'),
('game27','17:40:00','17:59:00'),
('game28','18:00:00','18:19:00'),
('game29','18:20:00','18:39:00'),
('game30','18:40:00','18:59:00'),
('game31','19:00:00','19:19:00'),
('game32','19:20:00','19:39:00'),
('game33','19:40:00','19:59:00'),
('game34','20:00:00','20:19:00'),
('game35','20:20:00','20:39:00'),
('game36','20:40:00','20:59:00'),
('game37','21:00:00','21:19:00'),
('game38','21:20:00','21:39:00'),
('game39','21:40:00','21:59:00'),
('game40','22:00:00','22:19:00'),
('game41','22:20:00','22:39:00'),
('game42','22:40:00','22:59:00'),
('game43','23:00:00','23:19:00'),
('game44','23:20:00','23:39:00'),
('game45','23:40:00','23:59:00')


create table daily_game_details(
  dailyGameID SERIAL PRIMARY KEY, retailerID integer, 
  gameID integer, created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

Create table current_lottery_details(
  lotteryDetailID SERIAL PRIMARY KEY, 
  dailyGameID integer, lottery_number integer, 
  lottery_amt integer, created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

create table current_lottery(
  lotteryID SERIAL PRIMARY KEY, dailyGameID integer, 
  lottery_number integer, created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
) 
