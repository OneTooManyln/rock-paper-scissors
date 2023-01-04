function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    
    if (choice === 0) {
        return 'ROCK';
    } else if (choice === 1) {
        return 'PAPER';
    } else if (choice === 2) {
        return 'SCISSORS';
    } else return 'error';
} 

//function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let ties = 0;

    const button = document.querySelectorAll('button[data-choice]');
    button.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.getAttribute('data-choice')
            computerSelection = getComputerChoice();
            playerResults.textContent = "PLAYER POINTS: " + playerPoints;
            computerResults.textContent = "COMPUTER POINTS: " + computerPoints;
            tieResults.textContent = "TIES: " + ties;
            console.log(playerSelection)          
            console.log(playRound(playerSelection, computerSelection)) 
            endGame();
        })
    })

    function playRound (playerSelection, computerSelection) {
        switch (true) {
            case (playerSelection === 'ROCK' && computerSelection === 'PAPER'):
                computerPoints ++;
                return 'COMPUTER';
            case (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'):
                computerPoints ++;
                return 'COMPUTER';
            case (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'):
                computerPoints ++;
                return 'COMPUTER';
            case (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'):
                playerPoints ++;
                return 'PLAYER';
            case (playerSelection === 'PAPER' && computerSelection === 'ROCK'):
                playerPoints ++;
                return 'PLAYER';
            case (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'):
                playerPoints ++;
                return 'PLAYER';
            case (playerSelection === computerSelection):
                ties ++;
                return 'TIE';
            default:
                return 'Wrong';
        }
    }

    //create div DOM for all results
    const body = document.querySelector('body');
    const results = document.createElement('div');
    results.classList.add('results');
    body.appendChild(results);

    //create div DOM for playerPoints
    const playerResults = document.createElement('div');
    playerResults.classList.add('player');
    playerResults.textContent = 'PLAYER POINTS: ' + playerPoints;
    results.appendChild(playerResults);

    //create div DOM for computerPoints
    const computerResults = document.createElement('div');
    computerResults.classList.add('computer');
    computerResults.textContent = 'COMPUTER POINTS: ' + computerPoints;
    results.appendChild(computerResults);

    //create div DOM for ties
    const tieResults = document.createElement('div');
    tieResults.classList.add('tie');
    tieResults.textContent = 'TIES: ' + ties;
    results.appendChild(tieResults);

    //create div DOM for game results
    const winners = document.createElement('div');
    winners.classList.add('winners');
    body.appendChild(winners);

    //create function to determine who won after 5 rounds
    function endGame() {
    
        if (playerPoints === 5) {
            const playerWins = document.createElement('div');
            const h3 = document.createElement('h3');
            playerWins.classList.add('playerWins');
            h3.textContent = 'PLAYER WINS!!';
            winners.appendChild(playerWins);
            playerWins.appendChild(h3);

            //disable buttons
            document.getElementById('btn').disabled = true;
        } else if (computerPoints === 5) {
            const computerWins = document.createElement('div');
            const h3 = document.createElement('h3');
            computerWins.classList.add('computerWins');
            h3.textContent = 'COMPUTER WINS!!';
            winners.appendChild(computerWins);
            computerWins.appendChild(h3);

            document.getElementById('btn').disabled = true;
        } else return "ERROR";
    }
//}




//checks if 'button' has data attribute 
const result = document.querySelector('#btn');

const answer = result.hasAttribute('data-choice');
console.log(answer);



//    button.addEventListener('click', playRound);//() => {
//        function playRound () {
//        playerSelected = playerClicked();    
//        function playerClicked() {
//            if ((button.getAttribute('data-choice') === 'ROCK')) {
//                console.log(playRound(playGame(playerSelected, computerSelection)))
//                return 'ROCK'; 
//            } else if ((button.getAttribute('data-choice') === 'PAPER')) {
//                return 'PAPER';
//                //playRound(playerClicked, computerSelection);
//            } else if ((button.getAttribute('data-choice') === 'SCISSORS')) {
//                return 'SCISSORS';
//                //playRound(playerClicked, computerSelection);
//            } else return 'ERROR';
//        }
//    //})
//        computerSelection = getComputerChoice(); 
//        
//
//        function playGame(playerSelected, computerSelection) {
//            switch (true) {
//                case (playerSelected == 'ROCK' && computerSelection === 'PAPER'):
//                    return 'COMPUTER';
//                case (playerSelected == 'PAPER' && computerSelection === 'SCISSORS'):
//                    return 'COMPUTER';
//                case (playerSelected == 'SCISSORS' && computerSelection === 'ROCK'):
//                    return 'COMPUTER';
//                case (playerSelected == 'ROCK' && computerSelection === 'SCISSORS'):
//                    return 'PLAYER';
//                case (playerSelected == 'PAPER' && computerSelection === 'ROCK'):
//                    return 'PLAYER';
//                case (playerSelected == 'SCISSORS' && computerSelection === 'PAPER'):
//                    return 'PLAYER';
//                case (playerSelected == computerSelection):
//                    return 'TIE';
//                default:
//                    return 'Wrong';
//            }
//        }
//        }
//})



//const rock = document.querySelector('[data-choice="rock"');

//rock.addEventListener('click', function (e) {
    //console.log(e);
//})


//const paper = document.querySelector('[data-choice="paper"');

//paper.addEventListener('click', playRound); 

    
//const scissors = document.querySelector('[data-choice="scissors"');


//scissors.addEventListener('click', playerClicked) 
    //function playerClicked (clicked) {
        //clicked = 'scissors';
        //playerChoice = clicked;
        //console.log(playerChoice)
    //}

// Write a new function to play a 5 round game and keep score, displaying a winner at the end
// The function playRound will be called inside the function game
// inside playRound a for-loop will be used


    //(let playerPoints = 0;
    //let computerPoints = 0;

    //function game() {
        
        //let result = playRound(playerSelection, computerSelection);
        

        //for (let i = 0; i < 5; i++) {
            //if (result === 'PLAYER') {
               //playerPoints++;
            //} else if (result === 'COMPUTER') {
                //computerPoints++;
            //} else {
               //console.log(i);
            //}
        //}
            //if (playerPoints === 5) {
                //return 'YOU WON!';
            //} else {
                //return 'YOU LOST!';
            //}
        
    //}

    //console.log(game())