import request from 'supertest';
import { App } from '../app';

let elementId;
const server = new App().server()
let token: string;
const product = {
  "category": "643207e6044607b09801181f",
  "name": "foodTest",
  "qty": 1,
  "price": 10.50
}
describe('Product routes test', () => {
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
    test('POST /product', (done) => {
      request(server)
        .post('/product')
        .set('Authorization', `Baerer ${token}`)
        .expect('Content-Type', /json/)
        .send(product)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          elementId = res.body.newProduct[0]._id;
       
          return done();
        });
    });
    test('GET /product/:id', (done) => {
      request(server)
        .get(`/product/${elementId}`)
        .set('Authorization', `Baerer ${token}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
      
          expect(res.body.length).not.toBe(0);
          expect(res.body.product._id).toBe(elementId);
          expect(res.body.product.name).toBe(product.name);
          expect(res.body.product.categories[0]._id).toBe(product.category);
          expect(res.body.product.qty).toBe(product.qty);
          expect(res.body.product.price).toBe(product.price);

        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
    test('GET /product', (done) => {
      request(server)
        .get('/product')
        .set('Authorization', `Baerer ${token}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
          expect(res.body.length).not.toBe(0);
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
    test('PATCH /product/:id', (done) => {
      request(server)
        .patch(`/product/${elementId}`)
        .set('Authorization', `Baerer ${token}`)
        .expect('Content-Type', /json/)
        .send({  "name": "ice cream"})
        .expect(200)
        .expect((res) => {
      
          expect(res.body.length).not.toBe(0);
          expect(res.body.product._id).toBe(elementId);
          expect(res.body.product.name).toBe("ice cream");
        })
        .end((err, res) => {
          if (err) return done(err);       
          return done();
        });
    });
    test('DELETE /product/:id', (done) => {
      request(server)
        .delete(`/product/${elementId}`)
        .set('Authorization', `Baerer ${token}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
          expect(res.body.length).not.toBe(0);
          expect(res.body.product._id).toBe(elementId);
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
   
}); 