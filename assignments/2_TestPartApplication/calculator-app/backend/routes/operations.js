const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({ result });
});

router.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  const result = a - b;
  res.json({ result });
});

router.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  const result = a ** b;
  res.json({ result });
});

router.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (b === null) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }
  const result = a / b;
  res.json({ result });
});

module.exports = router;
