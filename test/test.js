const fs = require("fs");
const RxJSJSONStream = require("../")
const expect = require("chai").expect;

describe("RxJS JSONStream", () => {

  const file = fs.createReadStream("./test/test.json");
  const stream = RxJSJSONStream("*..id", file);

  it("loads and transforms object", (done) => {
    let total = 0;
    stream
      .map(obj => obj + 1)
      .subscribe({
        next: (obj) => total += obj,
        complete: () => {
          expect(total).to.equal(6)
          done();
        }
      });
  });

});
