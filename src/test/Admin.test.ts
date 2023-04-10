import request from 'supertest';
import { App } from '../app';
import admin from './__mocks__/admin';

const server = new App().server();

jest.mock('./__mocks__/admin', () => {
  return {
    init: async function() {
      return {
        id: 1,
        email: 'email@admin.com',
        password: 'admin'
      }
    }
  };
});

describe('Admin routes test', () => {
  let adminInstance;

  beforeAll(async () => {
    adminInstance = await admin.init();
  });

  test('POST /auth/login', (done) => {
    request(server)
      .post('/auth/login')
      .set('Accept', 'application/json')
      .send({
        email: adminInstance.email,
        password: adminInstance.password,
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) 
        return done(err);
        return done();
      });
  });
});