"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function (message, body, markWidth) {
  document.querySelector(".message").textContent = message;
  document.querySelector("body").style.backgroundColor = body;
  document.querySelector(".number").style.width = markWidth;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    displayMessage("⛔ No number!", "grey");

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("correct number ✅", "#60b347", "30rem");
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📈 too high!" : "📉 too low",
        score
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you lost the game 🤕", "red");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...", "#222", "15rem");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
