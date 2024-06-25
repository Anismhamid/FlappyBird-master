let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;

initializeHole()


hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;


});




setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
        document.getElementById('score').innerHTML = `${counter}`;
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(800 - characterTop);
    if ((characterTop > 780) || ((blockLeft < 100) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        alert("Game over. Score: " + (counter - 1));
        document.getElementById('char-img').src = 'gameImages/bird2.png'
        character.style.top = 100 + "px";
        counter = 0;
        initializeHole()
    }
}, 10);


function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
            document.getElementById('char-img').src = 'gameImages/bird3.png'
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        } 
        if (jumpCount % 5 === 0) { // Change image every 5 jumps
            document.getElementById('char-img').src = 'gameImages/bird2.png';
        }
        jumpCount++;
    }, 10);
}


function initializeHole() {
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
}