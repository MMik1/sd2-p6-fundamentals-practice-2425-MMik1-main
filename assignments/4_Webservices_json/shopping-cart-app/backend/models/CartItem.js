const { v4: uuidv4 } = require('uuid');

class CartItem {
  constructor(productId, quantity) {
    this.id = uuidv4();
    this.productId = productId;
    this.quantity = quantity;
  }
}

module.exports = CartItem;