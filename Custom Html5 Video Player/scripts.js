/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const volume = document.getElementById('volume');
const fullscreenButton = document.getElementById("fullscreen-button");

/* Build out functions */
function tooglePlay(e) {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip(e) {
  video.currentTime += parseFloat(this.dataset.skip);
}



function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function updateVolume (e) {
  video.muted ? video.muted = false : ""
  // if (video.muted) {
  //   video.muted = false;
  // }
  video.volume = volume.value;
}

function toggleFullScreen() {
  document.fullscreenElement
    ? document.exitFullscreen()
    : document.webkitFullscreenElement
    ? document.webkitExitFullscreen()
    : video.webkitRequestFullscreen
    ? video.webkitRequestFullscreen()
    : video.requestFullscreen();
}

/* Hook up the event listeners */

video.addEventListener("click", tooglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", tooglePlay);
volume.addEventListener('input', updateVolume);
fullscreenButton.addEventListener("click", toggleFullScreen);

skipButtons.forEach((button) => button.addEventListener("click", skip));


let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", () => (mousedown ? scrub() : null));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));