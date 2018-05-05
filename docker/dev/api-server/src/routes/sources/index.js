const express = require('express');
const router = express.Router();

const UID = require("../../lib/uid/UID");
const Source = require("../../dtos/Source");

var sources = [
  new Source(UID.create(), "NaturalSource"),
  new Source(UID.create(), "GenuineSource"),
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
    let source = new Source(uid, sourceDto.name);

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

module.exports = router;