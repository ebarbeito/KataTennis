'use strict';

var Score = require('../src/Score').Score;
var ScoreTypes = require('../src/Score').ScoreTypes;

var allowedNames = ['love', 'fifteen', 'thirty', 'forty'];
var allowedValues = [0, 15, 30, 40];

describe('Score types', function() {
  var names;
  var values;
  
  beforeEach(function() {
    names = Object.keys(ScoreTypes);
    values = [];
    for (var i in ScoreTypes) {
        values.push(ScoreTypes[i]);
    }
  });
  
  it('score name must be love or fifteen or thirty or forty', function() {
    expect(names).toEqual(allowedNames);
  });
  
  it('score value must be 0 or 15 or 30 or 40', function() {
    expect(values).toEqual(allowedValues);
  });
  
});

describe('Score', function() {
  
  var score;
  
  beforeEach(function() {
    score = new Score();
  });
  
  it('a score can be initialized', function() {
    score.initialize();
    expect(score.value).toBe(ScoreTypes.love);
  });
  
  it('a score can be incremented', function() {
    for(var type in ScoreTypes) {
      expect(score.value).toBe(ScoreTypes[type]);
      score.increment();
    }
  });
  
});
