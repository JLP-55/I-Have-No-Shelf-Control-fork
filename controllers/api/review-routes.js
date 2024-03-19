const router = require('express').Router();
const { Review, User, Comment } = require('../../models');
//const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// ============================== GET all posts ============================ //

router.get('/', async (req, res) => {
    console.log('test get all reviews');
    try {
      const dbReviewData = await Review.findAll({
            attributes: [
                'id', 
                'title', 
                'content', 
                'created_at'
            ],
            order: [['created_at', 'DESC']],
            include: [{
                model: User,
                attributes: ['username'],
            },]

      });
      res.status(200).json(dbReviewData.reverse());
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // ============================== GET one post by id ============================ //

router.get('/:id', async (req, res) => {
      try {
        const dbReviewData = await Review.findOne({
          where: {
            id: req.params.id
          },
          attributes: [
            'id',
            'title',
            'content',
            'created_at',
          ],
          include: [
            {
              model: User,
              attributes: ['username',],
            },
            {
              model: Comment,
              attributes: [
                'id', 
                'comment_content', 
                'post_id', 
                'user_id', 
                'created_at'
              ], 
              include: {
                model: User,
                attributes: ['username']
              }
            }
          ],
        });
        res.status(200).json(dbReviewData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  );

// ============================== CREATE a new Post ============================ //

router.post('/', withAuth, async (req, res) => {
    try {
      const dbReviewData = await Review.create({
        user_id: req.session.user_id,
        title: req.body.title,
        content: req.body.content
      });    
      res.status(200).json(dbReviewData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
