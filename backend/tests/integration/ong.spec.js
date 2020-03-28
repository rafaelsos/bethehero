const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('validando se é possível a criação de uma nova ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      // .set('Authorization', '0ab16859') exemplo para testar a rota get('profile'), antes criar uma ong
      .send({        
        name: "ACEG",
        email: "contato@aceg.com.br",
        whatsapp: "47988887777",
        city: "Joinville",
        uf: "SC"
      });
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);    
  });
});