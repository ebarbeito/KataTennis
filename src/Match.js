'use strict';

var Player = require('./Player').Player;
var ScoreTypes = require('../src/Score').ScoreTypes;

function Match(player1, player2) {
  this.players = [
    new Player(player1 || 'Player 1'),
    new Player(player2 || 'Player 2')
  ];
  this.winner = null;
}

Match.prototype.addPoint = function(player) {
  var strPlayer = JSON.stringify(player);
  var strPlayer1 = JSON.stringify(this.players[0]);
  var strPlayer2 = JSON.stringify(this.players[1]);
  
  if (strPlayer !== strPlayer1 && strPlayer !== strPlayer2) {
    throw new Error('Ilegal player');
  }
  
  var oponent = (strPlayer !== strPlayer1 ? this.players[0] : this.players[1]);

  if (this.isDeuce()) {
    this.resolveAdvantage(player, oponent);
  } else {
    this.resolvePoint(player);
  }
  
  if (this.winner) {
    oponent.score.initialize();
    player.score.initialize();
  }
};

Match.prototype.isDeuce = function() {
  return ScoreTypes.forty === this.players[0].score.value &&
         ScoreTypes.forty === this.players[1].score.value;
};

Match.prototype.resolveAdvantage = function(player, oponent) {
  if (!oponent.score.isAdvantage()) {
    if (!player.score.isAdvantage()) {
      player.score.advantage = true;
    } else {
      this.winner = player;
    }
  } else {
    oponent.score.advantage = false;
  }
};

Match.prototype.resolvePoint = function(player) {
  if (ScoreTypes.forty === player.score.value) {
    this.winner = player;
  } else {
    player.addPoint();
  }
};

module.exports.Match = Match;
