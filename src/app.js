const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// app.use(express.json);

app.get('/', (req, res) => {
  res.send('API CRUD NODEJS');
});

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

module.exports = app;