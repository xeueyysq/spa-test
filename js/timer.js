let startTime;
let interval;

function startTimer() {
  startTime = new Date();
  interval = setInterval(update, 1000);
}

function update() {
  const formatedTime = format(new Date() - startTime);
  document.getElementById('timer').innerText = formatedTime;
}

function format(milli) {
  const all = Math.floor(milli / 1000);
  const hours = Math.floor(all / 3600);
  const minutes = Math.floor((all % 3600) / 60);
  const seconds = all % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

window.addEventListener('beforeunload', function(event) {
  clearInterval(interval);
});