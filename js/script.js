
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

