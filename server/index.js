// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');


dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Add this line to enable CORS

// Serve static files
app.use(express.static(path.join(__dirname, '../client')));
// Serve login.html and signup.html directly
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'login.html'));
});

app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'signup.html'));
});


// Routes
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/manage', require('./routes/manage'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
