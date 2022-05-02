let computer = ['rock', 'paper', 'scissors'];
let player = '';
let playerScore = 0;
let cpuScore = 0;

document.getElementById('player').innerHTML = playerScore;
document.getElementById('cpu').innerHTML = cpuScore;

function ComputerPlay() {
  return computer[Math.floor(Math.random() * computer.length)];
}

function Rock() {
  ComputerPlay();
  player = 'rock';
  Round(player, computer[Math.floor(Math.random() * computer.length)]);
}

function Paper() {
  ComputerPlay();
  player = 'paper';
  Round(player, computer[Math.floor(Math.random() * computer.length)]);
}
function Scissors() {
  ComputerPlay();
  player = 'scissors';
  Round(player, computer[Math.floor(Math.random() * computer.length)]);
}

function Victory() {}

function Defeat() {}

function Round(player, computer) {
  if (playerScore === 5) console.log('Victory');
  else if (cpuScore === 5) console.log('Defeat');

  if (
    (player === 'paper' && computer === 'rock') ||
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
    document.getElementById('player').innerHTML = playerScore;
    return console.log('You win');
  } else if (
    (player === 'rock' && computer === 'paper') ||
    (player === 'scissors' && computer === 'rock') ||
    (player === 'paper' && computer === 'scissors')
  ) {
    cpuScore++;
    document.getElementById('cpu').innerHTML = cpuScore;
    return console.log('You lose');
  } else console.log(`It's a tie`);
}
