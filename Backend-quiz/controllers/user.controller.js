const USER = require('../models/users.model');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
  
    // Basic input validation
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      // Hash the password before saving
      // const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new USER({
        username,
        email,
        password
      });
  
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        return res.status(400).json({ error: 'Username or email already exists' });
      }
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


const logoutUser = async (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
}

module.exports = {
    registerUser,
    logoutUser
}