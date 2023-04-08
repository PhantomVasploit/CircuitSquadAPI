const request = require('supertest');

const Doctor = require('../src/models/Doctor.model');
let server;
let db;


describe('Doctor Register API end point: /nhis/api/doctor/register', ()=>{

    beforeAll(async()=>{
        server = require('../src/app');
        db = require('../src/config/db.config');
        
    });

    afterAll(async()=>{
        await server.close();
        await db.close();
    });

    it('Should create a doctor account and return an authenticated user', async()=>{
        const response = await request(server)
        .post('/nhis/api/doctor/register')
        .send({
            firstName: "Paul",
            lastName: "Sanga",
            email: "sanga@gmail.com",
            password: "abc123",
            phoneNumber: "+25482803442",
            address: "MSA 80107",
            licenseNumber: "S13/03150/17",
            specialization: "Surgeon"
        })
        .expect(201);

        expect(response.body).toHaveProperty('doctor');
        expect(response.body).toHaveProperty('jwt');
        expect(response.body.message).toBe('Doctor account created successfully');
    });

    it('Should return an invalid message and a status code of 400 for already registered emails', async()=>{
        const response = await request(server)
        .post('/nhis/api/doctor/register')
        .send({
            firstName: "Paul",
            lastName: "Sanga",
            email: "paul@gmail.com",
            password: "abc123",
            phoneNumber: "+25482803442",
            address: "MSA 80107",
            licenseNumber: "S13/03150/18",
            specialization: "Surgeon"
        })
        .expect(400);

        expect(response.body.message).toBe('The email provided is already registered. Please sign in instead.');
    })

})