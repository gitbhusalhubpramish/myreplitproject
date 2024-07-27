// backend/server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './router/user.js';
const app = express();
const PORT = 3000;
import Database from '@replit/database'
// import db from replit
const db = new Database();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const usersRouter = express.Router();
usersRouter.post('/', async (req, res) => {
  const userId = req.body.id; // Assume there's an `id` field in the user data
  const userData = req.body;

  try {
    await db.set(userId, userData);
    res.status(201).send({ message: 'User data stored successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error storing user data', error });
  }
});

app.use('/api/users', usersRouter);

app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const userData = await db.get(userId);
    if (userData) {
      res.status(200).send(userData);
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving user data', error });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    await db.delete(userId);
    res.status(200).send({ message: 'User data deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting user data', error });
  }
});

app.get('/api', (req, res) => {
  res.send(user)
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});