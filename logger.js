// backend/middlewares/logger.js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// backend/server.js
const express = require('express');
const logger = require('./middlewares/logger');
const app = express();

app.use(logger);

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
