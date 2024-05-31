const Scoreboard = require('./Scoreboard');

class Player {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    wins(amount) {
        Scoreboard.update(this.name, amount);
    }
    loses(amount) {
        Scoreboard.update(this.name, -amount);
    }
} 

module.exports = Player;