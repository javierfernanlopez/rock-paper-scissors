const WORDS = [
    'rock',
    'paper',
    'scissor'
]

function computerSelection(){
    return computerChoice = WORDS[Math.floor(Math.random()*WORDS.length)];
} 

// function getResult(playerSelection, computerSelection) {
//     let score;
//     if(playerSelection == computerSelection){
//         score = 0;
//     }  else if (computerSelection === 'rock' && playerSelection === 'scissors'){
//         console.log("You Lose! Rock beats Scissors");
//         score = -1;
//     } else if (computerSelection === 'paper' && playerSelection === 'rock'){
//         console.log("You Lose! Paper beats Rock");
//         score = -1;
//     }else if ( computerSelection === 'scissors' && playerSelection === 'paper'){
//         console.log("You Lose! Scissors beats Paper");
//         score = -1;
//     }
//      else if (computerSelection === 'rock' && playerSelection === 'paper'){
//         console.log("You Win! Paper beats Pock");
//         score = 1;
//     }else if(computerSelection === 'paper' && playerSelection === 'scissors'){
//         console.log("You Win! Scissors beats paper");
//         score = 1;
//     } else if(computerSelection === 'scissors' && playerSelection === 'rock'){
//         console.log("You Win! Rock beats Scissors");
//         score = 1;
//     }
//     return score;
// }

function makeSelection(playerSelection) {
    console.log(playerSelection)
}

function playGame() {
    const selectionButtons = document.querySelectorAll('.selection')
    selectionButtons.onclick = () => console.log(selectionButtons[0].value)
    selectionButtons.forEach(selection => {
        selection.onclick = () => makeSelection(selection.value)
    })
}







// selectionButtons.forEach(selectionButton => {
//     selectionButton.addEventListener('click', e => {
//         const selectionName = selectionButton.dataset.selection
//         makeSelection(selectionName);
//         playRound(computerSelection, selectionName)
//     })
// })


// function makeSelection(playerSelection) {
//     console.log(playerSelection)
// }

// function playRound(computerSelection, playerSelection){
// if(computerSelection === playerSelection){
//     console.log('Tie')
// } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
//     console.log("You Lose! Rock beats Scissors")
//     computerPoints++;
// } else if (computerSelection === 'paper' && playerSelection === 'rock'){
//     console.log("You Lose! Paper beats Rock");
//     computerPoints++;
// }else if ( computerSelection === 'scissors' && playerSelection === 'paper'){
//     console.log("You Lose! Scissors beats Paper");
//     computerPoints++;
// }
//  else if (computerSelection === 'rock' && playerSelection === 'paper'){
//     console.log("You Win! Paper beats Pock");
//     playerPoints++;
// }else if(computerSelection === 'paper' && playerSelection === 'scissors'){
//     console.log("You Win! Scissors beats paper");
//     playerPoints++;
// } else if(computerSelection === 'scissors' && playerSelection === 'rock'){
//     console.log("You Win! Rock beats Scissors");
//     playerPoints++;
// }
// }

// function game () {
//     for (let i = 0; i<5; i++){
//     playRound (computerSelection, playerSelection)
    
// }
// console.log(`The final result is Computer: ${computerPoints} Player:${playerPoints}}`)
// }
