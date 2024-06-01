// db/mongoClient.js
const { MongoClient } = require('mongodb');

// Replace the following with your MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

let db;

async function connectToDatabase() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Connected to database!');

        // Specify database
        db = client.db(dbName);

        return db;
    } catch (error) {
        console.error('An error occurred while connecting to MongoDB', error);
        throw error;
    }
}

module.exports = { connectToDatabase, getDb: () => db };
