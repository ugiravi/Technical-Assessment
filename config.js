// backend/config.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'testdb',
  password: 'password',
  port: 5432,
});

module.exports = pool;

// backend/models/userModel.js
const pool = require('../config');

const createUser = async (user) => {
  const { name, email } = user;
  const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
  return result.rows[0];
};

const getUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

module.exports = {
  createUser,
  getUsers,
};

// backend/routes/userRoutes.js
const express = require('express');
const { createUser, getUsers } = require('../models/userModel');
const router = express.Router();

router.post('/users', async (req, res) => {
  const user = await createUser(req.body);
  res.json(user);
});

router.get('/users', async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

module.exports = router;

// backend/server.js
const express = require('express');
const logger = require('./middlewares/logger');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(logger);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
