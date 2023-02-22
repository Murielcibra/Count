"use strict";
let counter = 0;
let counterColor = 0;

document.addEventListener("click", increaseCounter);

function increaseCounter() {
  counter = counter + 1;
  counterColor++;
  if (counterColor % 100 === 0) {
    counterColor = 0;
  }
  const counterDiv = document.getElementById("counterEl");
  counterDiv.style.setProperty("--counter", counterColor + "%");
  const counterLabel = document.getElementById("counter");
  counterLabel.innerHTML = counter;
}

document.addEventListener("keydown", (event) => {
  if (
    event.key === 32 ||
    event.key === " " ||
    event.key === 13 ||
    event.key === "Enter"
  ) {
    increaseCounter();
  }
});

function reset() {
  counter = -1;
  counterColor = -1;
  increaseCounter();
  counter = -1;
  counterColor = -1;
}
