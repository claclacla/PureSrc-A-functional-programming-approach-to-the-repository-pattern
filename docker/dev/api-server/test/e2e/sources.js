var supertest = require("supertest");
var assert = require("assert");
var chance = require('chance').Chance();

var SourceService = require('./services/SourceService');
var SourceFactory = require('./factories/SourceFactory');

// Example: sudo docker exec -e apiaddress=pure-src-api-server:3000 -it PureSrc /usr/src/app/node_modules/.bin/mocha --ui tdd /usr/src/app/docker/dev/api-server/test/e2e/sources.js

var server = supertest.agent(process.env.apiaddress);

const SOURCE_NAME = chance.word({ length: 20 });

suite('Source', function () {
  const sourceService = new SourceService(server);
  let source = null;

  test('Should insert a new source', function (done) {
    const newSource = SourceFactory.create({
      name: SOURCE_NAME
    });

    sourceService.insert(newSource, resSource => {
      assert(resSource.name === SOURCE_NAME, "The response source has NOT the new source name");

      done();
    }, err => {
      throw err;
    });
  });

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

  test('Should get the sources', function (done) {
    sourceService.get("", resSources => {
      source = resSources.find(resSource => resSource.name === SOURCE_NAME);

      assert(source !== null, "The new source has NOT been found");

      done();
    }, err => {
      throw err;
    });
  });

  test('Should get the new source', function(done) {
    sourceService.getByUid(source.uid, resSource => {
      assert(resSource.name === SOURCE_NAME, "The response source has NOT the new source name");

      done();
    }, err => {
      throw err;
    });
  });

  test('Should update the source data', function(done) {
    source.name = chance.word({ length: 20 });

    sourceService.update(source.uid, source, resSource => {
      assert(source.name === resSource.name, "The response source name is NOT equal to the new source name");
      done();
    }, err => {
      throw err
    });
  });

  test('Should delete the source', function(done) {
    sourceService.remove(source.uid, () => {
      done();
    }, err => {
      throw err;
    });
  });
});