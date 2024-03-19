const router = require("express").Router();
const { Gallery, Painting } = require("../../models");

router.get("/", (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
    };

	res.render("addBook", {
    loggedIn: req.session.loggedIn
  });
  // res.status(200).json({message: "ok"});
})

// post a gallery/genre for the homepage
router.post("/", async (req, res) => {
  try {
    const dbGallerydata = await Painting.create({
      // title: req.body.title,
      // author: req.body.author,
      // year_of_publication: req.body.year,
      // filename: req.body.filename,
      // summary: req.body.summary,
      // gallery_id: req.body.gallery_id,
      title: "title",
      author: "author",
      year_of_publication: "2023",
      filename: "filename.file",
      summary: "summary",
      gallery_id: 4,
    });
    // console.log(dbGallerydata);
    res.status(200).json(dbGallerydata);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

module.exports = router;