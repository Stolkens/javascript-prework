
let randomFraction = Math.random();
let calculation = randomFraction *3 +1;
let randomNumber = Math.floor(calculation);


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
console.log('wylosowana liczba to '+ randomNumber);

let playerMove = 'nieznany ruch';

if (playerInput == 1){
    playerMove = 'kamień';
}
else if (playerInput == 2){
    playerMove = 'papier';
}
else if (playerInput == 3){
    playerMove = 'nożyce';
}
else {
    playerMove = "nieznany ruch";
    printMessage ('wpisałeś niepoprawną wartość');
}

if (computerMove == playerMove) {
    printMessage('Jest remis');
}
else if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Wygrywasz');
}
else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Wygrywasz');
}
else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Wygrywasz!');
}
else {
    printMessage('Przegrywasz!');
}