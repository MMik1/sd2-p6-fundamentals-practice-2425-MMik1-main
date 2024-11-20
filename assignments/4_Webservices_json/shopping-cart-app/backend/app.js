const express = require('express');
const app = express();
const productsRoute = require('./routes/products');
const cartRoute = require('./routes/cart');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/products', productsRoute);
app.use('/cart', cartRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
