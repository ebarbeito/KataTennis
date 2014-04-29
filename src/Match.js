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
    if (!oponent.score.isAdvantage()) {
      if (player.score.isAdvantage()) {
        this.winner = player;
      } else {
        player.score.advantage = true;
      }
    } else {
      oponent.score.advantage = false;
    }
  } else {
    if (ScoreTypes.forty === player.score.value) {
      this.winner = player;
    } else {
      player.addPoint();
    }
  }
  
  if (this.winner) {
    oponent.score.initialize();
    player.score.initialize();
  }
};

Match.prototype.isDeuce = function() {
  return ScoreTypes.forty === this.players[0].score.value &&
         ScoreTypes.forty === this.players[1].score.value ;
};

module.exports.Match = Match;
