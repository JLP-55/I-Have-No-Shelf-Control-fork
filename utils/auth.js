const withAuth = (req, res, next) => {
  // If the user is not logged in, redirects the user to the login page
  // If the user is logged in, allows them to view the paintings

if (req.session.loggedIn) {
  res.redirect('/login');
} else {
  next();
}
};

module.exports = withAuth;
