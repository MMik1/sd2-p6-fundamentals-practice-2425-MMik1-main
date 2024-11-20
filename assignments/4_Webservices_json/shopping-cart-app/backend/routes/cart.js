const express = require('express');
const router = express.Router();
const CartItem = require('../models/cartItem');

let cart = [];

// Get all cart items
router.get('/', (req, res) => {
    res.json(cart);
});

// Add item to cart
router.post('/', (req, res) => {
    const newItem = new CartItem(parseInt(req.body.productId), req.body.quantity);
    cart.push(newItem);
    res.status(201).json(newItem);
});

// Remove item from cart
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    // Delete only one instance of the item from the cart
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].productId === productId) {
            cart.splice(i, 1);
            break;
        }
    }
    res.status(201).json({});
});

module.exports = router;
