const express = require('express');

const { generateToken, verifyToken } = require('../routes/util');
const { AuthController } = require('../controllers/authController');
const { ItemController } = require('../controllers/itemController');

const router = express.Router();

// Auth
router.post('/api/register', async (req, res) => {
  try {
    const { username: name, email, password } = req.body;
    const user = {
      name,
      email,
      password
    };
    const authController = new AuthController();
    const userResult = await authController.createUser(user);
    const token = await generateToken(user);
    res
      .json({ token, id: userResult._id, name: userResult.name, email: userResult.email })
      .status(201);
  } catch (error) {
    res.status(400 || error.status).json({ error: error.message });
  }
});

router.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const authController = new AuthController();
    const userResult = await authController.getUserById({ email, password });
    const token = await generateToken({
      name: userResult.name,
      email: userResult.email,
      password: userResult.password
    });
    res.status(200).json({ token, user_id: userResult._id, user_name: userResult.name });
  } catch (error) {
    res.status(400 || error.status).json({ error: error.message });
  }
});

// Items
router.get('/api/items', verifyToken, async (req, res) => {
  try {
    const action = new ItemController();
    const result = await action.getItems();
    res.json(result).status(200);
  } catch (error) {
    res.status(error.status || 400).json({ error: error.message });
  }
});

module.exports = router;
