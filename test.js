var expect = require('chai').expect;
var shrug = require('./shrug');

describe('shrug', function() {
  it('should shrug', function() {
    expect(shrug()).to.equal('¯\\_(ツ)_/¯');
  });
});
