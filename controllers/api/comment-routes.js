const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// ============================== GET all Comments ============================ //

router.get('/', async (req, res) => {
    console.log('test get all comments');
    try {
      const dbCommentData = await Comment.findAll({
        where: {
            id: req.params.id
        }
      });
      res.status(200).json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// ============================== GET one comment by id ============================ //

router.get('/:id', async (req, res) => {
    try {
      const dbCommentData = await Comment.findOne({
        where: {
          id: req.params.id
        },
      });
      res.status(200).json(dbCommentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// ============================== Create a comment ============================ //

router.post('/', withAuth, async (req, res) => {
    try {
      const dbCommentData = await Comment.create({
        user_id: req.session.user_id,
        review_id: req.body.review_id,
        comment_body: req.body.comment_body,
      });    
      res.status(200).json(dbCommentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// ============================== Update a comment ============================ //

router.put('/:id', withAuth, async (req, res) => {
  try {
  const dbCommentData = await Comment.update({
    comment_body: req.body.comment_body
  }, 
  {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(dbCommentData);
  } catch (err) {
      res.status(500).json(err);
    };
  });

// ============================== Delete a comment ============================ //

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const dbCommentData = await Comment.destroy(
      {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(dbCommentData);
      } catch (err) {
          res.status(500).json(err);
        };
      });

module.exports = router;