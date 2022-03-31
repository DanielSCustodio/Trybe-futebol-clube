import statusAndmessage from './statusAndMessage';

const sendResponse = async (response: string) => {
  const result = statusAndmessage.find((r) => r.messageReceived === response);
  if (result) {
    return { status: result.status, message: result.message };
  }
};

export default sendResponse;
