const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, course, degreeLevel, contact } = req.body;
    const user = new User({ name, email, password, course, degreeLevel, contact });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

// ... other auth routes

module.exports = router;