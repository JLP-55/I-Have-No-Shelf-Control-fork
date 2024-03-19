const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');


const addBooks = require("./add_book-routes");
const book = require('./book');

router.use("/addBooks", addBooks);
router.use("/review-routes", reviewRoutes);
router.use('/users', userRoutes);
router.use('/book', book);





module.exports = router;
