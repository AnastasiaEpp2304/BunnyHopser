const rabbit = document.getElementById("rabbit");
const carrot = document.getElementById("carrot");
const apfel = document.getElementById("apfel");

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
    rabbitSize += 5;
    rabbit.style.width = rabbitSize + "px";
    rabbit.style.height = rabbitSize + "px";
}

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});

function game() {

    if (keys["d"]) x += 5;
    if (keys["a"]) x -= 5;
    if (keys["w"]) y -= 5;
    if (keys["s"]) y += 5;
	
	
	if (keys["d"]) rabbit.style.transform = "scaleX(1)";
if (keys["a"]) rabbit.style.transform = "scaleX(-1)";

    if (x < 0) x = 0;
    if (y < 0) y = 0;

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