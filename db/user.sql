-- seed file to contain each user data / log in data, username/password/email etc
USE book_review_db;

INSERT INTO Users (Username, Password, Email, Country, FavouriteGenre, AvatarURL)
VALUES 
('JohnDoe', '123', 'john@example.com', 'Australia', 'ScienceFiction', 'https://example.com/avatar/alice.png'),
