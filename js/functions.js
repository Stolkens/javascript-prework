
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

