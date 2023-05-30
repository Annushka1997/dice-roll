"use strict";

// Variables 

const statusBtn = document.querySelector(".status");
const startBtn = document.querySelector(".startBtn");
const diceCircles1 = document.querySelectorAll("[data-dice1]");
const diceCircles2 = document.querySelectorAll("[data-dice2]");
const dice = document.querySelectorAll(".dice");
const rollAudio = document.querySelector(".roll-audio");

setTimeout(() => {
    statusBtn.textContent = "";
}, 3000);

// Event
startBtn.addEventListener("click", () => {
    let randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
    let randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1); 

    diceRoll();
    setTimeout(() => {
        dice[0].classList.remove("active");
        dice[1].classList.remove("active");
        checkdiceRoll1(randomNumber1);
        checkdiceRoll2(randomNumber2);
        checkWin(randomNumber1,randomNumber2);
    },1500);
});

// Functions

function diceRoll () {
        rollAudio.play();
        dice[0].classList.add("active");
        dice[1].classList.add("active");
        diceCircles1[0].classList.add("active");
        diceCircles1[1].classList.add("active");
        diceCircles1[2].classList.add("active");
        diceCircles1[3].classList.remove("active");
        diceCircles1[4].classList.add("active");
        diceCircles1[5].classList.add("active");
        diceCircles1[6].classList.add("active");
        diceCircles2[0].classList.add("active");
        diceCircles2[1].classList.add("active");
        diceCircles2[2].classList.add("active");
        diceCircles2[3].classList.remove("active");
        diceCircles2[4].classList.add("active");
        diceCircles2[5].classList.add("active");
        diceCircles2[6].classList.add("active");
}

function checkdiceRoll1 (dice) {
    if (dice === 1) {
        diceCircles1[0].classList.remove("active");
        diceCircles1[1].classList.remove("active");
        diceCircles1[2].classList.remove("active");
        diceCircles1[3].classList.add("active");
        diceCircles1[4].classList.remove("active");
        diceCircles1[5].classList.remove("active");
        diceCircles1[6].classList.remove("active");
    } else if (dice === 2) {
        diceCircles1[0].classList.add("active");
        diceCircles1[1].classList.remove("active");
        diceCircles1[2].classList.remove("active");
        diceCircles1[3].classList.remove("active");
        diceCircles1[4].classList.remove("active");
        diceCircles1[5].classList.remove("active");
        diceCircles1[6].classList.add("active");
    } else if (dice === 3) {
        diceCircles1[0].classList.add("active");
        diceCircles1[1].classList.remove("active");
        diceCircles1[2].classList.remove("active");
        diceCircles1[3].classList.add("active");
        diceCircles1[4].classList.remove("active");
        diceCircles1[5].classList.remove("active");
        diceCircles1[6].classList.add("active");
    } else if (dice === 4) {
        diceCircles1[0].classList.add("active");
        diceCircles1[1].classList.remove("active");
        diceCircles1[2].classList.add("active");
        diceCircles1[3].classList.remove("active");
        diceCircles1[4].classList.add("active");
        diceCircles1[5].classList.remove("active");
        diceCircles1[6].classList.add("active");
    } else if (dice === 5) {
        diceCircles1[0].classList.add("active");
        diceCircles1[1].classList.remove("active");
        diceCircles1[2].classList.add("active");
        diceCircles1[3].classList.add("active");
        diceCircles1[4].classList.add("active");
        diceCircles1[5].classList.remove("active");
        diceCircles1[6].classList.add("active");
    } else {
        diceCircles1[0].classList.add("active");
        diceCircles1[1].classList.add("active");
        diceCircles1[2].classList.add("active");
        diceCircles1[3].classList.remove("active");
        diceCircles1[4].classList.add("active");
        diceCircles1[5].classList.add("active");
        diceCircles1[6].classList.add("active");
    }
}

function checkdiceRoll2 (dice) {
    if (dice === 1) {
        diceCircles2[0].classList.remove("active");
        diceCircles2[1].classList.remove("active");
        diceCircles2[2].classList.remove("active");
        diceCircles2[3].classList.add("active");
        diceCircles2[4].classList.remove("active");
        diceCircles2[5].classList.remove("active");
        diceCircles2[6].classList.remove("active");
    } else if (dice === 2) {
        diceCircles2[0].classList.add("active");
        diceCircles2[1].classList.remove("active");
        diceCircles2[2].classList.remove("active");
        diceCircles2[3].classList.remove("active");
        diceCircles2[4].classList.remove("active");
        diceCircles2[5].classList.remove("active");
        diceCircles2[6].classList.add("active");
    } else if (dice === 3) {
        diceCircles2[0].classList.add("active");
        diceCircles2[1].classList.remove("active");
        diceCircles2[2].classList.remove("active");
        diceCircles2[3].classList.add("active");
        diceCircles2[4].classList.remove("active");
        diceCircles2[5].classList.remove("active");
        diceCircles2[6].classList.add("active");
    } else if (dice === 4) {
        diceCircles2[0].classList.add("active");
        diceCircles2[1].classList.remove("active");
        diceCircles2[2].classList.add("active");
        diceCircles2[3].classList.remove("active");
        diceCircles2[4].classList.add("active");
        diceCircles2[5].classList.remove("active");
        diceCircles2[6].classList.add("active");
    } else if (dice === 5) {
        diceCircles2[0].classList.add("active");
        diceCircles2[1].classList.remove("active");
        diceCircles2[2].classList.add("active");
        diceCircles2[3].classList.add("active");
        diceCircles2[4].classList.add("active");
        diceCircles2[5].classList.remove("active");
        diceCircles2[6].classList.add("active");
    } else {
        diceCircles2[0].classList.add("active");
        diceCircles2[1].classList.add("active");
        diceCircles2[2].classList.add("active");
        diceCircles2[3].classList.remove("active");
        diceCircles2[4].classList.add("active");
        diceCircles2[5].classList.add("active");
        diceCircles2[6].classList.add("active");
    }
}

function checkWin (n1,n2) {
    if (n1 > n2) {
        statusBtn.textContent = "Player 1 win!";
    } else if (n1 < n2) {
        statusBtn.textContent = "Player 2 win!";
    } else {
        statusBtn.textContent = "Draw!";
    }
}