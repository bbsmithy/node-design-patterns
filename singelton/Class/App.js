const Game = require('./Game');
const Player = require('./Player');

const Mike = new Player('Pete')
const Jeff = new Player('Mike')
const Poker = new Game();

Poker.join(Mike)
Poker.join(Jeff)

Mike.wins(100)
Jeff.loses(100)
Jeff.wins(250)

console.log(Poker.scores())
console.log("Winner winner!!! ", Poker.getWinner())





