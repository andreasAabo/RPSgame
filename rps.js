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
    const buttons = document.querySelector('#buttons');
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
    const test = document.getElementById('html');
    if (winner ==='human'){
        console.log('Humans have won the war!')
        test.style.backgroundImage = "url('humanwins.jpg')";
        const colorchange =document.querySelectorAll('h1, p, .output');
        colorchange.forEach(node => node.style.color = "black");
        playAgain();
    }
    else if(winner ==='alien'){
        console.log('The aliens have won! Retreat!');
        test.style.backgroundImage = "url('alienwins.jpg')";
        playAgain();
    }
}

function playAgain(){
    const restart = document.querySelector('#restart');
    const again =document.createElement('button');
    const exit = document.createElement('button');
    again.textContent ='Play again?';
    exit.textContent ='Exit';
    restart.appendChild(again);
    restart.appendChild(exit);
    again.addEventListener('click', () => location.reload());
    exit.addEventListener('click', () => window.close());
}


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



//HVA HAR DU LÆRT I DAG?
//
//ALLTID HA DEFER PÅ JS_SKRIPTET I HTML!!!!!
//ARROWFUNCTIONS BRUKER KUN PARAMETERE FØR PILEN, ETTERPÅ KAN DU GJERNE KALLE PÅ
//FUNKSJONER MED ARGUMENTER!
//
//CALLBACKS ER BARE FUNKSJONER DU IKKE KJØRER FØR DU HAR GJORT NOE ANNET.
//DET ER LITT VANSKELIG DET HER! KJØØØØRRAAAAA PÅÅ!
