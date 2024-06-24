// server/routes/auth.js
const express = require('express');
const { signup, signin } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', (req, res) => {
    // Adjust the request body to match the form inputs
    req.body.emailOrUsername = req.body.username || req.body.email;
    signin(req, res);
});

module.exports = router;
