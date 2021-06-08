for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonletter = this.innerHTML;
    makesound(buttonletter);
    buttonAnimation(buttonletter);
 
  });
}

document.addEventListener("keydown", function (e) {
  makesound(e.key);
  buttonAnimation(e.key);
  drumanimate(e.key);
 
});

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();

      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      // audio.currentTime = 0;
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentkey) {
  var buttonanimate = document.querySelector("." + currentkey);
 
  buttonanimate.classList.add("pressed");
  setTimeout(function () {
    buttonanimate.classList.remove("pressed");
   
  }, 100);
}
function drumanimation(keyname) {
   var drumanimate = document.querySelector("." + keyname);
   drumanimate.classList.add("active");
 
}
//var audio=new Audio('sounds/)
// audio.play()
