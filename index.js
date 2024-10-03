require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
// Routes setup
const authRoute = require('./routes/authRoutes');
const productRoute = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

// MiddleWare setup
const authMiddleware = require('./middleware/authMiddleware')

connectDB();
const app = express();
const port = process.env.Port || 5000;

// MiddleWare
app.use(express.json());

// Routes

app.use('api/auth', authRoute);
app.use('api/product',authMiddleware, productRoute);
app.use('api/user',authMiddleware, userRoutes);


