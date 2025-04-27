// tests/host.test.js
import request from 'supertest';
import app from '../src/app';

describe('Basic App Test', () => {
  it('should return 200 OK on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should return JSON with host information', async () => {
    const response = await request(app).get('/');
    expect(response.body).toHaveProperty('hostname');
    expect(response.body).toHaveProperty('platform');
  });
});
