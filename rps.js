function computerPlay(){
    let cpunumber = Math.floor(Math.random()*3) +1;
    if (cpunumber === 1){
        return "Rock";
    }
    else if(cpunumber === 2){
        return "Paper";
    }
    else if(cpunumber === 3){
        return "Scissors";
    }
}

function playRound(player){
    let cpu = computerPlay();
    if (player === cpu){
        whowon.textContent = `Both chose ${cpu}, its a draw!`;
    }
    else if (player ==="Rock" && cpu === "Paper" ||
             player ==="Paper" && cpu ==="Scissors" ||
             player ==="Scissors" && cpu =="Rock"){
        whowon.textContent =`You Lose! ${cpu} beats ${player}`; 
        ascore++;
        alien.textContent = ascore;
    }
    else if (player ==="Rock" && cpu ==="Scissors" ||
             player ==="Paper" && cpu ==="Rock" ||
             player ==="Scissors" && cpu ==="Paper"){
        whowon.textContent = `You Win! ${player} beats ${cpu}`;
        hscore++;
        human.textContent = hscore;
    }
    if (hscore === 5 || ascore === 5){
        buttons.style = "pointer-events: none"; //disables the RPS buttons.
        if (hscore ===5){
            return rpsres('human');
        }
        else if (ascore ===5){
            return rpsres('alien');
        }
    }
}

function rpsres(winner){
    body.removeChild(intro);
    const winOrLose = document.createElement('p');
    winOrLose.classList.add('winorlose');
    if (winner ==='human'){
        winOrLose.textContent = 'Humans have won the war!';
        body.insertBefore(winOrLose, buttons);
        pic.style.backgroundImage = "url('humanwins.jpg')";
        const colorchange =document.querySelectorAll('h1, p, #intro');
        colorchange.forEach(node => node.style.color = "black");
        playAgain();
    }
    else if(winner ==='alien'){
        winOrLose.textContent = 'The aliens have won! Run for the hills!';
        body.insertBefore(winOrLose, buttons);
        pic.style.backgroundImage = "url('alienwins.jpg')";
        playAgain();
    }
}

function playAgain(){
    again.textContent ='Play again?';
    exit.textContent ='Exit';
    restart.appendChild(again);
    restart.appendChild(exit);
    again.addEventListener('click', () => location.reload());
    exit.addEventListener('click', () => window.close());
}

const buttons = document.querySelector('#buttons');

const pic = document.getElementById('html');
const body = document.querySelector('#body');
const intro = document.querySelector('#intro');

const restart = document.querySelector('#restart');
const again =document.createElement('button');
const exit = document.createElement('button');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('Rock'));
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('Paper'));
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound('Scissors'));


let hscore = 0;
let ascore = 0;
const whowon = document.querySelector('.output');
const human = document.querySelector('#human');
const alien = document.querySelector('#alien');
