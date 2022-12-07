    
{
let resultplayer = 0
let resultcomp = 0
    

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

}
