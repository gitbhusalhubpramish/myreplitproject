// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(express.json());

const userDataPath = path.join(__dirname, 'userdata.json');

app.post('/api/signup', (req, res) => {
  const { email, username, password } = req.body;
  const userData = { email, username, password };
  fs.writeFile(userDataPath, JSON.stringify({ userdata: [userData] }, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to save user data' });
    }
    res.status(200).json({ message: 'User registered successfully' });
  });
});

app.post('/api/signin', (req, res) => {
  const { username, password } = req.body;
  fs.readFile(userDataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to read user data' });
    }
    const userData = JSON.parse(data).userdata.find(user => user.username === username && user.password === password);
    if (userData) {
      res.status(200).json({ message: 'Successfully logged in' });
    } else {
      res.status(401).json({ message: 'Incorrect username or password' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
