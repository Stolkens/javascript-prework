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
	if (resultcomp == 5 || resultplayer == 5) {
		printFinalScore("Koniec gry!! Chcesz zagrać jeszcze raz?");
		resultcomp = 0;
		resultplayer = 0;
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
		resultplayer++;
	} else if (computerMove == "papier" && playerMove == "nożyce") {
		printMessage("wygrałeś!");
		resultplayer++;
	} else if (computerMove == "nożyce" && playerMove == "kamień") {
		printMessage("wygrałeś!");
		resultplayer++;
	} else {
		printMessage("przegrałeś!");
		resultcomp++;
	}
	printResult("Twój wynik: " + resultplayer + " Mój wynik: " + resultcomp);
	finalScore();
}

const printMessage = function(msg) {
	let div = document.createElement("div");
	div.innerHTML = msg;
	document.getElementById("messages").appendChild(div);
}
const printResult = function(msg) {
	let div = document.createElement("div");
	div.innerHTML = msg;
	document.getElementById("result").appendChild(div);
}
const printFinalScore = function(msg) {
	let div = document.createElement("div");
	div.innerHTML = msg;
	document.getElementById("final-score").appendChild(div);
}

const clearMessages = function() {
	document.getElementById("messages").innerHTML = "";
	document.getElementById("result").innerHTML = "";
	document.getElementById("final-score").innerHTML = "";
}

