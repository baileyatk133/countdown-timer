function startTimer() {
  const timerEl = document.getElementById('timer');
  let seconds = parseInt(timerEl.dataset.seconds, 10);
  const display = document.getElementById('display');

  const interval = setInterval(() => {
    display.textContent = seconds + "s remaining";
    seconds--;

    if (seconds < 0) {
      clearInterval(interval);
      display.textContent = "Time's up!";
      new Audio('/alarm.mp3').play();
    }
  }, 1000);
}