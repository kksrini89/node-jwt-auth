const jwt = require('jsonwebtoken');

module.exports = {
  // FORMAT OF TOKEN
  // Authorization: Bearer <access_token>
  generateToken: user => {
    try {
      return new Promise((res, reject) => {
        jwt.sign({ user }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
          if (err) {
            reject(err);
          }
          res(token);
        });
      });
    } catch (error) {
      throw error;
    }
  },
  // Verify Token
  verifyToken: function(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
};
