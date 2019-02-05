const assert = require('assert');

describe('Integration', function () {
  it('should check if 1 is equal is true', function (done) {
    setTimeout(() => {
      assert.equal(1, true);
      done();
    }, 1500);
  });
});
