class PureSrcError extends Error {
  constructor(...params) {
    super(...params);
    Error.captureStackTrace(this, PureSrcError);
  }
}

module.exports = PureSrcError