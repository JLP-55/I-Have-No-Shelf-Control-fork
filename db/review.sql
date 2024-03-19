-- seed file to contain each review data
USE book_review_db;

INSERT INTO Reviews (UserID, BookID, ReviewText, Rating, ReviewDate)
VALUES 
(1, 1, "It was good", 3, CURDATE()),
(1, 2, "Better than the anime", 4, CURDATE()),
(1, 3, "Hur dur 40K ripoff!.", 1, CURDATE()),
(1, 4, "2spooky4me", 3, CURDATE()),
(1, 5, "I refuse to watch the movie #JusticeForTomBombadil", 5, CURDATE());
