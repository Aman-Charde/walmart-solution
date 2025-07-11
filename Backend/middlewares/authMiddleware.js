// middlewares/authMiddleware.js

module.exports = function (req, res, next) {
  if (req.session && req.session.user) {
    next(); // user is authenticated
  } else {
    res.status(401).json({ message: 'Unauthorized: Please login first' });
  }
};
