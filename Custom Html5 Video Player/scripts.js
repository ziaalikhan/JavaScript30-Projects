/* Get All Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const volume = document.getElementById("volume");
const voiceCheck = player.querySelector(".voiceCheck");
const fullscreenButton = document.getElementById("fullscreen-button");

/* Build All functions */
function tooglePlay(e) {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function voicePlay(e) {
  video.muted ? (video.muted = false) : (video.muted = true);
}

function voiceChecker() {
  let voiceIcon = video.muted ? "🎧" : "🔇";
  voiceCheck.textContent = voiceIcon;
}

function updateVolume(e) {
  video.muted ? false : true;
  return (video.volume = volume.value);
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

function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  } else if (document.webkitRequestFullscreen) {
    document.webkitRequestFullscreen();
  } else {
    video.requestFullscreen();
  }
}

/* Hook up the Events listeners */

video.addEventListener("click", tooglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", tooglePlay);
voiceCheck.addEventListener("click", voiceChecker);
voiceCheck.addEventListener("click", voicePlay);
volume.addEventListener("input", updateVolume);
fullscreenButton.addEventListener("click", toggleFullScreen);

skipButtons.forEach((button) => button.addEventListener("click", skip));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", () => (mousedown ? scrub() : null));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
