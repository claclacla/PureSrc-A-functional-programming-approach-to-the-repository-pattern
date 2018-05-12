var supertest = require("supertest");
var assert = require("assert");
var chance = require('chance').Chance();

var SourceService = require('./services/SourceService');
var SourceFactory = require('./factories/SourceFactory');

// Example: sudo docker exec -e apiaddress=pure-src-api-server:3000 -it PureSrc /usr/src/app/node_modules/.bin/mocha --ui tdd /usr/src/app/docker/dev/api-server/test/e2e/coordinates.js

var server = supertest.agent(process.env.apiaddress);

suite('Source', function () {
  const sourceService = new SourceService(server);
  let source = null;

  test('Should insert a new source with lat and lng', function (done) {
    const lat = chance.latitude();
    const lng = chance.longitude();

    const newSource = SourceFactory.create({
      name: chance.word({ length: 20 }),
      lat: lat,
      lng: lng
    });
    
    sourceService.insert(newSource, resSource => {    
      assert(resSource.hasOwnProperty("lat"), "The response source has NOT the lat property");
      assert(resSource.lat === lat, "The response source lat is NOT equal to lat");

      assert(resSource.hasOwnProperty("lng"), "The response source has NOT the lng property");
      assert(resSource.lng === lng, "The response source lng is NOT equal to lng");

      done();
    }, err => {
      throw err;
    });
  });
});