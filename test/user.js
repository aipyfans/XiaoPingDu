const app = require('../app');
const request = require('supertest');

let server = app.listen(3003);
console.log('im test server started at port 3003...');

describe('#test api of user', () => {

    it('#test GET /api/users', async () => {
        let res = await request(server)
            .get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(res => {
                res.body.users.length.size == 2
            });
    });

});