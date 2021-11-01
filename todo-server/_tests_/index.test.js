/* eslint-disable no-useless-concat */
/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../index');

test('that request returns 200 with authentication header set', async () => {
  const response = await request(app)
    .get('/api/todo-list')
    .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTdmZTU1ZmNjZTJkZjA2NTYzOGNhMDUiLCJpYXQiOjE2MzU3NzUzODh9.j8gsQiBFL_yksI9XhHkX3hMmJ7YPVlKEIfqk_bMC83s');
  const { statusCode } = response;
  expect(statusCode).toBe(200);
});

test('that request returns 200 with authentication header set', async () => {
  const response = await request(app)
    .get('/api/todo-list');
  const { statusCode } = response;
  expect(statusCode).toBe(401);
});
