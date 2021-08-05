var currentPlayerIsX;
// The following three variables record if player x won, if player o won, or if there was a tie
var XW = false;
var OW = false;
var draw = false;
var message = document.getElementById('message');

// Adding event listners to the x and o buttons player 1 can click on to choose
// their symbol for the game
// This will only run if player 1 has not yet selected a symbol
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

// Adding event listeners to each cell in the tic tac toe grid
for (let button of document.getElementsByClassName("cell")) {
  button.addEventListener("click", takeTurn, false);
}

// This function is called when a player clicks on a cell in the tic-tac-toe grid
// It makes the text-content of the cell x or o depending on whose turn it is
// This will only won if player one has selected a symbol already and if no one has won the game
// The function also disables buttons once they've been clicked so a player cannot undo or change their turn
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

// This function is called after each players turn
// It checks every possible combination that a player needs to win the game
// It also checks for ties
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

// This function is called once the computer has checked to see if anyone has won
// If someone has won, or if the game is tied, it puts a message on the screen for the 
// players to see
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

// Puts an event listener on the reset button
var reset = document.getElementById('reset');
reset.addEventListener('click', resetGame, false);

// This function is called when the reset button is clicked on
// It resets the text in each cell of the grid to dashes, resets the message
// that the players see, and resets all the variables so the players can play again
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
