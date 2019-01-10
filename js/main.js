// Step 2: Randomize a dice roll (make sure it's an integer number)

// PEDMAS
var dice = Math.floor( Math.random() * 6 ) + 1;


console.log(`You rolled: ${dice}`);
// test into the document


// Step 3: Update the user interface (document) to show the diceface (svg image)

var rollElement = document.getElementById('roll');
var diceElement = document.getElementById('dice');

var diceWord = '';

if (dice == 1) {
  diceWord = 'one'
}
else if (dice == 2) {
  diceWord = 'two'
}
else if (dice == 3) {
  diceWord = 'three'
}
else if (dice == 4) {
  diceWord = 'four'
}
else if (dice == 5) {
  diceWord = 'five'
}
else if (dice == 6) {
  diceWord = 'six'
}


rollElement.innerHTML = `You rolled: ${diceWord}`;
// Change the src attribute
diceElement.setAttribute('src', `img/dice${dice}.svg`);

// This works too:
// diceElement.src = `img/dice${dice}.svg`;



// Step 4: Convert the roll number (for example: 3) to a word ("three")
