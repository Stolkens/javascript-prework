
let randomFraction = Math.random();
let calculation = randomFraction *3 +1;
let randomNumber = Math.floor(calculation);
printMessage('wylosowana liczba to '+ randomNumber)

let computerMove = 'coś tam';

if (randomNumber == 1){
    computerMove = 'kamień';
}
else if (randomNumber == 2){
    computerMove = 'papier';
}
else {
    computerMove = 'nożyce';
}
printMessage('Mój ruch to ' + computerMove);

let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == 1){
    playerMove = 'kamień';
}
else if ( playerInput == 2){
    playerMove = 'papier';
}
else {
    playerMove = 'nożyce';
}

