import './styles.css';
import { getRandomColor, getRandomInt, ready } from './utils';

let secretNumber, squares;

function doIt() {
    // find all the squares.
    squares = document.querySelectorAll('.square');
    // on each of them have something happen when they click
    let squareNumber = 1;    
    squares.forEach(function(square) {        
        setRandomColor(square);
        square.addEventListener('click', handleClick);        
        square.dataset.number = squareNumber.toString();
        squareNumber++;
    });

    // get a random number
    secretNumber = getRandomInt(1,6);
    console.log("The secret number is : ", secretNumber);

}

function handleClick(evt) {
    const currentSquare = this;

    if(parseInt(currentSquare.dataset.number) === secretNumber){                   
        setWinner(currentSquare);
        
        
        squares.forEach(function (square) {
            // remove the click handlers 
            square.removeEventListener('click', handleClick);
            
            // and turn non-winners gray
            if(square !== currentSquare){          
                square.classList.add("loser");
                clearLoserColor(square);
            }
        });

    }else{
        clearLoserColor(currentSquare);
        this.classList.add('loser');
    }
    console.log(parseInt(this.dataset.number));
}

function setRandomColor(div) {
    console.log(div);
    div.style.background = getRandomColor();    
  }

  function clearLoserColor(div) {    
    div.style.background = "";   
    div.style.borderColor = "";
    div.style.borderStyle = "";
    div.style.borderWidth = ""; 
  }

  function setWinner(div) {   
    console.log('You Win!');  
    div.style.borderColor = '#ffd700';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px';    
  }
ready(doIt);