class IDTO {
  constructor(uid) {
    if (uid === undefined) {
      throw new Error("The uid parameter is required");
    }

    this.uid = uid;
  }
}

module.exports = IDTO