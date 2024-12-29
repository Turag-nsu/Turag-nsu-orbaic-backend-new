const request = require('supertest');
const express = require('express');
const axios = require('axios');
const ensureBearerToken = require('../src/middlewares/EnsureBearerToken');
const { EXTERNAL_SERVER_URL } = require('../src/config/Env');

const app = express();
app.use(express.json());
app.use(ensureBearerToken);

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Welcome to admin panel' });
});

describe('EnsureBearerToken Middleware Integration Test', () => {
  let accessToken;

  beforeAll(async () => {
    try {
      const response = await axios.post(`${EXTERNAL_SERVER_URL}/api/auth/login`, {
        email: 'nsu.turag@gmail.com',
        password: 'Turag123@',
      });

      accessToken = response.data?.result?.accessToken;
      if (!accessToken) {
        throw new Error('Access token not found in login response');
      }
    } catch (error) {
      console.error('Failed to fetch access token:', error.message);
      throw error;
    }
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should authenticate and access admin route with valid token', async () => {
    const response = await request(app)
      .get('/test')
      .set('Authorization', `Bearer ${accessToken}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to admin panel');
  });

  test('should check the admin access from the external server', async () => {
    try {
      const response = await axios.get(`${EXTERNAL_SERVER_URL}/api/admin`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      expect(response.status).toBe(200);
      expect(response.data.result).toBe('Welcome to admin panel');
    } catch (error) {
      console.error('Admin access test failed:', error.message);
      throw error;
    }
  });

  test('should fail if no token is provided', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(401);
  });

  test('should fail if token is invalid', async () => {
    const response = await request(app)
      .get('/test')
      .set('Authorization', 'Bearer invalidToken');

    expect(response.status).toBe(403);
  });
});
