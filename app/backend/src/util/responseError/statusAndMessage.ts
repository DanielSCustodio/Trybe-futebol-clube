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

];

export default statusAndMessage;
