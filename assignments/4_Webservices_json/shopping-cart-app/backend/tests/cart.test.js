const request = require('supertest');
const app = require('../app');
const CartItem = require('../models/cartItem');

describe('Cart API', () => {
  it('should fetch all cart items', async () => {
    const res = await request(app).get('/cart');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should add a new item to the cart', async () => {
    const res = await request(app)
      .post('/cart')
      .send({ productId: '1', quantity: 2 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('productId', '1');
    expect(res.body).toHaveProperty('quantity', 2);
  });

  it('should remove an item from the cart', async () => {
    const newItem = new CartItem('1', 2);
    const res = await request(app)
      .delete(`/cart/${newItem.id}`);
    expect(res.statusCode).toEqual(204);
  });
});