class HttpCustomError {
  constructor(message, status) {
    if (message === undefined) {
      throw new Error("message is a required property");
    }

    if (status === undefined) {
      throw new Error("status is a required property");
    }

    this.status = status;
    this.message = message;

    this.errorCode = "";
  }
}

module.exports = HttpCustomError;