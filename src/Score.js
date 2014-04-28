'use strict';

var ScoreTypes = {
  love: 0,
  fifty: 15,
  thirty: 30,
  forty: 40
};

function Score() {
  this.value = ScoreTypes.love;
  return this;
}

module.exports.ScoreTypes = ScoreTypes;
module.exports.Score = Score;
