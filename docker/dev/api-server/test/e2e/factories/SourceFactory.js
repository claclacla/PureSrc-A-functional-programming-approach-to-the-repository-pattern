var chance = require('chance').Chance();

var Source = require('../dtos/Source');

class SourceFactory {
  static create({ name, lat, lng }) {
    if (!name) {
      name = chance.word({ length: 20 });
    }

    var source = new Source({ name });

    if(lat) {
      source.lat = lat;
    }

    if(lng) {
      source.lng = lng;
    }

    return source;

  }
}

module.exports = SourceFactory;