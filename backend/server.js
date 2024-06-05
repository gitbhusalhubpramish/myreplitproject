// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRouter from './router/user.js';
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mydatabase');

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use('/users', usersRouter); 

// Fetch all users and send as response
app.get('/users', async (req, res) => {
  res.send("hello")
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});