var botScore = 0,
    playerScore = 0;
retrieveScore();

// Function to retrieve the score from local storage when starting the game
function retrieveScore() {
    if (localStorage.getItem("playerScore") != null) {
        playerScore = localStorage.getItem("playerScore");
    }
    if (localStorage.getItem("botScore") != null) {
        botScore = localStorage.getItem("botScore");
    }
    document.getElementById("global_score").innerHTML =
        "<p>Player : " + playerScore + "</p> <p>Bot : " + botScore + "</p>";
}

// When the player clicks
function choiceMade(choice) {
    // Retrieve the bot choice and display it in the console
    var botChoice = botPlay();
    // Compare the player choice and the bot choice
    switch (choice) {
        case "rock":
            if (botChoice == "rock") {
                gameEnded(choice, botChoice, "tie");
            } else if (botChoice == "paper") {
                gameEnded(choice, botChoice, "bot");
            } else {
                gameEnded(choice, botChoice, "player");
            }
            break;
        case "paper":
            if (botChoice == "rock") {
                gameEnded(choice, botChoice, "player");
            } else if (botChoice == "paper") {
                gameEnded(choice, botChoice, "tie");
            } else {
                gameEnded(choice, botChoice, "bot");
            }
            break;
        case "scissors":
            if (botChoice == "rock") {
                gameEnded(choice, botChoice, "bot");
            } else if (botChoice == "paper") {
                gameEnded(choice, botChoice, "player");
            } else {
                gameEnded(choice, botChoice, "tie");
            }
            break;
    }
}

function botPlay() {
    // Randomly choose between rock, paper, scissors
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function gameEnded(playerChoice, botChoice, result) {
    displayResult(playerChoice, botChoice, result);
    updateGlobalScore(result);
    addToHistory(playerChoice, botChoice, result);
}

function gameResultMessage(result) {
    if (result == "tie") {
        return "Tie!";
    } else if (result == "player") {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Display on the page the player choice and the bot choice and the result
function displayResult(playerChoice, botChoice, result) {
    document.getElementById("results").innerHTML =
        "<p>Player : " +
        playerChoice +
        "</p> <p>Bot : " +
        botChoice +
        "</p> <p>Result : " +
        gameResultMessage(result) +
        "</p>";
}

// Update the global score
function updateGlobalScore(result) {
    if (result == "player") {
        playerScore++;
    } else if (result == "bot") {
        botScore++;
    }
    storeScore();
    document.getElementById("global_score").innerHTML =
        "<p>Player : " + playerScore + "</p> <p>Bot : " + botScore + "</p>";
}

// Store the score in the local storage
function storeScore() {
    localStorage.setItem("playerScore", playerScore);
    localStorage.setItem("botScore", botScore);
}

// Function to delete the score from local storage
function deleteStoredScore() {
    localStorage.removeItem("playerScore");
    localStorage.removeItem("botScore");
    playerScore = 0;
    botScore = 0;
    document.getElementById("global_score").innerHTML =
        "<p>Player : " + playerScore + "</p> <p>Bot : " + botScore + "</p>";
    document.getElementById("history").innerHTML = "";
}

// Function to add the result of the game to the history
function addToHistory(playerChoice, botChoice, result) {
    var history = document.getElementById("history");
    var newHistory = document.createElement("li");
    newHistory.textContent = "Player : " + playerChoice + " Bot : " + botChoice;
    if (result == "player") {
        newHistory.style.backgroundColor = "green";
    } else if (result == "bot") {
        newHistory.style.backgroundColor = "red";
    } else {
        newHistory.style.backgroundColor = "grey";
    }
    history.appendChild(newHistory);
}
