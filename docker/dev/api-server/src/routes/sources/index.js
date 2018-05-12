const express = require('express');
const router = express.Router();

const UID = require("../../lib/uid/UID");
const Source = require("../../dtos/Source");
const Coordinates = require("../../dtos/Coordinates");

var sources = [
  new Source({ uid: UID.create(), name: "NaturalSource", lat: 64.542610, lng: -18.596245 }),
  new Source({ uid: UID.create(), name: "GenuineSource", lat: 58.191154, lng: -110.570265 }),
];

router
  .get('/', function (req, res, next) {
    res.send({
      data: sources
    });
  })
  .post('/', function (req, res, next) {
    let sourceDto = req.body.data;

    let uid = UID.create();
    let source = new Source({ uid, name: sourceDto.name });

    if (sourceDto.lat) {
      source.lat = sourceDto.lat;
    }

    if (sourceDto.lng) {
      source.lng = sourceDto.lng;
    }

    sources.push(source);

    res.status(201).send({
      data: source
    });
  })
  .get('/:uid', function (req, res, next) {
    let uid = req.params.uid;
    let source = sources.find(source => source.uid === uid);

    res.send({
      data: source
    });
  })
  .put('/:uid', function (req, res, next) {
    let uid = req.params.uid;
    let sourceDto = req.body.data;

    let resSource = null;

    sources = sources.map(source => {
      if (source.uid === uid) {
        source = sourceDto;
        resSource = source;
      }

      return source;
    });

    res.send({
      data: resSource
    });
  })
  .delete('/:uid', function (req, res, next) {
    let uid = req.params.uid;
    sources = sources.filter(source => source.uid !== uid);

    res.send();
  });

// coordinates

router
  .get("/:uid/coordinates", function (req, res, next) {
    let uid = req.params.uid;
    
    let source = sources.find(source => source.uid === uid);

    let coordinates = new Coordinates({ uid: UID.create(), lat: source.lat, lng: source.lng });

    res.send({
      data: coordinates
    });
  })
  .put('/:uid/coordinates', function (req, res, next) {
    let uid = req.params.uid;
    let sourceCoordinatesDto = req.body.data;

    let resSource = null;

    sources = sources.map(source => {
      if (source.uid === uid) {
        source.lat = sourceCoordinatesDto.lat;
        source.lng = sourceCoordinatesDto.lng;
        resSource = source;
      }

      return source;
    });

    res.send({
      data: resSource
    });
  });

module.exports = router;