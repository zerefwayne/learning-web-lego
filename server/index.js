const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const data = require('./data.json');

const app = express();

const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/matches', async (req, res) => {
  console.log('/api/matches');

  res.status(200).send(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
