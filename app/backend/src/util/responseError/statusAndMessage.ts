import StatusCode from '../../enum/StatusCode';
import ResponseMessage from '../../enum/ReponseForErros';

const statusAndMessage = [

  {
    status: StatusCode.UNAUTHORIZED,
    messageReceived: ResponseMessage.INCORRECT_EMAIL_OR_PASSWORD,
    message: ResponseMessage.INCORRECT_EMAIL_OR_PASSWORD,
  },

  {
    status: StatusCode.UNAUTHORIZED,
    messageReceived: ResponseMessage.EMAIL_REQUIRED,
    message: ResponseMessage.ALL_FIELDS_MUST_BE_FILLED,
  },

  {
    status: StatusCode.UNAUTHORIZED,
    messageReceived: ResponseMessage.PASSWORD_REQUIRED,
    message: ResponseMessage.ALL_FIELDS_MUST_BE_FILLED,
  },

  {
    status: StatusCode.UNAUTHORIZED,
    messageReceived: ResponseMessage.ALL_FIELDS_MUST_BE_FILLED,
    message: ResponseMessage.ALL_FIELDS_MUST_BE_FILLED,
  },

  {
    status: StatusCode.UNAUTHORIZED,
    messageReceived: ResponseMessage.TOKEN_NOT_FOUND,
    message: ResponseMessage.TOKEN_NOT_FOUND,
  },

  {
    status: StatusCode.UNAUTHORIZED,
    messageReceived: ResponseMessage.EXPIRED_OR_INVALID,
    message: ResponseMessage.EXPIRED_OR_INVALID,
  },

  {
    status: StatusCode.UNAUTHORIZED,
    messageReceived: ResponseMessage.MATCH_WITH_TWO_EQUAL_TEAM,
    message: ResponseMessage.MATCH_WITH_TWO_EQUAL_TEAM,
  },

  {
    status: StatusCode.UNAUTHORIZED,
    messageReceived: ResponseMessage.THERE_IS_NO_TEAM,
    message: ResponseMessage.THERE_IS_NO_TEAM,
  },

];

export default statusAndMessage;
