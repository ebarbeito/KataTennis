function Match(player1, player2) {
  this.players = [
    {
      name: player1 || 'Player 1',
      score: 0
    },
    {
      name: player2 || 'Player 2',
      score: 0
    }
  ];
}

module.exports.Match = Match;