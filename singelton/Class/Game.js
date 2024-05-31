const Scoreboard = require('./Scoreboard');

class Game {
    join(player) {
        Scoreboard.join(player.name)
    }
    scores() {
        return Scoreboard.getBoard();
    }
    getWinner() {
        return Scoreboard.sort()[0];
    }
}

module.exports = Game;