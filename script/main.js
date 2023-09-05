let buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', choiceMade(button.textContent));
}

// When the player clicks
function choiceMade(choice) {
    // The bot chooses
    let botChoice = botChoice();
    switch(choice) {
        case 'rock':
            if (botChoice == 'rock') {
                // Tie
            } else if (botChoice == 'paper') {
                // Bot wins
            } else {
                // Player wins
            }
            break;
        case 'paper':
            if (botChoice == 'rock') {
                // Player wins
            } else if (botChoice == 'paper') {
                // Tie
            } else {
                // Bot wins
            }
            break;
        case 'scissors':
            if (botChoice == 'rock') {
                // Bot wins
            } else if (botChoice == 'paper') {
                // Player wins
            } else {
                // Tie
            }
            break;
            
    }
}

function botChoice() {
    // Randomly choose between rock, paper, scissors
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}