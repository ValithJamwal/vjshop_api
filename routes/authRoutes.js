// /routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

// @route   POST api/auth/login
router.post('/login', login);

// @route   POST api/auth/register
router.post('/register', register);

module.exports = router;
