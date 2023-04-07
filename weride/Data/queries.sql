-- SQLite
/*CREATE TABLE userTable(
   userId INTEGER PRIMARY KEY AUTOINCREMENT,
   firstname VARCHAR(50),
   pseudo VARCHAR(50),
   mail VARCHAR(50),
   phoneNumber VARCHAR(50),
   birthDate VARCHAR(10),
   password VARCHAR(50)
);

CREATE TABLE motoTable(
   motoId INTEGER PRIMARY KEY AUTOINCREMENT,
   motoType VARCHAR(50),
   purchaseDate VARCHAR(10),
   description VARCHAR(50),
   rate VARCHAR(50)
);

CREATE TABLE tripTable(
   tripId INTEGER PRIMARY KEY AUTOINCREMENT,
   startingPoint VARCHAR(50),
   arrivalPoint VARCHAR(50),
   distance VARCHAR(50),
   tripDate VARCHAR(10),
   gpxTrace VARCHAR(50)
);

CREATE TABLE userTrip(
   tripId INTEGER PRIMARY KEY AUTOINCREMENT,
   userId INT,
   FOREIGN KEY(tripId) REFERENCES tripTable(tripId),
   FOREIGN KEY(userId) REFERENCES userTable(userId)
);

CREATE TABLE photoU(
   PhotoId INTEGER PRIMARY KEY AUTOINCREMENT,
   Link VARCHAR(50),
   userId INT NOT NULL,
   UNIQUE(userId),
   FOREIGN KEY(userId) REFERENCES userTable(userId)
);

CREATE TABLE photoP(
   motoId INTEGER PRIMARY KEY AUTOINCREMENT,
   PhotoId INT,
   Link VARCHAR(50),
   UNIQUE(motoId),
   FOREIGN KEY(motoId) REFERENCES motoTable(motoId)
);

CREATE TABLE rate(
   RateId INTEGER PRIMARY KEY AUTOINCREMENT,
   Rate VARCHAR(50),
   Text VARCHAR(50),
   motoId INT NOT NULL,
   userId INT NOT NULL,
   FOREIGN KEY(motoId) REFERENCES motoTable(motoId),
   FOREIGN KEY(userId) REFERENCES userTable(userId)
);

CREATE TABLE groupTable(
   groupId INTEGER PRIMARY KEY AUTOINCREMENT,
   groupName VARCHAR(50),
   creationDate VARCHAR(10),
   description VARCHAR(50)
);

CREATE TABLE friendship(
   friendshipId INTEGER PRIMARY KEY AUTOINCREMENT,
   friendId VARCHAR(50),
   userId INT NOT NULL,
   FOREIGN KEY(userId) REFERENCES userTable(userId)
);

CREATE TABLE userGroup(
   userId INTEGER PRIMARY KEY AUTOINCREMENT,
   groupId INT,
   FOREIGN KEY(userId) REFERENCES userTable(userId),
   FOREIGN KEY(groupId) REFERENCES groupTable(groupId)
);*/

INSERT INTO userTable(firstname, pseudo, mail, phoneNumber, birthDate, password) VALUES ("Emile", "Spikes", "emileseguret@icloud.com", "0781809049", "24/01/2001", "MDPCrypté");


