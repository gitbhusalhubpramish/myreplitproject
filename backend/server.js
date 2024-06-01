const express = require('express');
const cors = require('cors'); // Install cors

const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors()); 

app.use(express.json()); // To parse JSON request bodies

// Your backend routes 
app.post('/', (req, res) => {
    // Process the request body (data)
    const data = req.body;
    console.log("Received data:", data);

    // Respond to the frontend
    res.send("Data received successfully");
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});