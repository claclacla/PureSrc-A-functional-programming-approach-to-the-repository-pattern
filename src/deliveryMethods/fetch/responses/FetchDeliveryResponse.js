class FetchDeliveryResponse {
  constructor({ body, status }) {
    if (body === undefined) {
      throw new Error("body is a required property");
    }

    if (status === undefined) {
      throw new Error("status is a required property");
    }

    this.status = status;
    this.body = body;
  }
}

module.exports = FetchDeliveryResponse;