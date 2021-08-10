var numberOfButtons = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfButtons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var key = this.textContent;
        makeSound(key);
    });
}

document.addEventListener("keydown", function (event) {
    var keyPressed = event.key
    makeSound(keyPressed);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("assets/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("assets/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;
        default:
            var kickBass = new Audio("assets/sounds/kick-bass.mp3");
            kickBass.play();
            break;
    }
}