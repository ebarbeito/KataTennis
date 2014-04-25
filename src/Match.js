function Match(player1, player2) {
  this.players = [
    player1 || 'Player 1',
    player2 || 'Player 2'
  ];
}

module.exports.Match = Match;