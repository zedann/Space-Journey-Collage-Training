let vid = document.getElementById("myVideo");
var audio = document.getElementById("countdown");
var launch = document.querySelector(".launch");
var text = document.querySelector(".text");
var trip = document.querySelector(".trip");
var countdown = document.querySelector(".trip span");
var counter = 5;

play();
function play() {
  vid.play();
  vid.playbackRate = 2.0; // speed to 2x
}
let start = setInterval(function () {
  if (vid.currentTime > 0 && !(counter < 5)) {
    vid.pause(); // pause video on start and counter not less than 5
  } else if (counter < 0) {
    play(); // when countdown reaches below zero start video
  }
}, 1000); //check every 1s
launch.addEventListener("click", (launch) => {
  text.classList.add("vanish"); // remove the text and the button to play the video
  trip.style.opacity = "1"; // show countdown text appear
  setTimeout(() => {
    audio.currentTime = 5; //start from 5 not 10 (voice countdown start from 10)
    audio.play();
  }, 1000);
  let startTrip = setInterval(function () {
    countdown.innerHTML = counter--;
    if (counter < 0) {
      audio.pause();
      trip.style.opacity = "0";
      vid.muted = false;
      clearInterval(startTrip);
    }
  }, 1000);
  let space = setInterval(function () {
    if (vid.currentTime > 60 && vid.currentTime < 75) {
      document.querySelector(".space").style.display = "block";
    } else if (vid.currentTime > 75) {
      document.querySelector(".space").style.display = "none";
      document.querySelector(".return").style.display = "block";
    }
  }, 1000);
});
document
  .querySelector(".return .launch")
  .addEventListener("click", function () {
    vid.muted = true;
    vid.currentTime = 0;
    counter = 5;
    document.querySelector(".return").style.display = "none";
    text.classList.remove("vanish");
  });

//contact us
