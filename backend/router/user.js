// backend/routes/users.js
import express from 'express';
import User from '../models/user.js'; // Ensure the path is correct

const router = express.Router();

// Sign-up route
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({
    name,
    email,
    password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
