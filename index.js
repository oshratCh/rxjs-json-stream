const JSONStream = require("JSONStream");
const Rx = require("rxjs");

module.exports = (selector, stream) =>
  Rx.Observable.create((observer) =>
    stream.pipe(JSONStream.parse(selector))
      .on('data', (data) => observer.next(data))
      .on('error', (err) => observer.error(err))
      .on('end', () => observer.complete()));
