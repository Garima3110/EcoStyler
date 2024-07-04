const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const User = require('./schemas/user.js');

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));

// Serve login.html and signup.html directly
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'login.html'));
});

app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'signup.html'));
});

// Login route
app.post('/api/auth/signin', async (req, res) => {
    const { emailOrUsername, password } = req.body;

    // Debugging logs
    console.log(`Request body: ${JSON.stringify(req.body)}`);
    console.log(`Login attempt with emailOrUsername: ${emailOrUsername}`);

    try {
        const user = await User.findOne({ 
            $or: [{ username: emailOrUsername }, { emailId: emailOrUsername }]
        });

        if (!user) {
            console.log('User not found');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log('Password mismatch');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.cookie('loggedInUser', user.username, { httpOnly: true });
        console.log('Login successful');
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Protected route example - homepage.html
app.get('/index.html', (req, res) => {
    const loggedInUser = req.cookies.loggedInUser;

    if (!loggedInUser) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

// Logout route
app.get('/api/auth/logout', (req, res) => {
    res.clearCookie('loggedInUser');
    res.json({ message: 'Logged out successfully' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
