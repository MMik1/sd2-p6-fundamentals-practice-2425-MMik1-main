const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS middleware
app.use(cors());

const bodyParser = require('body-parser');
const operations = require('./routes/operations');

app.use(bodyParser.json());
app.use('/operations', operations);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
