let computer = ['rock', 'paper', 'scissors'];
let player = '';

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

function Round(player, computer) {
  console.log(player);
  console.log(computer);
  if (
    (player === 'paper' && computer === 'rock') ||
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper')
  )
    return console.log('You win');
  else if (
    (player === 'rock' && computer === 'paper') ||
    (player === 'scissors' && computer === 'rock') ||
    (player === 'paper' && computer === 'scissors')
  )
    return console.log('You lose');
  else console.log(`It's a tie`);
}
