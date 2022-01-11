const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const redColor = document.querySelector(".redColor");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((Stream) => {
      video.srcObject = Stream;
      video.play();
    })
    .catch((error) => {
      console.log("You have No Acess of camera.." + error);
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
    // take the pexels out
    // let pexels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pexels = redEffect(pexels);
    // pexels = rgbSplit(pexels);
    // put them back ..
    // ctx.putImageData(pexels, 0, 0);
  }, 16);
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

function redColorFunc(pexels) {
  console.log("click" + e.target.value);
}

// function redEffect(pexels) {
//   for (let i = 0; i < pexels.data; i = i + 4) {
//     pexels.data[i + 0] = pexels.data[i + 0] + 100; // RED
//     pexels.data[i + 1] = pexels.data[i + 1] - 50; // GREEN
//     pexels.data[i + 2] = pexels.data[i + 2] * 0.5; // Blue
//   }
//   return pexels;
// }

// function rgbSplit(pexels) {
//   for (let i = 0; i < pexels.data.length; i += 4) {
//     pexels.data[i - 150] = pexels.data[i + 0]; // RED
//     pexels.data[i + 500] = pexels.data[i + 1]; // GREEN
//     pexels.data[i - 550] = pexels.data[i + 2]; // Blue
//   }
//   return pexels;
// }

getVideo();

video.addEventListener("canplay", paintToCanvas);
redColor.addEventListener("change", redColorFunc);
