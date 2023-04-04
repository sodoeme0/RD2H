const prompt = require("prompt-sync")({ sigint: true });
let wins = [];
let ties = [];
let losses = [];
console.log("Lets play rock paper scissors");
rPS();

//Main function
function rPS() {
  //user input
  let selection = Number(promptSelection());
  //rdm decimal from 1-3, floored
  let cpuSelection = Math.floor(Math.random() * 3) + 1;

  //boolean statements to cover all cases
  if (selection === cpuSelection) {
    console.log("It's a tie");
    ties++;
  } else if (selection === 1 && cpuSelection === 2) {
    console.log("You lose");
    losses++;
  } else if (selection === 1 && cpuSelection === 3) {
    console.log("You win");
    wins++;
  } else if (selection === 2 && cpuSelection === 3) {
    console.log("You lose");
    losses++;
  } else if (selection === 2 && cpuSelection === 1) {
    console.log("You win");
    wins++;
  } else if (selection === 3 && cpuSelection === 2) {
    console.log("You win");
    wins++;
  } else if (selection === 3 && cpuSelection === 1) {
    console.log("You lose");
    losses++;
  } else {
    //If no cases are true, user has entered invalid input.
    //notify user and reprompt
    console.log("Invalid input, please select a number 1-3");
    rPS();
    return;
  }

  playAgain();
}

//prompts user selection and returns input
function promptSelection() {
  console.log("Make a selection\n 1. Rock\n 2. Paper\n 3. Scissors ");
  let selection = prompt();
  return selection;
}

//Display running score and prompt user to play again
function playAgain() {
  console.log(
    `----------------------------\nRunning Score: Wins: ${wins}, Ties: ${ties}, Losses: ${losses} \nDo you want to play again?\n 1. yes\n 2. no `
  );
  let again = Number(prompt());

  if (again === 1) {
    rPS();
  } else if (again === 2) {
    return;
  } else {
    //If user input does not equal 1 or 2 notify user and reprompt
    console.log("Invalid input, please select a number 1-2");
    playAgain();
    return;
  }
}
