
function changeImage1(randomNo) {
    if (randomNo == 1) {
        document.querySelector(".img1").src = "images/dice1.png";
    }
    if (randomNo == 2) {
        document.querySelector(".img1").src = "images/dice2.png";
    }
    if (randomNo == 3) {
        document.querySelector(".img1").src = "images/dice3.png";
    }
    if (randomNo == 4) {
        document.querySelector(".img1").src = "images/dice4.png";
    }
    if (randomNo == 5) {
        document.querySelector(".img1").src = "images/dice5.png";
    }
    if (randomNo == 6) {
        document.querySelector(".img1").src = "images/dice6.png";
    }
}
function changeImage2(randomNo) {
    if (randomNo == 1) {
        document.querySelector(".img2").src = "images/dice1.png";
    }
    if (randomNo == 2) {
        document.querySelector(".img2").src = "images/dice2.png";
    }
    if (randomNo == 3) {
        document.querySelector(".img2").src = "images/dice3.png";
    }
    if (randomNo == 4) {
        document.querySelector(".img2").src = "images/dice4.png";
    }
    if (randomNo == 5) {
        document.querySelector(".img2").src = "images/dice5.png";
    }
    if (randomNo == 6) {
        document.querySelector(".img2").src = "images/dice6.png";
    }
}
var randomNumber1 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomNumber2 = Math.random() * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);
changeImage1(randomNumber1);
changeImage2(randomNumber2);

if (randomNumber1 > randomNumber2) document.querySelector("h1").textContent = "1 wins!🚩";
if (randomNumber2 > randomNumber1) document.querySelector("h1").textContent = "2 wins!🚩";
if (randomNumber1 == randomNumber2) document.querySelector("h1").textContent = "draw!";
