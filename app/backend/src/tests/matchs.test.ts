import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matchs from '../database/models/Matchs';
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

  it('Retorna o status 401 quando não é passado o body da requisição', async () => {
    chaiHttpResponse = await chai.request(app).post('/matchs');
    expect(chaiHttpResponse).to.have.status(401);
  });


  it('Retorna o status 200 de uma requisição bem sucedida quando uma partida em anadamento é atualizada', async () => {
    chaiHttpResponse = await chai.request(app).patch('/matchs/:id').send({
      homeTeamGoals: 3,
      awayTeamGoals: 1
    });
    expect(chaiHttpResponse).to.have.status(200);
  });

    it('Retorna o status 200 de uma requisição bem sucedida quando uma partida em anadamento é finalizada', async () => {
    chaiHttpResponse = await chai.request(app).patch('/matchs/5/finish');
    expect(chaiHttpResponse).to.have.status(200);
  });

});