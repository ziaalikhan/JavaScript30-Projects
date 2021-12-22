window.addEventListener("keydown", convertIntoVoice);
function convertIntoVoice(e) {
  let myaudio = document.querySelector(`audio[key-data="${e.keyCode}"]`);
  let getKeys = document.querySelector(`.keys[key-data="${e.keyCode}"]`);
  if (!myaudio) {
    return;
  }
  myaudio.play();
  getKeys.classList.add("show");
}