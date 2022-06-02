
function guessGame(min, max){
  min = 1
  max = 2
  let points = 0;
let playerName = prompt("Enter Your Name")

while(true){
  let userInput = prompt(`Guess a number between 1 and ${max}`)
let computerGuess = Math.floor(Math.random() * (max - min + 1) + min);

if (userInput != computerGuess) break;
max++
points++

}
prompt(`Game Over, ${playerName} scored ${points} points"`)
}

guessGame();