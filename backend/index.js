const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the live backend!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});