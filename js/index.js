var drumBtn = document.querySelectorAll(".drum")

function checkKeys(key){
    switch(key){
        case "w":
            var tom1 = new Audio("../Drum Kit/assets/sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("../Drum Kit/assets/sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("../Drum Kit/assets/sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("../Drum Kit/assets/sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("../Drum Kit/assets/sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio("../Drum Kit/assets/sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kickBass = new Audio("../Drum Kit/assets/sounds/kick-bass.mp3");
            kickBass.play();
        break;

        default: console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
for(var i = 0; i<drumBtn.length; i++){
    drumBtn[i].addEventListener("click", function (){
        checkKeys(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    checkKeys(event.key);
    buttonAnimation(event.key);
});