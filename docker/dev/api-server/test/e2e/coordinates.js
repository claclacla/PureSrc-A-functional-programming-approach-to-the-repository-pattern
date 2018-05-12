var supertest = require("supertest");
var assert = require("assert");
var chance = require('chance').Chance();

var SourceService = require('./services/SourceService');
var SourceFactory = require('./factories/SourceFactory');
var SourceCoordinatesFactory = require('./factories/SourceCoordinatesFactory');

// Example: sudo docker exec -e apiaddress=pure-src-api-server:3000 -it PureSrc /usr/src/app/node_modules/.bin/mocha --ui tdd /usr/src/app/docker/dev/api-server/test/e2e/coordinates.js

var server = supertest.agent(process.env.apiaddress);

const lat = chance.latitude();
const lng = chance.longitude();

suite('Source', function () {
  const sourceService = new SourceService(server);
  let source = null;

  test('Should insert a new source with lat and lng', function (done) {
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

      source = resSource;     

      done();
    }, err => {
      throw err;
    });
  });

  test("Should get the source coordinates", function(done) {
    sourceService.getCoordinates(source.uid, resSourceCoordinates => {
      assert(resSourceCoordinates.hasOwnProperty("lat"), "The response source has NOT the lat property");
      assert(resSourceCoordinates.lat === lat, "The response source lat is NOT equal to lat");

      assert(resSourceCoordinates.hasOwnProperty("lng"), "The response source has NOT the lng property");
      assert(resSourceCoordinates.lng === lng, "The response source lng is NOT equal to lng");

      done();
    }, err => {
      throw err;
    });
  });

  test("Should set the source coordinates", function(done) {
    const newSourceCoordinates = SourceCoordinatesFactory.create({});

    sourceService.setCoordinates(source.uid, newSourceCoordinates, resSourceCoordinates => {
      assert(resSourceCoordinates.hasOwnProperty("lat"), "The response source has NOT the lat property");
      assert(resSourceCoordinates.lat === newSourceCoordinates.lat, "The response source lat is NOT equal to lat");

      assert(resSourceCoordinates.hasOwnProperty("lng"), "The response source has NOT the lng property");
      assert(resSourceCoordinates.lng === newSourceCoordinates.lng, "The response source lng is NOT equal to lng");

      done();
    }, err => {
      throw err;
    });
  });
});