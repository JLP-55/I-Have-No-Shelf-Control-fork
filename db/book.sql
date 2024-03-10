-- currently contains placeholder data

-- possible columns: author, genre, publication date, aggregate review score

INSERT INTO books (title, author, genre, publication_date, review_score)
VALUES ("The Great Gatsby", 1, true, 11),
       ("Huckleberry Finn", 1, true, 4),
       ("100 Years of Solitude", 3, false, 0),
       ("Things Fall Apart", 4 , false, 0 ),
       ("Crime and Punishment", 1, true, 15),
       ("Moby Dick", 2, true, 11),
       ("Decameron", 5, false, 0),
       ("The Wind and the Willows", 2, true, 11),
       ("Ulysses", 3, true, 8),
       ("Madame Bovary", 4 , true, 9 ),
       ("Catcher in the Rye", 1, true, 23),
       ("Catch-12", 5, true, 18),
       ("Hamlet", 5, true, 14);
       

-- possible columns: book name, score, user/reviewer

INSERT INTO reviews (book_id, review, book_name, review_score, user)
VALUES (1, "Zazu is underrated. Give that hornbill a sequel!", 1, true, 11),
       (2, "I'm gonna make him an offer you can't refuse, watch this movie", 1, true, 4),
       (1, "Scar is the lion everyone loves to hate", 3, false, 0),
       (3, "Ten years of ballet and three years of tap to join a gang in this neighborhood", 4 , false, 0),
       (5, "The tin man gave a metallic, hollow performance", 1, true, 15),
       (1, "Hakuna matata", 2, true, 11),
       (5, "Those flying monkeys are nightmare fuel!", 5, false, 0);
       
-- possible columns: book name, review, user/commenter

INSERT INTO comments (review_id, comment, book_name, user)
VALUES ("The Great Gatsby", 1, true, 11),
       ("Huckleberry Finn", 1, true, 4),
       ("This is the 4th book of the series. I recommend reading books 1-3 first", 3, false, 0),
       ("Things Fall Apart", 4 , false, 0 ),
       ("Crime and Punishment", 1, true, 15),
       ("Moby Dick", 2, true, 11),
       ("Decameron", 5, false, 0),
       ("The Wind and the Willows", 2, true, 11),
       ("Ulysses", 3, true, 8),
       ("Madame Bovary", 4 , true, 9 ),
       ("Catcher in the Rye", 1, true, 23),
       ("Catch-12", 5, true, 18),
       ("Hamlet", 5, true, 14);
       
