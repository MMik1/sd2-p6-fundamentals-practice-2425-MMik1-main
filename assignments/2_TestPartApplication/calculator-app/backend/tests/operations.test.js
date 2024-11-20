// Unit tests for the calculator operations

const request = require('supertest');
const app = require('../app');

// Test the calculator API
describe('Calculator API', () => {
    // Test the add operation
    it('should add two numbers', async () => {
        const res = await request(app)
            .post('/operations/add')
            .send({a: 5, b: 3});
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('result', 8);
    });

    // Test the subtract operation
    it('should subtract two numbers', async () => {
        const res = await request(app)
            .post('/operations/subtract')
            .send({a: 9, b: 4});
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('result', 5);
    });

    // Test the multiply operation
    it('should multiply two numbers', async () => {
        const res = await request(app)
            .post('/operations/multiply')
            .send({a: 7, b: 6});
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('result', 42);
    });

    // Test the divide operation
    it('should divide two numbers', async () => {
        const res = await request(app)
            .post('/operations/divide')
            .send({a: 8, b: 2});
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('result', 4);
    });

    // Test division by zero
    it('should handle division by zero', async () => {
        const res = await request(app)
            .post('/operations/divide')
            .send({a: 8, b: 0});
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error', 'Cannot divide by zero');
    });
});
