// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/connectDB');
const Data = require('./db/models/dataModel')
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', async (req, res) => {
    console.log('Endpoint hit!');
    try {
        const data = await Data.find({});
        console.log('Data:', data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});