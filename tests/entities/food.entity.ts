import request from 'supertest';
import app from '../../src/app';

describe('/food', () => {
    it('should return empty list when no foods are present', async () => {
        const { status, body } = await request(app).get('/food');
        expect(status).toBe(200);
        expect(body).toEqual([]);
    })
})