const IDTO = require("./IDTO");

class Source extends IDTO {
  constructor(uid, name) {
    super(uid);

    if (name === undefined) {
      throw new Error("The name parameter is required");
    }

    this.name = name;
  }
}

module.exports = Source;