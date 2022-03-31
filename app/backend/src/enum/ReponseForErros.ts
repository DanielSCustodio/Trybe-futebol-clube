enum ResponseMessage {
  FAIL_LOGIN = 'Incorrect email or password',
  EMAIL_REQUIRED = '"email" must be a valid email',
  PASSWORD_REQUIRED = '"password" must be a valid email',
  ALL_FIELDS_MUST_BE_FILLED = 'All fields must be filled',
  INCORRECT_EMAIL_OR_PASSWORD = 'Incorrect email or password',
}

export default ResponseMessage;
