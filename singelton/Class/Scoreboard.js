class Scoreboard {
  constructor() {
    this.board = [];
  }
  join(name) {
    this.board.push({
        name,
        score: 0
    });
  }
  leave(name) {
    this.board = this.board.filter(player => player.name !== name);
  }
  update(name, points) {
    const player = this.board.find(player => player.name === name);
    if (player) {
        player.score += points;
    }
  }
  getBoard() {
    return this.board;
  }
  sort() {
    return this.board.sort((a, b) => b.score - a.score);
  }
}

// module.exports caches the result of the first require call
// which means that the same Scoreboard is used for each require and the
// internal state of the scoreboard is shared between all uses of scoreboard
// This is why when requiring Scoreboard in Player and Game the same instance is used
// and the state of the scoreboard is shared between the two classes, this is a singleton
module.exports = new Scoreboard();