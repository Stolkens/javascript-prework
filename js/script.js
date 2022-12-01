
let randomFraction = Math.random();
let calculation = randomFraction *3 +1;
let randomNumber = Math.floor(calculation);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał ' + playerInput);
console.log('wylosowana liczba to '+ randomNumber);

let playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove);