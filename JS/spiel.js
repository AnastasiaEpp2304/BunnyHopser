const rabbit = document.getElementById("rabbit");
function setSkin(number) {
    rabbit.src = "img/rabbit" + number + ".png";
}
const carrot = document.getElementById("carrot");
const apfel = document.getElementById("apfel");

const shopBtn = document.getElementById("shopBtn");
const skinMenu = document.getElementById("skinMenu");

shopBtn.addEventListener("click", () => {

    if (skinMenu.style.display === "block") {
        skinMenu.style.display = "none";
    } else {
        skinMenu.style.display = "block";
    }

});

let boughtSkins = [1];

function setSkin(number) {

    if (boughtSkins.includes(number)) {
        if (number === 1) {
            rabbit.src = "img/rabbit.png";
        } else {
            rabbit.src = "img/rabbit" + number + ".png";
        }
        return;
    }

    if (number === 2 && score < 10) {
        alert("Нужно 10 очков!");
        return;
    }

    if (number === 3 && score < 20) {
        alert("Нужно 20 очков!");
        return;
    }

    if (number === 4 && score < 30) {
        alert("Нужно 30 очков!");
        return;
    }

    if (number === 5 && score < 40) {
        alert("Нужно 40 очков!");
        return;
    }

    if (number === 6 && score < 50) {
        alert("Нужно 50 очков!");
        return;
    }

    if (number === 2) score -= 10;
    if (number === 3) score -= 20;
    if (number === 4) score -= 30;
    if (number === 5) score -= 40;
    if (number === 6) score -= 50;

    boughtSkins.push(number);

    scoreText.textContent = "Punkte: " + score;

    if (number === 1) {
        rabbit.src = "img/rabbit.png";
    } else {
        rabbit.src = "img/rabbit" + number + ".png";
    }
}


setTimeout(() => {
    apfel.style.display = "block";

    apfel.style.left =
        Math.random() * (window.innerWidth - apfel.offsetWidth) + "px";

    apfel.style.top =
        Math.random() * (window.innerHeight - apfel.offsetHeight) + "px";
}, 10000);

const scoreText = document.getElementById("score");

let score = 0;

let x = 700;
let y = 300;

let rabbitSize = 80;

function growRabbit() {
    rabbitSize = Math.min(rabbitSize + 5, 400);

    rabbit.style.width = rabbitSize + "px";
    rabbit.style.height = rabbitSize + "px";
}

rabbit.style.width = rabbitSize + "px";
rabbit.style.height = rabbitSize + "px";


const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});

function game() {

    if (keys["KeyD"]) x += 5;
	if (keys["KeyA"]) x -= 5;
	if (keys["KeyW"]) y -= 5;
	if (keys["KeyS"]) y += 5;
	
if (keys["KeyD"]) {
    rabbit.style.transform = "scaleX(1)";
}

if (keys["KeyA"]) {
    rabbit.style.transform = "scaleX(-1)";
}

    if (x < 0) x = 0;
    if (y < 0) y = 0;
	
	if (x > window.innerWidth - rabbitSize)
    x = window.innerWidth - rabbitSize;

	if (y > window.innerHeight - rabbitSize)
    y = window.innerHeight - rabbitSize;

    if (x > 1900 - rabbit.offsetWidth) {
        x = 1900 - rabbit.offsetWidth;
    }

    if (y > 960 - rabbit.offsetHeight) {
        y = 960 - rabbit.offsetHeight;
    }

    rabbit.style.left = x + "px";
    rabbit.style.top = y + "px";

    const rabbitRect = rabbit.getBoundingClientRect();
    const carrotRect = carrot.getBoundingClientRect();
    const apfelRect = apfel.getBoundingClientRect();

    if (
        rabbitRect.left + 30 < carrotRect.right &&
        rabbitRect.right - 30 > carrotRect.left &&
        rabbitRect.top + 30 < carrotRect.bottom &&
        rabbitRect.bottom - 30 > carrotRect.top
    ) {

        growRabbit();

        score++;
        scoreText.textContent = "Punkte: " + score;

        carrot.style.left =
            Math.random() * (window.innerWidth - carrot.offsetWidth) + "px";

        carrot.style.top =
            Math.random() * (window.innerHeight - carrot.offsetHeight) + "px";
    }

    if (
        rabbitRect.left + 30 < apfelRect.right &&
        rabbitRect.right - 30 > apfelRect.left &&
        rabbitRect.top + 30 < apfelRect.bottom &&
        rabbitRect.bottom - 30 > apfelRect.top
    ) {
		growRabbit();
		
        score += 3;
        scoreText.textContent = "Punkte: " + score;

        apfel.style.display = "none";

setTimeout(() => {
    apfel.style.display = "block";

    apfel.style.left =
        Math.random() * (window.innerWidth - apfel.offsetWidth) + "px";

    apfel.style.top =
        Math.random() * (window.innerHeight - apfel.offsetHeight) + "px";
}, 5000);
    }

    requestAnimationFrame(game);
}

game();