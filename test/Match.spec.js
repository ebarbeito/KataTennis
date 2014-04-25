'use strict';

var Match = require('../src/Match').Match;

describe('Match', function() {
  
  it('can create a new tennis match', function() {
    var match = new Match();
    expect(match).toBeDefined();
  });
  
  it('a match must have players', function() {
    var match = new Match();
    expect(match.players).toBeDefined();
  });
  
  it('a match must have two players', function() {
    var match = new Match();
    expect(match.players.length).toBe(2);
  });
  
  it('a match must have two players defined by user', function() {
    var match = new Match('Nadal', 'Pete Sampras');
    expect(match.players[0]).toBe('Nadal');
    expect(match.players[1]).toBe('Pete Sampras');
  });
  
});