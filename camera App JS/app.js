const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const fullscreenButton = document.getElementById("fullscreen-button");


function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((Stream) => {
      video.srcObject = Stream;
      video.play();
    })
    .catch((error) => {
      alert("You have No Acess of camera.." + error);
    });
}

function paintToCanvas() {
  // video width and height
  let width = video.videoWidth;
  let height = video.videoHeight;
  // canvas width and height
  canvas.width = width;
  canvas.height = height;
  // realtime getVideo
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function zoomin() {
  const currWidth = canvas.clientWidth;
  canvas.style.width = (currWidth + 6) + "px";
}

function zoomout() {
  const currWidth = canvas.clientWidth;
  canvas.style.width = (currWidth - 6) + "px";
}


function takePhoto() {
  // play the sound //
  snap.currentTime = 0;
  snap.play();

  // take the canvas out of the data
  const data = canvas.toDataURL("image/jpeg");
  // console.log(data);
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "yourSnap");
  link.innerHTML = `<img src="${data}" alt="Snap"/>`;
  strip.insertBefore(link, strip.firstChild);
}

function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  } else if (document.webkitRequestFullscreen) {
    document.webkitRequestFullscreen();
  } else {
    canvas.requestFullscreen();
  }
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
fullscreenButton.addEventListener("click", toggleFullScreen);