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
    if (hscore >= 5 || ascore >= 5){
        console.log("testing"); //referer til en funksjon som tar seg av vinneren og return.
    }
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

//TODO:
//LAGE AT RESULTAT BLIR SKREVET UT TIL SIDEN OG IKKE TIL KONSOLLET.
//SAMT LAGE LOGIKKEN SOM SAMLER PÅ POENGENE!

//HVA HAR DU LÆRT I DAG?
//
//ALLTID HA DEFER PÅ JS_SKRIPTET I HTML!!!!!
//ARROWFUNCTIONS BRUKER KUN PARAMETERE FØR PILEN, ETTERPÅ KAN DU GJERNE KALLE PÅ
//FUNKSJONER MED ARGUMENTER!
//
//CALLBACKS ER BARE FUNKSJONER DU IKKE KJØRER FØR DU HAR GJORT NOE ANNET.
//DET ER LITT VANSKELIG DET HER! KJØØØØRRAAAAA PÅÅ!



/**
function game(){

    let cpuscore =0;
    let playerscore =0;
    for (let i=1;i<6;i++){
        //const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = computerPlay();
        console.log(`\nRound: ${i}\n`)
        console.log(playRound(playerSelection,computerSelection));
        try{
            if (playRound(playerSelection,computerSelection)[4] === "W"){
                playerscore++;
            }
            else if (playRound(playerSelection,computerSelection)[4] === "L"){
                cpuscore++;
            }
        }
        catch(e){
            if (e.name.toString() == "TypeError"){
                alert("Wrong input, try again!")
                i--;
                continue;
            }
        } 
    }
    if (playerscore > cpuscore){
        console.log(`\nYou won with ${playerscore} points versus ${cpuscore} points after 5 rounds!`)
    }
    else if (playerscore < cpuscore){
        console.log(`\nYou lost with ${playerscore} points versus ${cpuscore} points after 5 rounds!`)
    }
    else{
        console.log("\nIt's a draw after 5 rounds!")
    }
}

game()

*/