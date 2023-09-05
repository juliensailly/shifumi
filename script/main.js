// When the player clicks
function choiceMade(choice) {
    // Retrieve the bot choice and display it in the console
    var botChoice = botPlay();
    // Compare the player choice and the bot choice
    switch (choice) {
        case "rock":
            if (botChoice == "rock") {
                alertWinner("tie");
            } else if (botChoice == "paper") {
                alertWinner("bot");
            } else {
                alertWinner("player");
            }
            break;
        case "paper":
            if (botChoice == "rock") {
                alertWinner("player");
            } else if (botChoice == "paper") {
                alertWinner("tie");
            } else {
                alertWinner("bot");
            }
            break;
        case "scissors":
            if (botChoice == "rock") {
                alertWinner("bot");
            } else if (botChoice == "paper") {
                alertWinner("player");
            } else {
                alertWinner("tie");
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

function alertWinner(result) {
    alert(gameResultMessage(result));
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
