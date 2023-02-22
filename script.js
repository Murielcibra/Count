"use strict";
let counter = 0;

document.addEventListener("click", increaseCounter);

function increaseCounter() {
  counter = counter + 1;
  const counterLabel = document.getElementById("counter");
  counterLabel.innerHTML = counter;
  const counterDiv = document.getElementById("counterEl");
  counterDiv.style.setProperty("--counter", counter + "%");
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
  increaseCounter();
  counter = -1;
}
