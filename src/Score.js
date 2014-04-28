'use strict';

var ScoreTypes = {
  love: 0,
  fifteen: 15,
  thirty: 30,
  forty: 40
};

function Score() {
  this.initialize();
  return this;
}

Score.prototype.initialize = function() {
  this.advantage = false;
  this.value = ScoreTypes.love;
};

Score.prototype.increment = function() {
  switch (this.value) {
    case ScoreTypes.love:
      this.value = ScoreTypes.fifteen;
      break;

    case ScoreTypes.fifteen:
      this.value = ScoreTypes.thirty;
      break;

    case ScoreTypes.thirty:
      this.value = ScoreTypes.forty;
      break;
  }
};

module.exports.ScoreTypes = ScoreTypes;
module.exports.Score = Score;
