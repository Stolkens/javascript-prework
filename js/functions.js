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
function displayResult(computerMove, playerMove){
	
	printMessage('Zagrałem ' + computerMove + ' a ty '+ playerMove)
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

}

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
