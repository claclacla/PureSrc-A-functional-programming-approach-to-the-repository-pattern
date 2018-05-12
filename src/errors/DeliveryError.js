class DeliveryError {
  constructor({ body, status }) {
    if (body === undefined) {
      throw new Error("body is a required property");
    }

    if (status === undefined) {
      throw new Error("status is a required property");
    }

    this.body = body;
    this.status = status;
  }
}

module.exports = DeliveryError;