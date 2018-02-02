var chance = require('chance').Chance();

var Source = require('../dtos/Source');

class SourceFactory {
  static create({ name }) {
    if (!name) {
      name = chance.word({ length: 20 });
    }

    var source = new Source(name);

    return source;

  }
}

module.exports = SourceFactory;