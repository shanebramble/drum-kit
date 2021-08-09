var numberOfButtons = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfButtons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var audio = new Audio("assets/sounds/tom-1.mp3");
        audio.play();
    });

}
