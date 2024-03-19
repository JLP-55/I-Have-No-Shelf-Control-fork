const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Art',
  //  filename: "ART.jpg",
  },
  {
    name: 'Autobiography',
  //  filename: "AUTOBIOGRAPHY.jpg",
  },
  {
    name: 'Automotive',
  // filename: "AUTOMOTIVE.jpg",
  },
  {
    name: 'Biography',
  //  filename: "BIOGRAPHY.jpg",
  },
  {
    name: 'Business',
  //  filename: "BUSINESS.jpg",
  },
  {
    name: 'Childrens',
  //  filename: "CHILDRENS.jpg",
  },
  {
    name: 'Christian',
  //  filename: "CHRISTIAN.jpg",
  },
  {
    name: 'Classics',
  //  filename: "CLASSICS.jpg",
  },
  {
    name: 'Comics',
  //  filename: "COMICS.jpg",
  },
  {
    name: 'Cookbooks',
  //  filename: "COOKBOOKS.jpg",
  },
  {
    name: 'Fantasy',
   // filename: "FANTASY.jpg",
  },
  {
    name: 'Fiction',
  //  filename: "FICTION.jpg",
  },
  {
    name: 'History',
  //  filename: "HISTORY.jpg",
  },
  {
    name: 'Horror',
  //  filename: "HORROR.jpg",
  },
  {
    name: 'Music',
   // filename: "MUSIC.jpg",
  },
  {
    name: 'Mystery',
  //  filename: "MYSTERY.jpg",
  },
  {
    name: 'Nonfiction',
  //  filename: "NONFICTION.jpg",
  },
  {
    name: 'Poety',
   // filename: "POETRY",
  },
  {
    name: 'Romance',
   // filename: "ROMANCE",
  },
  {
    name: 'Science',
   // filename: "SCIENCE",
  },
  {
    name: 'Science Fiction',
 //   filename: "SCIFI",
  },
  {
    name: 'Self Help',
    //filename: "SELFHELP",
  },
  {
    name: 'Sports',
    //filename: "SPORTS",
  },
  {
    name: 'Thriller',
   // filename: "THRILLER",
  },
  {
    name: 'Travel',
   // filename: "TRAVEL",
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
