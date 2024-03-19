const router = require('express').Router();
const { Gallery, Painting } = require('../models');

//Imports the custom middleware

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'summary'],
        },
      ],
    });

    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );

    res.render('homepage', {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// TODO: Replace the logic below with the custom middleware
router.get('/gallery/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbGalleryData = await Gallery.findByPk(req.params.id, {
        include: [
          {
            model: Painting,
            attributes: [
              'id',
              'title',
              'author',
              'year_of_publication',
              'filename',
              'summary',
            ],
          },
        ],
      });
      const gallery = dbGalleryData.get({ plain: true });
      res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one painting
// custom middleware
router.get('/painting/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbPaintingData = await Painting.findByPk(req.params.id);

      const painting = dbPaintingData.get({ plain: true });

      res.render('painting', { painting, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// router.get("/",)

// // post a gallery/genre for the homepage
// router.post("/", async (req, res) => {
//   try {
//     const dbGallerydata = await Painting.create({
//       // title: req.body.title,
//       // author: req.body.author,
//       // year_of_publication: req.body.year,
//       // filename: req.body.filename,
//       // summary: req.body.summary,
//       // gallery_id: req.body.gallery_id,
//       title: "title",
//       author: "author",
//       year_of_publication: "2023",
//       filename: "filename.file",
//       summary: "summary",
//       gallery_id: 4,
//     });
//     // console.log(dbGallerydata);
//     res.status(200).json(dbGallerydata);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   };
// });


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
