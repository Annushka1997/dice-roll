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

    diceRoll(dice[0],diceCircles1);
    diceRoll(dice[1],diceCircles2);

    setTimeout(() => {
        dice[0].classList.remove("active");
        dice[1].classList.remove("active");
        checkdiceRoll(randomNumber1,diceCircles1);
        checkdiceRoll(randomNumber2,diceCircles2);
        checkWin(randomNumber1,randomNumber2);
    },1500);
});

// Functions
function diceRoll (dice,diceCircle) {
    rollAudio.play();
    dice.classList.add("active");
    for (let i = 0; i < 7; i++) {
        i === 3 ? diceCircle[i].classList.remove("active") : diceCircle[i].classList.add("active");
    }
}

function checkdiceRoll (dice,diceCircle) {
    if (dice === 1) {
        for (let i = 0; i < 7; i++) {
            i === 3 ? diceCircle[i].classList.add("active") : diceCircle[i].classList.remove("active");
        }
    } else if (dice === 2) {
        for (let i = 0; i < 7; i++) {
            i === 0 || i === 6 ? diceCircle[i].classList.add("active") : diceCircle[i].classList.remove("active");
        }
    } else if (dice === 3) {
        for (let i = 0; i < 7; i++) {
            i === 0 || i === 3 || i === 6 ? diceCircle[i].classList.add("active") : diceCircle[i].classList.remove("active");
        }
    } else if (dice === 4) {
        for (let i = 0; i < 7; i++) {
            i === 1 || i === 3 || i === 5 ? diceCircle[i].classList.remove("active") : diceCircle[i].classList.add("active");
        }
    } else if (dice === 5) {
        for (let i = 0; i < 7; i++) {
            i === 1 || i === 5 ? diceCircle[i].classList.remove("active") :  diceCircle[i].classList.add("active");
        }
    } else {
        for (let i = 0; i < 7; i++) {
            i === 3 ? diceCircle[i].classList.remove("active") : diceCircle[i].classList.add("active");
        }
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