class IDTO {
  constructor(uid) {
    if (uid === undefined) {
      throw new Error("The parameter UID is required");
    }

    this.uid = uid;
  }
}

module.exports = IDTO