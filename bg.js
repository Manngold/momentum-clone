const body = document.querySelector("body");

IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  body.appendChild(image);
  image.classList.add("bgImage");
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  console.log(number);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
