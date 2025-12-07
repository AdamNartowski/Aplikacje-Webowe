const timerDisplay = document.getElementById("timer");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  timerDisplay.textContent = "0s";
}

function update() {
  elapsedTime = Date.now() - startTime;

  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);

  if (minutes > 0) {
    timerDisplay.textContent = minutes + "min " + seconds + "s";
  } else {
    timerDisplay.textContent = seconds + "s";
  }
}
