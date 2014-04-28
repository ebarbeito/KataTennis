'use strict';

function Player(name) {
  this.name = name || 'Anonymous';
  this.score = 0;
  return this;
}

Player.prototype.winPoint = function() {
  switch(this.score) {
    case 0:
      this.score = 15;
      break;
    
    case 15:
      this.score = 30;
      break;
  }
};

module.exports.Player = Player;
