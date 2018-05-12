const IDTO = require("./IDTO");

class Source extends IDTO {
  constructor({ uid, name, lat, lng }) {
    super(uid);

    if (name === undefined) {
      throw new Error("The name parameter is required");
    }

    this.name = name;
    this.lat = lat ? lat : 0;
    this.lng = lng ? lng : 0;
  }
}

module.exports = Source;