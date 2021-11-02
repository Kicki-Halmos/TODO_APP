/* eslint-disable max-len */
/* eslint-disable no-useless-concat */
/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../index');

let token;

test('that loginrequest returns a token', async () => {
  const response = await request(app)
    .post('/api/login')
    .send({ email: "rosa@test.se", password: "oliver" })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/);
  const { statusCode } = response;
  expect(statusCode).toBe(200);
  token = response.body.data.token;
  expect(token).not.toBe(undefined);
});

test('that request returns 200 with authentication header set', async () => {
  const response = await request(app)
    .get('/api/todo-list')
    .set('Authorization', `Bearer ${token}`);
  const { statusCode } = response;
  expect(statusCode).toBe(200);
});

test('that request returns 401 without authentication header set', async () => {
  const response = await request(app)
    .get('/api/todo-list');
  const { statusCode } = response;
  expect(statusCode).toBe(401);
});
