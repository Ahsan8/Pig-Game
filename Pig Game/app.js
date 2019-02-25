/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScore, gamePlay;

init();

// add evenet listener

document.querySelector('.btn-roll').addEventListener('click', function() {


    if (gamePlay) {
        

    let dice=Math.floor(Math.random()*6 + 1); 

    let diceDom=document.querySelector('.dice');

    diceDom.style.display='block';

    diceDom.src='dice-' + dice + '.png';

    // update the round score only if dice is not 1

    // let playerTotalScore=document.querySelector('#score-0');

    if (dice !==1) {

        roundScore+=dice;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;


        
    } else {

        switchPlayer();

      
        
    }

};

   
});




// Hold event listener


document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlay) {
        

    // add current score to global score


    scores[activePlayer]+=roundScore;


    // display in ui


    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];

  

    // check if player won the game

    if (scores[activePlayer] >=20) {

        document.querySelector('#name-' + activePlayer).textContent='I won!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        gamePlay=false;
        
    } else {

          // switch to next player

          switchPlayer();
        
    }

};


    
});


function switchPlayer() {

    activePlayer===0 ? activePlayer=1: activePlayer=0; 
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');

    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';
    
};



// new game event listener



document.querySelector('.btn-new').addEventListener('click', init);

function init( ) {

scores=[0,0];
roundScore= 0;
activePlayer=0;
gamePlay=true;

document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-1').textContent=0;
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';

// remove class for new game starts

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

// remove also active class too

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');
    
};