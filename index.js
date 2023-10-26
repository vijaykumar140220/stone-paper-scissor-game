const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

const Himage = document.querySelector(".humanimage");
const Cimage = document.querySelector(".computerimage");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;

    if(button.id=="stone"){
      Himage.src="stone.png"
    }
    else if(button.id=="paper"){
      Himage.src="paper.png"
    }
    else{
      Himage.src="seissors.png"
    }
    
  });
});

function computerPlay() {
  const choices = ["stone", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  if(choices[randomChoice]=="stone"){
    Cimage.src="stone.png"
  }
  else if(choices[randomChoice]=="paper"){
    Cimage.src="paper.png"
  }
  else{
    Cimage.src="seissors.png"
  }
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "stone" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "stone") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
// buttons.addEventListener("click",()=>{
//   if(stone){
//     Image.src="stone.png"
//   }
//   else if(paper){
//     Image.src="paper.png"
//   }
//   else{
//     Image.src="seissors.png"
//   }
// })