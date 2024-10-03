// /routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');

// @route   GET api/user
router.get('/user', getAllUsers);

// @route   POST api/user
router.post('/user', createUser);

// @route   PUT api/user/:id
router.put('/user/:id', updateUser);

// @route   DELETE api/user/:id
router.delete('/user/:id', deleteUser);

module.exports = router;
