function playGame (playerInput) {
    clearMessages ();
    let randomFraction = Math.random();
    let calculation = randomFraction *3 +1;
    let randomNumber = Math.floor(calculation);

    let computerMove = getMoveName(randomNumber);

    // let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał ' + playerInput);
    console.log('wylosowana liczba to '+ randomNumber);

    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
}


function anonim1 (){
    playGame(1)
}
let button1 = document.getElementById('button1');
button1.addEventListener('click', anonim1)

function anonim2 (){
    playGame(2)
}
let button2 = document.getElementById('button2');
button2.addEventListener('click', anonim2)

function anonim3 (){
    playGame(3)
}
let button3 = document.getElementById('button3');
button3.addEventListener('click', anonim3)


