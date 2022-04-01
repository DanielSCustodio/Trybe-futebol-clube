enum ResponseMessage {
  FAIL_LOGIN = 'Incorrect email or password',
  EMAIL_REQUIRED = '"email" must be a valid email',
  PASSWORD_REQUIRED = '"password" must be a valid email',
  ALL_FIELDS_MUST_BE_FILLED = 'All fields must be filled',
  INCORRECT_EMAIL_OR_PASSWORD = 'Incorrect email or password',
  TOKEN_NOT_FOUND = 'Token not found',
  EXPIRED_OR_INVALID = 'Token expired or invalid',
  MATCH_WITH_TWO_EQUAL_TEAM = 'It is not possible to create a match with two equal teams',
  THERE_IS_NO_TEAM = 'There is no team with such id!',
}

export default ResponseMessage;
