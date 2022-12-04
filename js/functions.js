

function getMoveName(moveId){
	if (moveId == 1){
		return 'kamień';
	}
	else if (moveId == 2){	
		return 'papier';
	}
	else if (moveId == 3){
		return 'nożyce';
	}
	printMessage ('Podałeś niewłaściwą wartość '+ moveId);
	return 'nieznany ruch'
	
}
function finalScore() {
	if (resultcomp ==5 || resultplayer ==5) {
		printFinalScore('Koniec gry!! Chcesz zagrać jeszcze raz?');
		resultcomp = 0;
		resultplayer = 0;
		
	}

}
function displayResult(computerMove, playerMove){
	
	printMessage('Ja zagrałem ' + computerMove  +', a ty '+ playerMove + ' więc ')
	if (computerMove == playerMove) {
		printMessage('Jest remis');
		printResult('Twój wynik: '+ resultplayer + ' Mój wynik: '+ resultcomp);
		
	}
	else if (computerMove == 'kamień' && playerMove == 'papier') {
		printMessage('wygrałeś!');
		resultplayer++;
		printResult('Twój wynik: '+ resultplayer + ' Mój wynik: '+ resultcomp);
		finalScore ();
		
		
	}
	else if (computerMove == 'papier' && playerMove == 'nożyce') {
		printMessage('wygrałeś!');
		resultplayer++;
		printResult('Twój wynik: '+ resultplayer + ' Mój wynik: '+ resultcomp);
		finalScore ();
		
	}
	else if (computerMove == 'nożyce' && playerMove == 'kamień') {
		printMessage('wygrałeś!');
		resultplayer++;
		printResult('Twój wynik: '+ resultplayer + ' Mój wynik: '+ resultcomp);
		finalScore ();
		
		
	}
	else {
		printMessage('przegrałeś!');
		resultcomp++;
		printResult('Twój wynik: '+ resultplayer + ' Mój wynik: '+ resultcomp);
		finalScore ();
		
	}

}

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function printResult(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}
function printFinalScore(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('final-score').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function clearResults(){
	document.getElementById('result').innerHTML = '';
}
function clearFinalScore () {
	document.getElementById('final-score').innerHTML = '';
}

