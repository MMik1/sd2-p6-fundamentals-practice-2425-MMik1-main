const express = require('express');
const router = express.Router();
const Product = require('../models/product');

let products = [
  new Product('1', 'Laptop', 999.99),
  new Product('2', 'Phone', 499.99),
  new Product('3', 'Tablet', 299.99),
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;