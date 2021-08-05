var currentPlayerIsX;
var XW = false;
var OW = false;
var draw = false;
var message = document.getElementById('message');

for (let symbol of document.getElementsByClassName("symbol")) {
  symbol.addEventListener("click", function () {
    if (currentPlayerIsX != false && currentPlayerIsX != true) {
      if (symbol.textContent == 'X') {
        currentPlayerIsX = true;
        message.innerText = 'Player 1 is X and player 2 is O';
      }
      else if (symbol.textContent == 'O') {
        currentPlayerIsX = false;
        message.innerText = 'Player 1 is O and player 2 is X';
      }
    }
  });
}

for (let button of document.getElementsByClassName("cell")) {
  button.addEventListener("click", takeTurn, false);
}

function takeTurn() {
  if (currentPlayerIsX == true || currentPlayerIsX == false) {
    this.classList.add('disabled');
    if (XW == false && OW == false) {
      if (currentPlayerIsX) {
        this.textContent = "X";
        this.style.color = 'black';
      } else {
        this.textContent = "O";
        this.style.color = 'red';
      }
      checkForWin();
      endGame();
      currentPlayerIsX = !currentPlayerIsX;

    }
  }
}
function checkForWin() {
  var buttons = document.getElementsByClassName("cell");
  var count = 0;
  if (buttons[0].textContent == "X" && buttons[1].textContent == "X" && buttons[2].textContent == "X") {
    XW = true;
  }
  else if (buttons[0].textContent == "X" && buttons[3].textContent == "X" && buttons[6].textContent == "X") {
    XW = true;
  }
  else if (buttons[6].textContent == "X" && buttons[7].textContent == "X" && buttons[8].textContent == "X") {
    XW = true;
  }
  else if (buttons[1].textContent == "X" && buttons[4].textContent == "X" && buttons[7].textContent == "X") {
    XW = true;
  }
  else if (buttons[2].textContent == "X" && buttons[5].textContent == "X" && buttons[8].textContent == "X") {
    XW = true;
  }
  else if (buttons[0].textContent == "X" && buttons[4].textContent == "X" && buttons[8].textContent == "X") {
    XW = true;
  }
  else if (buttons[2].textContent == "X" && buttons[4].textContent == "X" && buttons[6].textContent == "X") {
    XW = true;
  }
  else if (buttons[3].textContent == "X" && buttons[4].textContent == "X" && buttons[5].textContent == "X") {
    XW = true;
  }
  else {
    if (buttons[0].textContent == "O" && buttons[1].textContent == "O" && buttons[2].textContent == "O") {
      OW = true;
    }
    else if (buttons[0].textContent == "O" && buttons[3].textContent == "O" && buttons[6].textContent == "O") {
      OW = true;
    }
    else if (buttons[6].textContent == "O" && buttons[7].textContent == "O" && buttons[8].textContent == "O") {
      OW = true;
    }
    else if (buttons[1].textContent == "O" && buttons[4].textContent == "O" && buttons[7].textContent == "O") {
      OW = true;
    }
    else if (buttons[2].textContent == "O" && buttons[5].textContent == "O" && buttons[8].textContent == "O") {
      OW = true;
    }
    else if (buttons[0].textContent == "O" && buttons[4].textContent == "O" && buttons[8].textContent == "O") {
      OW = true;
    }
    else if (buttons[2].textContent == "O" && buttons[4].textContent == "O" && buttons[6].textContent == "O") {
      OW = true;
    }
    else if (buttons[3].textContent == "O" && buttons[4].textContent == "O" && buttons[5].textContent == "O") {
      OW = true;
    }
  }
  if (XW != true && OW != true) {
    for (let i = 0; i <= 8; i++) {
      if (buttons[i].textContent != "-") {
        count++;
      }
    }
    if (count == 9) {
      draw = true;
    }
  }
  // if (buttons[0].textContent != "-" && buttons[1].textContent != "-" && buttons[2].textContent != "-" && buttons[3].textContent != "-" && buttons[4].textContent != "-" && buttons[5].textContent != "-" && buttons[6].textContent != "-" && buttons[7].textContent != "-" && buttons[8].textContent != "-" && XW != true && OW != true) {
  //   alert("Draw");
  // }
}

function endGame() {
  if (draw == true) {
    message.innerText = 'There is a tie. Press the reset button to play again.';
  }
  else if (XW == true) {
    message.innerText = 'Player X won! Press the reset button to play again.';
    message.style.color = 'green'
  }
  else if (OW == true) {
    message.innerText = 'Player O won! Press the reset button to play again.';
    message.style.color = 'green'
  }
}

var reset = document.getElementById('reset');
reset.addEventListener('click', resetGame, false);

function resetGame() {
  for (let button of document.getElementsByClassName("cell")) {
    button.classList.remove('disabled');
    button.textContent = "-";
    button.style.color = 'black';
    currentPlayerIsX = null;
    XW = false;
    OW = false;
    draw = false;
    message.innerText = 'Choose a symbol for player 1 to start';
    message.style.color = 'black';
  }
}
