const DOMSelectors = {
  content: document.querySelector(".content"),
  rock: document.querySelector("#rock"),
  paper: document.querySelector("#paper"),
  scissors: document.querySelector("#scissors"),
  historyButton: document.querySelector("#history"),
  history: document.querySelector(".history"),
};
const history = [];

function returnInput(input) {
  let output;

  if (input == 0) {
    output = "rock";
  } else if (input == 1) {
    output = "paper";
  } else {
    output = "scissors";
  }

  return output;
}

function rockPaperScissors(input) {
  const random = Math.floor(Math.random() * 100);
  let opponentChoice;
  let outcome; //gets random number from 1 to 100, assigning numerical values to rock, paper, and scissors based on how it divided into 3 and 2, and then it compared the random value generated to the input value to determine the winner

  for (let i = 0; i <= random; i++) {
    //iteration - keep playing more than once
    if (i % 3 == 0) {
      //selection - determining what out of RPS it is
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }
  }
  //sequencing
  if (opponentChoice == "rock") {
    if (input == 1) {
      outcome = "win";
    } else if (input == 2) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else if (opponentChoice == "paper") {
    if (input == 2) {
      outcome = "win";
    } else if (input == 0) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else {
    if (input == 0) {
      outcome = "win";
    } else if (input == 1) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  }
  history.push(outcome);

  DOMSelectors.history.innerHTML = "";
  DOMSelectors.content.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="${outcome}">
    <p>Your choice: ${returnInput(input).toUpperCase()}</p>
    <p>Opponent choice: ${opponentChoice.toUpperCase()}</p>
    <h4>${outcome.toUpperCase()}</h4>
    </div>
    `
  );
}

function getHistory() {
  //counts the amount of wins losses and draws, appends such amount
  DOMSelectors.content.innerHTML = "";
  DOMSelectors.history.innerHTML = "";
  let win = 0;
  let lose = 0;
  let draw = 0;

  for (let i = 0; i < history.length; i++) {
    //iteration
    if (history[i] == "win") {
      win++;
    } else if (history[i] == "lose") {
      lose++; //selection
    } else {
      draw++;
    } //sequencing

    DOMSelectors.history.insertAdjacentHTML(
      "afterbegin",
      `<div class="historyCard" id="${history[i]}">
        <h4>Game ${i + 1}: ${history[i].toUpperCase()}</h4>
        </div>`
    );
  }

  DOMSelectors.history.insertAdjacentHTML(
    "afterbegin",
    `<h2>Win Rate: ${((win / (win + lose + draw)) * 100)
      .toString()
      .substring(0, 5)}%</h2>
        <h3>Wins: ${win} | Losses: ${lose} | Draws: ${draw}</h3>`
  );
}

DOMSelectors.rock.addEventListener("click", function () {
  rockPaperScissors(0);
});

DOMSelectors.paper.addEventListener("click", function () {
  rockPaperScissors(1);
});

DOMSelectors.scissors.addEventListener("click", function () {
  rockPaperScissors(2);
});

DOMSelectors.historyButton.addEventListener("click", function () {
  getHistory();
});
