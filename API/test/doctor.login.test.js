const request = require('supertest');

require('dotenv').config();
let server;

const Doctor = require('../src/models/Doctor.model');
let db = require('../src/config/db.config');

describe('Doctor Login API end point: /nhis/api/doctor/login', ()=>{

    beforeEach(async()=>{
        await db.sync({force: true});
        server = require('../src/app');        
    });

    afterEach(async()=>{
        await server.close();
        await db.close();
    });

    it('Should return an authenticated doctor', async()=>{
        const response = await request(server)
        .post('/nhis/api/doctor/login')
        .send({
            email: "paul@gmail.com",
            password: "abc123"
        })
        .expect(200);

        expect(response.body).toHaveProperty('doctor');
        expect(response.body).toHaveProperty('jwt');
        expect(response.body).toHaveProperty('message', 'Login successful');
    })

    it('Should return a status code of 400 and invalid credentials message for unregistered emails', async()=>{
        const response = await request(server)
        .post('/nhis/api/doctor/login')
        .send({
            email: "p@gmail.com",
            password: "abc123"
        })
        .expect(400);

        expect(response.body.message).toBe('Invalid login credentials');
    })

    it('Should return a status code of 400 and invalid credentials message for wrong passwords', async()=>{
        const response = await request(server)
        .post('/nhis/api/doctor/login')
        .send({
            email: "p@gmail.com",
            password: "agent47"
        })
        .expect(400)

        expect(response.body.message).toBe('Invalid login credentials')
    })

})
