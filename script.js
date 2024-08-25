
const  score = JSON.parse( localStorage.getItem('score')) || {
    wins: 0,
    loses:0,
    Ties:0,
} ;

updateScoreElement();
 
JSON.parse( localStorage.getItem('score'));

function pickComputerMove(){
    const randomNumber = Math.floor( Math.random() * 3);
    let computerMove = '';
if(randomNumber >= 0 && randomNumber < 1){
    computerMove = 'rock';
}else if (randomNumber >= 1 && randomNumber < 2){
    computerMove = 'paper';
} else if (randomNumber >= 2 && randomNumber < 3){
    computerMove = 'scissors';
}

return computerMove;

}


function playGame(playerMove){
let computerMove = pickComputerMove();

result = '';

if(playerMove === 'rock'){
    if(computerMove === 'rock'){
        result = 'Tie';
    } else if(computerMove === 'paper'){
        result = 'You lose';
    } else if(computerMove === 'scissors'){
        result = 'You win';
    }
} else if(playerMove === 'paper'){

    if(computerMove === 'rock'){
        result = 'You win';
    } else if(computerMove === 'paper'){
        result = 'Tie';
    } else if(computerMove === 'scissors'){
        result = 'You lose';
    }

} else if(playerMove === 'scissors'){

    if(computerMove === 'rock'){
        result = 'You lose';
    } else if(computerMove === 'paper'){
        result = 'You win';
    } else if(computerMove === 'scissors'){
        result = 'Tie';
    }
}

    if(result === 'You win'){
    score.wins += 1;
    } else if(result === 'You lose'){
    score.loses += 1;
    } else if(result === 'Tie'){
    score.Ties += 1;
    }
   
    updateScoreElement()

     document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = ` You<img src="images/${playerMove}-emoji.png" alt="rock-emoji" class="image-icon" />
    <img
      src="/images/${computerMove}-emoji.png"
      alt="scissors-emoji"
      class="image-icon"
    />Computer`;


localStorage.setItem('score', JSON.stringify(score));
/* 
alert(` You picked ${playerMove}. computer picked ${computerMove}. result ${result}
  Wins: ${score.wins} loses: ${score.loses} Ties: ${score.Ties}`) */

};

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} loses: ${score.loses} Ties: ${score.Ties}`;
}