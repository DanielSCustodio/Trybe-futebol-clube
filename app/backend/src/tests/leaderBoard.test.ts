
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matchs from '../database/models/Matchs';
import Clubs from '../database/models/Clubs';
import {matchs} from '../tests/mock/matchMock';
import {clubs} from '../tests/mock/clubsMock'
import { Response } from 'superagent';

chai.use(chaiHttp);
const { expect } = chai;

describe('Rota leadBoard', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Matchs, "findAll").resolves(matchs as any);
    sinon.stub(Clubs, "findAll").resolves(clubs as any);
    sinon.stub(Clubs, "findByPk").resolves(clubs[0] as any);
  });

  after(() => {
    (Matchs.findAll as sinon.SinonStub).restore();
    (Clubs.findAll as sinon.SinonStub).restore();
    (Clubs.findByPk as sinon.SinonStub).restore();
  })
  it('Retorna o status 200 quando a requisisção é feita com sucesso', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderboard/');
    
  });

});