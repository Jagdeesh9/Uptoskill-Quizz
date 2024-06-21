const express = require('express');
const USER = require('../models/users.model');
const router = express.Router();
const {registerUser,logoutUser}  = require('../controllers/user.controller')

// Registration form
router.get('/register', (req, res) => {
  res.send('<h1>Register</h1><form action="/users/register" method="post"><input type="text" placeholder="name" name="name"/><input type="text" name="username" placeholder="Username"/><input type="password" name="password" placeholder="Password"/><button type="submit">Register</button></form>');
});

// Handle registration
router.post('/register',registerUser);

// Login form
// router.get('/login', (req, res) => {
//   res.send('<h1>Login</h1><form action="/users/login" method="post"><input type="text" name="username" placeholder="Username"/><input type="password" name="password" placeholder="Password"/><button type="submit">Login</button></form>');
// });

// Handle login
router.post('/login',async (req, res) => {
  const { username, password } = req.body;

  // Basic input validatio
  if (!username || !password || username == '' || password == '' ) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    // Find user by username
    const user = await USER.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Compare provided password with hashed password
    
    if (user.password !== password) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

   

   res.json({"login":"success"})
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Logout
router.get('/logout', logoutUser);

module.exports = router;
