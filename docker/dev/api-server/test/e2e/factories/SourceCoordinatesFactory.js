var chance = require('chance').Chance();

var SourceCoordinates = require('../dtos/SourceCoordinates');

class SourceCoordinatesFactory {
  static create({ lat, lng }) {
    if (!lat) {
      lat = chance.latitude();
    }

    if (!lng) {
      lng = chance.longitude();
    }

    var sourceCoordinates = new SourceCoordinates({ lat, lng });

    return sourceCoordinates;
  }
}

module.exports = SourceCoordinatesFactory;