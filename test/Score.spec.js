'use strict';

var ScoreTypes = require('../src/Score').ScoreTypes;

var allowedNames = ['love', 'fifty', 'thirty', 'forty'];
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
  
  it('score name must be love or fifty or thirty or forty', function() {
    expect(names).toEqual(allowedNames);
  });
  
  it('score value must be 0 or 15 or 30 or 40', function() {
    expect(values).toEqual(allowedValues);
  });
  
});
