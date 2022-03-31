import * as joi from 'joi';

const schemaLogin = joi.object({
  email: joi.string().email({ tlds: { allow: false } }).required(),
  password: joi.string().min(6).required(),
});

export default schemaLogin;
