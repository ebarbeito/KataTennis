'use strict';

describe('KataTennis', function() {
  
  it('can create a new tennis match', function() {
    var match = new TennisMatch();
    expect(match).toBeDefined();
  });
  
});