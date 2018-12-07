const clock = document.querySelector(".js-clock"),
  clockTitle = clock.querySelector("h1");

function showingClock() {
  const date = new Date(); //setInterval로 초기화를 해주면서 시간 데이터를 받아야해서 함수 안에다 선언함
  const Hour = date.getHours(),
    Minute = date.getMinutes(),
    Second = date.getSeconds();
  clockTitle.innerHTML = `${Hour < 10 ? `0${Hour}` : Hour} : ${
    Minute < 10 ? `0${Minute}` : Minute
  } : ${Second < 10 ? `0${Second}` : Second}`;
}

function init() {
  showingClock();
  setInterval(showingClock, 1000);
}

init();
