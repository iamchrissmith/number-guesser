function processGuess(e) {
  e.preventDefault();
  var guess = guesser.elements.value.value;
  var guesses = document.querySelector('.guesses ul');
  var textNode = document.createTextNode(guess);
  var li = document.createElement("LI");

  li.appendChild(textNode);

  guesses.appendChild(li);
  guesser.elements.value.value = '';
}

var guesser = document.querySelector('#guesser');

guesser.addEventListener('submit', processGuess);
