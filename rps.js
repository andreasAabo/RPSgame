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
    console.log(player);
    let cpu = computerPlay();
    console.log(cpu);
    if (player === cpu){
        console.log(`Both chose ${cpu}, its a draw!`);
    }
    else if (player ==="Rock" && cpu === "Paper" ||
             player ==="Paper" && cpu ==="Scissors" ||
             player ==="Scissors" && cpu =="Rock"){
        console.log(`You Lose! ${cpu} beats ${player}`);
    }
    else if (player ==="Rock" && cpu ==="Scissors" ||
             player ==="Paper" && cpu ==="Rock" ||
             player ==="Scissors" && cpu ==="Paper"){
        console.log(`You Win! ${player} beats ${cpu}`);
    }
}


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('Rock'));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('Paper'));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound('Scissors'));


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