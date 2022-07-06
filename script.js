'use strict';

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');


const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
const diceEL = document.querySelector('.dice');


const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting Conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function (){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0? 1 : 0;
    // console.log(activePlayer)
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}


// Rolling Dice Functionality
btnRoll.addEventListener('click', function (){
    // 1 generatinng a random dice roll
    if (playing){
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

    //2.Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    // check for rolled 1: if true switch to next player

    if(dice !== 1){
        // add dice to current score
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;


    }else{
        // switch to next player
       switchPlayer();

    }
};
})

btnHold.addEventListener('click', function(){
    if (playing){
    
    scores[activePlayer]+=currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    // check player score ==100
    if (scores[activePlayer] >=10){
        playing = false;
         diceEL.classList.add('hidden');
        
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }else{
        switchPlayer();

    }
};

})
 
