import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/Users';
import {user, login} from '../tests/mock/userMock'
import { Response } from 'superagent';

chai.use(chaiHttp);
const { expect } = chai;

describe('Rota Login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Users, "findOne")
    .resolves(user as any);
  });

  after(()=>{
    (Users.findOne as sinon.SinonStub).restore();
  });

  it('Retorna o email do usuário', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(login);
    expect(chaiHttpResponse.body.user.email).to.equal(user.email);
  });

  it('Retorna os status 401 quando a senha está incorreta', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'fail_password'
});
    expect(chaiHttpResponse).to.have.status(401);;
  });
  
});