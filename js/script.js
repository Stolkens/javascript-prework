{
let resultPlayer = 0;
    resultComp = 0;
function playGame (playerInput) {
    
    
    clearMessages ();
    const randomFraction = Math.random();
    const randomNumber = Math.floor(randomFraction *3+1);
    
    if(randomFraction < 0.75){  
        playerMove = getMoveName (playerInput);
        if (playerMove == 'kamień'){
            computerMove = 'nożyce'
        }
        else if(playerMove == 'papier') {
            computerMove = 'kamień'
        }
        else {
            computerMove = 'papier'
        }
    }
    else {
        playerMove = getMoveName(playerInput);
        computerMove = getMoveName(randomNumber);   
    }     
    displayResult(computerMove, playerMove);                  
}

function start1 (){
    playGame(1)
}
let button1 = document.getElementById('button1');
button1.addEventListener('click', start1);

function start2 (){
    playGame(2)
}
let button2 = document.getElementById('button2');
button2.addEventListener('click', start2);

function start3 (){
    playGame(3)
}
let button3 = document.getElementById('button3');
button3.addEventListener('click', start3);

const getMoveName = function(moveId) {
	if (moveId == 1) {
		return "kamień";
	} else if (moveId == 2) {
		return "papier";
	} else if (moveId == 3) {
		return "nożyce";
	}
	printMessage("Podałeś niewłaściwą wartość " + moveId);
	return "nieznany ruch";
}
const finalScore = function () {
	if (resultComp == 5 || resultPlayer == 5) {
		printFinalScore("Koniec gry!! Chcesz zagrać jeszcze raz?");
		resultComp = 0;
		resultPlayer = 0;
	}
}
const displayResult = function(computerMove, playerMove) {
	printMessage(
		"Ja zagrałem " + computerMove + ", a ty " + playerMove + " więc "
	);
	if (computerMove == playerMove) {
		printMessage("Jest remis");
	} else if (computerMove == "kamień" && playerMove == "papier") {
		printMessage("wygrałeś!");
		resultPlayer++;
	} else if (computerMove == "papier" && playerMove == "nożyce") {
		printMessage("wygrałeś!");
		resultPlayer++;
	} else if (computerMove == "nożyce" && playerMove == "kamień") {
		printMessage("wygrałeś!");
		resultPlayer++;
	} else {
		printMessage("przegrałeś!");
		resultComp++;
	}
	printResult("Twój wynik: " + resultPlayer + " Mój wynik: " + resultComp);
	finalScore();
}
}
