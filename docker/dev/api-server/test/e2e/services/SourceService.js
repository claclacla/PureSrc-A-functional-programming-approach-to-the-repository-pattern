var assert = require('assert');

class SourceService {
  constructor(server) {
    this.server = server;
  }

  get(params, resolve, reject) {
    var queryParams = params || "";

    this.server
      .get("/sources?" + queryParams)
      .expect("Content-type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) reject(res.body);

        assert(Array.isArray(res.body.data), "The response body data is NOT an array");
        var sources = res.body.data;

        resolve(sources);
      });
  }

  insert(source, resolve, reject) {
    this.server
      .post("/sources")
      .set('Content-Type', 'application/json')
      .send({
        data: source
      })
      .expect("Content-type", /json/)
      .expect(201) 
      .end(function (err, res) {
        if (err) return reject(res.body);

        resolve(res.body.data);
      });
  }

  getByUid(uid, resolve, reject) {
    this.server
      .get("/sources/" + uid)
      .expect("Content-type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) reject(res.body);

        var source = res.body.data;

        resolve(source);
      });
  }

  update(uid, source, resolve, reject) {
    this.server
      .put("/sources/" + uid)
      .set('Content-Type', 'application/json')
      .send({
        data: source
      })
      .expect("Content-type", /json/)
      .expect(200) 
      .end(function (err, res) {
        if (err) return reject(res.body);

        resolve(res.body.data);
      });
  }

  remove(uid, resolve, reject) {
    this.server
      .delete("/sources/" + uid)
      .expect("Content-type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) reject(res.body);

        resolve();
      });
  }
}

module.exports = SourceService;