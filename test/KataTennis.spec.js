'use strict';

var TennisMatch = require('../src/KataTennis').TennisMatch;

describe('KataTennis', function() {
  
  it('can create a new tennis match', function() {
    var match = new TennisMatch();
    expect(match).toBeDefined();
  });
  
});