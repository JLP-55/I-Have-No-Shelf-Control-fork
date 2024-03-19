const { User } = require('../models');

const userData = [{
        username: 'user1'
    },
    {
        username: 'user2'
    },
    {
        username: 'user3'
    },
    {
        username: 'user4'
    },
    {
        username: 'user5'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;