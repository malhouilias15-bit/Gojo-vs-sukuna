function playAnimation(file) {
    const box = document.getElementById("animation");
    box.innerHTML = `<img src="img/${file}">`;

    setTimeout(() => {
        box.innerHTML = "";
    }, 2000);
}

function playSound(soundFile) {
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
}
function playMove(message, animation, soundFile) {
    let output = document.getElementById("output");
    let anim = document.getElementById("anim");
    let sound = document.getElementById("sound");

    output.textContent = message;

    // Play animation
    anim.src = animation;
    anim.style.display = "block";

    // Play sound
    sound.src = soundFile;
    sound.play();
}

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
// Gojo moves
if (key === "1") {
    playAnimation("blue.gif");
    playSound("blue.mp3");
}

if (key === "2") {
    playAnimation("red.gif");
    playSound("red.mp3");
}

if (key === "3") {
    playAnimation("purple.gif");
    playSound("purple.mp3");
}

if (key === "4") {
    playAnimation("limitless.gif");
    playSound("limitless.mp3");
}

if (key === "5") {
    playAnimation("hollow_purple.gif");
    playSound("hollow_purple.mp3");
}

    switch (key) {
        // Gojo
        case "1":
            playMove("Gojo used BLUE!", "img/blue.gif", "sounds/blue.mp3");
            break;

        case "2":
            playMove("Gojo used RED!", "img/red.gif", "sounds/red.mp3");
            break;

        case "3":
            playMove("Gojo used PURPLE!", "img/purple.gif", "sounds/purple.mp3");
            break;

        case "4":
            playMove("Gojo activated LIMITLESS!", "img/limitless.gif", "sounds/limitless.mp3");
            break;

        case "5":
            playMove("Gojo used HOLLOW PURPLE!!!", "img/hollow_purple.gif", "sounds/hollow_purple.mp3");
            break;

        // Sukuna (still text only for now)
        case "q":
            playMove("Sukuna used CLEAVE!", "img/cleave.gif", "sounds/cleave.mp3");
            break;

        case "w":
            playMove("Sukuna used DISMANTLE!", "img/dismantle.gif", "sounds/dismantle.mp3");
            break;

        case "e":
            playMove("Sukuna used FIRE ARROW!", "img/fire_arrow.gif", "sounds/fire_arrow.mp3");
            break;

        case "r":
            playMove("Sukuna DOMAIN EXPANSION!", "img/domain.gif", "sounds/domain.mp3");
            break;

        case "t":
            playMove("Sukuna MALEVOLENT SHRINE!", "img/shrine.gif", "sounds/shrine.mp3");
            break;
    }
});

    
            
