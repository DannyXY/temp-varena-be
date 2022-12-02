// Require SuperTest and Express App..
const request = require('supertest');
const app = require("../app");

// Require Mongo Services..
async function mongoConnect() {
    await mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

// Run Tests..
describe('Customers API', () => {
    beforeAll(async () => {
        await mongoConnect();
    });

    afterAll(async () => {
        await mongoDisconnect();
    });

    describe('Get Current battle', () => {
        test('It Should Respond with a 200 Success', async () => {
            const response = await (request(app).get('/battleInfo')
                .expect('Content-Type', /json/)
                .expect(200)
            );
        });
    });

    describe('Get Battles History', () => {
        test('It Should Respond with a 200 Success', async () => {
            const response = await (request(app).get('/history')
                .expect('Content-Type', /json/)
                .expect(200)
            );
        });
    });

    describe('Get Battles Winner', () => {
        test('It Should Respond with a 200 Success', async () => {
            const response = await (request(app).get('/winner')
                .expect('Content-Type', /json/)
                .expect(200)
            );
        });
    });

    describe('Get Leaderboard', () => {
        test('It Should Respond with a 200 Success', async () => {
            const response = await (request(app).get('/leaderboard')
                .expect('Content-Type', /json/)
                .expect(200)
            );
        });
    });

    
});