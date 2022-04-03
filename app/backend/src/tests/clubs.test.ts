  import * as sinon from 'sinon';
  import * as chai from 'chai';
  // @ts-ignore
  import chaiHttp = require('chai-http');

  import { app } from '../app';
  import Clubs from '../database/models/Clubs';
  import { clubs } from '../tests/mock/clubsMock'
  import { Response } from 'superagent';

  chai.use(chaiHttp);
  const { expect } = chai;

  describe('Rota clubs', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Clubs, "findAll")
        .resolves(clubs as any);
    });

    after(() => {
      (Clubs.findAll as sinon.SinonStub).restore();
    });

    it('Retorna o status 200 de uma requisição bem sucedida para listagem de todos os clubes', async () => {
      chaiHttpResponse = await chai.request(app).get('/clubs');
      expect(chaiHttpResponse).to.have.status(200);
    });

    it('Retorna o status 200 de uma requisição bem sucedida para detalhar um clube', async () => {
      chaiHttpResponse = await chai.request(app).get('/clubs/4');
      expect(chaiHttpResponse).to.have.status(200); 
    });



  });