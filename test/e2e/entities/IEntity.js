class IEntity {
  constructor(uid) {
    if (uid !== undefined) {
      this.uid = uid;
    }
  }
}

module.exports = IEntity