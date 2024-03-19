const { Review } = require('../models');

const reviewData = [{
    title: 'Test Book Review 1',
    content: 'Test review content 1.',
    user_id: 1

},
{
    title: 'Test Book Review 2',
    content: 'Test review content 2.',
    user_id: 2
},
{
    title: 'Test Book Review 3',
    content: 'Test review content 3.',
    user_id: 3
}
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;