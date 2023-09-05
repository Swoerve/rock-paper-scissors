"use strict";

let choices = ["rock", "paper", "scissors"];

const playerChoice = getPlayerChoice();

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
        return "tie";
    } 
    else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock"
        ) {
        return "win";
    }
    else {
        return "lose";
    }
}