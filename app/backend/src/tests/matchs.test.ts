import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matchs from '../database/models/Matchs';
import { clubs } from '../tests/mock/clubsMock'
import { Response } from 'superagent';

chai.use(chaiHttp);
const { expect } = chai;

describe('Rota matchs', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Matchs, "findAll")
      .resolves(Matchs as any);
  });

  after(() => {
    (Matchs.findAll as sinon.SinonStub).restore();
  });

  it('Retorna o status 200 de uma requisição bem sucedida para listagem de todas as partidas', async () => {
    chaiHttpResponse = await chai.request(app).get('/matchs');
    expect(chaiHttpResponse).to.have.status(200);
  });
});