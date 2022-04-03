import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
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


  it('Retorna o status 200 quando o login está correto', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(login);
    expect(chaiHttpResponse).to.have.status(200);
  });
  

  it('Validate', async () => {
    chaiHttpResponse = await chai.request(app).get('/login/validate');
    expect(chaiHttpResponse).to.have.status(200);
  });


  it('Retorna o status 401 quando a senha está incorreta', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'fail_password'
    });
    expect(chaiHttpResponse).to.have.status(401);
  });

  it('Retorna o status 401 quando o email está incorreto', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'faillogin@admin.com',
      password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
    });
    expect(chaiHttpResponse).to.have.status(401);
  });

  it('Retorna o status 401 quando a senha está ausente', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
    });
    expect(chaiHttpResponse).to.have.status(401);
  });

  it('Retorna o status 401 quando a senhanão tem mais de 6 caracteres', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: '123'
    });
    expect(chaiHttpResponse).to.have.status(401);
  });

  it('Retorna o status 401 quando a senha e email está ausente', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
    
    });
    expect(chaiHttpResponse).to.have.status(401);
  });



});