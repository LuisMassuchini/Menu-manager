import request from 'supertest';
import { App } from '../app';

const server = new App().server()
let token: string;

describe('Category routes test', () => {
  test('POST /auth/login', (done) => {
    request(server)
      .post('/auth/login')
      .set('Accept', 'application/json')
      .send({
        email: 'email@admin.com',
        password: 'admin',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        } else {
          token = res.body.token;
        }
        return done();
      });
  });
    test('GET /category', (done) => {
        request(server)
          .get('/category')
          .set('Authorization', `Baerer ${token}`)
          .expect(200)
          .expect((res) => {
            expect(res.body.length).not.toBe(0);
          })
          .end((err, res) => {
            if (err) {
              return done(err);
            } 
            return done();
          });
      });
})
