var answer = Math.floor(Math.random() * 100);
console.log(answer);

function processResult (guess, diff) {
  result = "You guessed " + guess;
  if (diff < 0) { return result + " - Too High!" }
  if (diff > 0) { return result + " - Too Low!" }
  return result + " - BOOM!";
}

function processGuess(e) {
  e.preventDefault();
  var guess = parseInt(guesser.elements.value.value),
      difference = answer - guess,
      guesses = document.querySelector('.guesses ul'),
      result = processResult(guess, difference);
      textNode = document.createTextNode(result),
      li = document.createElement("LI");

  li.appendChild(textNode);
  reset.disabled = false;

  guesses.appendChild(li);
  guesser.elements.value.value = '';
}

var guesser = document.querySelector('#guesser'),
    guessInput = document.querySelector('#guesser #value'),
    clear = document.querySelector('#clear'),
    reset = document.querySelector('#reset');

guesser.addEventListener('submit', processGuess);
guessInput.addEventListener('change', function() {
  clear.disabled = (guessInput.value === '');
});
reset.addEventListener('click', function() {
  window.location.reload();
});
