function buttonAnimation(button) {
    var buttonPressed = document.querySelector("." + button);
    buttonPressed.classList.add("pressed");
    setTimeout(function () {
        buttonPressed.classList.remove("pressed");
    }, 100);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var keyInnerHtml = this.innerHTML.toLowerCase();
        buttonAnimation(keyInnerHtml);
        switch (keyInnerHtml) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            default:
                console.log(keyInnerHtml);
                break;
        }
    });
}

document.addEventListener("keydown", function (press) {
    var keyPressed = press.key.toLowerCase();
    buttonAnimation(keyPressed);
    switch (keyPressed) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            console.log(keyPressed);
            break;
    }
});



