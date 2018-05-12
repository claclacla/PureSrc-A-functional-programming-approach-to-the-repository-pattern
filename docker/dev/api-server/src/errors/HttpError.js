const HttpCustomError = require('./HttpCustomError');

class HttpError {

  // 400 errors

  static Unauthorized() {
    return new HttpCustomError("Error: 401 Unauthorized", 401);
  }

  static NotFound() {
    return new HttpCustomError("Error: 404 Not found", 404);
  }

  static Conflict({ message, errorCode }) {
    let errorMessage = "Error: 409 Conflict";

    if(message) {
      errorMessage = message;

      if(errorCode !== undefined) {
        errorMessage = "[" + errorCode + "] " + errorMessage;
      }
    }

    let error = new HttpCustomError(errorMessage, 409);

    if(errorCode !== undefined) {
      error.errorCode = errorCode;
    }

    return error;
  }

  // 500 errors

  static InternalServerError({ message, errorCode }) {
    let errorMessage = "Error: 500 Internal Server Error";

    if(message) {
      errorMessage = message;

      if(errorCode !== undefined) {
        errorMessage = "[" + errorCode + "] " + errorMessage;
      }
    }

    let error = new HttpCustomError(errorMessage, 500);

    if(errorCode !== undefined) {
      error.errorCode = errorCode;
    }

    return error;
  }
}

module.exports = HttpError;