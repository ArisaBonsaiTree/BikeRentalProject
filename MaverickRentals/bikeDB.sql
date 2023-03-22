DROP DATABASE IF EXISTS bikesDB;

CREATE DATABASE bikesDB;

USE bikesDB;

CREATE TABLE Station (
    stationId INT NOT NULL PRIMARY KEY,
    stationName VARCHAR(255) NOT NULL,
    stationCapacity INT NOT NULL,
    stationAvailableBikes INT DEFAULT 0
);

CREATE TABLE BikeType (
    bikeTypeId INT NOT NULL PRIMARY KEY,
    typeName VARCHAR(255) NOT NULL,
	bikePrice DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Bike (
    bikeId INT NOT NULL PRIMARY KEY,
    bikeTypeId INT NOT NULL,
    available BOOLEAN NOT NULL DEFAULT true,
    stationId INT,
    FOREIGN KEY (bikeTypeId) REFERENCES BikeType(bikeTypeId),
    FOREIGN KEY (stationId) REFERENCES Station(stationId)
);

CREATE TABLE Reservation (
    reservationId INT NOT NULL PRIMARY KEY,
    startTime TIME NOT NULL,
    endTime TIME DEFAULT NULL,
    startStationId INT NOT NULL,
    endStationId INT DEFAULT NULL,
    price DECIMAL(10, 2) NOT NULL,
    customerName VARCHAR(255) NOT NULL,
    bikeId INT NOT NULL,
    FOREIGN KEY (startStationId) REFERENCES Station(stationId),
    FOREIGN KEY (endStationId) REFERENCES Station(stationId),
    FOREIGN KEY (bikeId) REFERENCES Bike(bikeId)
);

INSERT INTO Station (stationId, stationName, stationCapacity, stationAvailableBikes) 
VALUES 
    (1, 'Central Park', 20, 20),
    (2, 'Brooklyn Bridge Park', 15, 15),
    (3, 'Prospect Park', 25, 25);

INSERT INTO BikeType (bikeTypeId, typeName, bikePrice)
VALUES 
    (1, 'City Bike', 15.00),
    (2, 'Mountain Bike', 20.00),
    (3, 'Electric Bike', 30.00),
    (4, 'Road Bike', 25.00);

INSERT INTO Bike (bikeId, bikeTypeId, available, stationId)
VALUES 
    (1, 1, true, 1),
    (2, 1, true, 1),
    (3, 2, true, 1),
    (4, 2, true, 1),
    (5, 3, true, 1),
    (6, 3, true, 1),
    (7, 3, true, 1),
    (8, 4, true, 1),
    (9, 4, true, 1),
    (10, 1, true, 2),
    (11, 1, true, 2),
    (12, 1, true, 2),
    (13, 2, true, 2),
    (14, 2, true, 2),
    (15, 3, true, 2),
    (16, 4, true, 2),
    (17, 4, true, 2),
    (18, 4, true, 2),
    (19, 1, true, 3),
    (20, 1, true, 3),
    (21, 1, true, 3),
    (22, 2, true, 3),
    (23, 2, true, 3),
    (24, 2, true, 3),
    (25, 3, true, 3),
    (26, 3, true, 3),
    (27, 3, true, 3),
    (28, 3, true, 3),
    (29, 4, true, 3),
    (30, 4, true, 3);

SELECT b.*, bt.typeName, bt.bikePrice 
FROM Bike b 
JOIN BikeType bt USING (bikeTypeId)
WHERE b.stationId = 1 AND b.available = true;

SELECT * FROM Bike 
JOIN BikeType USING (bikeTypeId)
WHERE stationId = 1 AND available = true;


INSERT INTO Reservation (reservationId, startTime, startStationId, price, customerName, bikeId) 
VALUES 
    (1, '08:00:00', 1, 15.00, 'John Smith', 4),
    (2, '08:15:00', 1, 18.00, 'Jane Doe', 5),
    (3, '09:30:00', 1, 20.00, 'Bob Johnson', 6);

-- UPDATE Bike SET available = false WHERE bikeId IN (4, 5, 6);
UPDATE Bike SET available = false WHERE bikeId = 4;
UPDATE Bike SET available = false WHERE bikeId = 5;
UPDATE Bike SET available = false WHERE bikeId = 6;



SELECT * FROM RESERVATION;

UPDATE Reservation 
SET endTime = '10:00:00', endStationId = 2
WHERE reservationId = 1;


SELECT * FROM RESERVATION;

SELECT * FROM Bike 
JOIN BikeType USING (bikeTypeId)
WHERE stationId = 1 AND available = true;

SELECT * FROM Bike 
JOIN BikeType USING (bikeTypeId)
WHERE stationId = 2 AND available = true;

SELECT * FROM Bike;
