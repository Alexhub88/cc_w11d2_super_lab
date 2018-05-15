// const Card = require('card.js');

const Game = function(player1, player2){
  this.players = [player1, player2];

  // let card1 = new Card ('Superman', 6, 9, 7);
  // let card2 = new Card ('Scarlet Witch', 7, 10, 5);
  // let card3 = new Card ('Black Widow', 8, 6, 9);
  // let card4 = new Card ('The Flash', 7, 4, 10);
  // let card5 = new Card ('Wonder Woman', 8, 7, 5);
  // let card6 = new Card ('Batman', 10, 5, 6);

  this.deck = [];
};


Game.prototype.addCardToDeck = function(card){
this.deck.push(card);

}

Game.prototype.dealCardToPlayer = function(player){
  let cardToGive = this.deck.pop();
  player.addCard(cardToGive);

}


module.exports = Game;
