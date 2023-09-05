"use strict";

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    choice = choice.toLowerCase();
    if (choices.includes(choice)) {
        return choice;
    }
    else {
        return getPlayerChoice();
    }
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It's a tie! You both chose ${playerChoice}!";
    } 
    else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock"
        ) {
        return "Nice! ${playerChoice} beats ${computerChoice}!";
    }
    else {
        return "Ooops! ${computerChoice} beats ${playerChoice}!";
    }
}

function game() {
    let rounds = 0;
    while (rounds < 10) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        rounds++;
    }
}

game();