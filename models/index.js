const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Review = require('./Review');
const Comment = require('./Comment');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});




User.hasMany(Review, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Comment.belongsTo(Review, {
  foreignKey: 'review_id',
  onDelete: "cascade"
});

Review.hasMany(Comment, {
  foreignKey: 'review_id',
  onDelete: "cascade"
})


module.exports = { User, Gallery, Painting, Review, Comment };
