const Player = function(){
  this.cards = [];
};

Player.prototype.addCard = function(card){
  this.cards.push(card);
};

module.exports = Player;

// player should be able to play the top card (assuming last card in array)
Player.prototype.returnTopCardChosenAttributeValue = function(attributeChosen){
  let topCard = this.cards.pop();
  let score = 0;
  if (attributeChosen === "intelligence"){
    score = topCard.intelligence;
  }
  else if (attributeChosen === "strength") {
    score = topCard.strength;
  }
  else if (attributeChosen === "agility") {
    score = topCard.agility;
  }
  return score;
};
