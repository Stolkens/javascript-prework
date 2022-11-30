
let randomFraction = Math.random();
let calculation = randomFraction *3 +1;
let randomNumber = Math.floor(calculation);

let computerMove = 'coś tam';

if (randomNumber == 1){
    computerMove = 'kamień';
}
else if ( randomNumber == 2){
    computerMove = 'papier';
}
else {
    computerMove = 'nożyce';
}
printMessage('Mój ruch to ' + computerMove);

let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał ' + playerInput);

let playerMove = 'byle co';

if (playerMove == 1){
    computerMove = 'kamień';
}
else if ( playerMove == 2){
    computerMove = 'papier';
}
else {
    playerMove = 'nożyce';
}