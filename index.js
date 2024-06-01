// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I have been clicked!");
// }

// console.log(typeof(handleClick));

// document.querySelector("button").addEventListener("click", function () {
//     alert("I have been clicked!");
// });

// Detecting button clicked

var buttonList = document.querySelectorAll(".set button.drum");

for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting keyboard pressed

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Function to make sound

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break
        case "a":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break
        case "s":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break
        case "d":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break
        case "j":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break

        default:
            console.log(key);

    }
}

function buttonAnimation(currentKey){
    var activeButtion = document.querySelector("." + currentKey);
    activeButtion.classList.add("pressed");

    setTimeout(function (){
        activeButtion.classList.remove("pressed");
    }, 100)
}

// var audio = new Audio('sounds/kick-bass.mp3');
//             audio.play();