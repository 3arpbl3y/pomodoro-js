let start = document.getElementById("start");
let stop = document.querySelector("#stop");
let reset = document.getElementById("reset");

let workMinutes = document.getElementById("w_minutes");
let workSeconds = document.getElementById("w_seconds");

let breakMinutes = document.getElementById("b_minutes");
let breakSeconds = document.getElementById("b_seconds");

//timer variables

let startTimer;

start.addEventListener("click", () => {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else "Timer is already running";
});

reset.addEventListener("click", () => {
  workMinutes.innerText = 25;
  workSeconds.innerText = "00";

  breakSeconds.innerText = "00";
  breakMinutes.innerText = 5;

  document.querySelector("#counter").innerText++;
  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopInterval();
});

function timer() {
  //work times countdown
  if (workSeconds.innerText != 0) {
    workSeconds.innerText--;
  } else if (workMinutes.innerText != 0 && workSeconds.innerText == 0) {
    workSeconds.innerText = 59;
    workMinutes.innerText--;
  }
  //break timer countdown
  if (workMinutes.innerHTML == 0 && workSeconds == 0) {
    if (breakSeconds.innerText != 0) {
      breakSeconds.innerText--;
    } else if (breakMinutes.innerText != 0 && breakSeconds.innerText == 0) {
      breakSeconds.innerText = 59;
      breakMinutes.innerText--;
    }
  }
  if (
    workMinutes.innerText == 0 &&
    workSeconds.innerText == 0 &&
    breakMinutes.innerText == 0 &&
    breakSeconds.innerText == 0
  ) {
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    breakSeconds.innerText = "00";
    breakMinutes.innerText = 5;

    document.querySelector("#counter").innerText++;
  }
}

//stop timer

function stopInterval() {
  clearInterval(startTimer);
}
