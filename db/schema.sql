DROP DATABASE IF EXISTS shelf_controll_db;
CREATE DATABASE shelf_controll_db;

-- -- Users Table
-- CREATE TABLE Users (
--     UserID INT AUTO_INCREMENT PRIMARY KEY,
--     Username VARCHAR(255) NOT NULL,
--     Password VARCHAR(255) NOT NULL, -- add hashing for storage
--     Email VARCHAR(255) UNIQUE NOT NULL,
--     Country VARCHAR(255),
--     Languages VARCHAR(255),
--     FavouriteGenre VARCHAR(255),
--     AvatarURL VARCHAR(255)
-- );

-- -- Books Table
-- CREATE TABLE Books (
--     BookID INT AUTO_INCREMENT PRIMARY KEY,
--     Title VARCHAR(255) NOT NULL,
--     Author VARCHAR(255),
--     Year YEAR,
--     Genre VARCHAR(255),
--     Summary TEXT
-- );

-- -- Reviews Table
-- CREATE TABLE Reviews (
--     ReviewID INT AUTO_INCREMENT PRIMARY KEY,
--     UserID INT,
--     BookID INT,
--     ReviewText TEXT,
--     Rating INT CHECK (Rating >= 1 AND Rating <= 5),
--     ReviewDate DATE,
--     FOREIGN KEY (UserID) REFERENCES Users(UserID),
--     FOREIGN KEY (BookID) REFERENCES Books(BookID)
-- );

-- -- Genres Table
-- CREATE TABLE Genres (
--     GenreID INT AUTO_INCREMENT PRIMARY KEY,
--     GenreName VARCHAR(255) UNIQUE NOT NULL
-- );

-- -- BookGenres Table
-- CREATE TABLE BookGenres (
--     BookID INT,
--     GenreID INT,
--     PRIMARY KEY (BookID, GenreID),
--     FOREIGN KEY (BookID) REFERENCES Books(BookID),
--     FOREIGN KEY (GenreID) REFERENCES Genres(GenreID)
-- );

-- -- Favourites Table
-- CREATE TABLE Favorites (
--     UserID INT,
--     BookID INT,
--     PRIMARY KEY (UserID, BookID),
--     FOREIGN KEY (UserID) REFERENCES Users(UserID),
--     FOREIGN KEY (BookID) REFERENCES Books(BookID)
-- );

-- -- ToRead Table
-- CREATE TABLE ToRead (
--     UserID INT,
--     BookID INT,
--     PRIMARY KEY (UserID, BookID),
--     FOREIGN KEY (UserID) REFERENCES Users(UserID),
--     FOREIGN KEY (BookID) REFERENCES Books(BookID)
-- );

-- -- Messages Table
-- CREATE TABLE Messages (
--     MessageID INT AUTO_INCREMENT PRIMARY KEY,
--     Name VARCHAR(255) NOT NULL,
--     Email VARCHAR(255) NOT NULL,
--     MessageText TEXT NOT NULL,
--     SentDate DATE NOT NULL
-- );
