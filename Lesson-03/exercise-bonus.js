let cards = [['diamonds', 'clubs', 'hearts', 'spades'],
             ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']];

for (let i = 0; i < cards[0].length; i++) {
  for (let j = 0; j < cards[1].length; j++) {
    let cardName = cards[1][j] + ' of ' + cards[0][i];
    console.log(cardName);
  }
}
