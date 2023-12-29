const clock = document.querySelector("#clock");

function getClock() {
  const curDate = new Date();
  const curHours = String(curDate.getHours()).padStart(2, "0");
  const curMinutes = String(curDate.getMinutes()).padStart(2, "0");
  const curSeconds = String(curDate.getSeconds()).padStart(2, "0");
  clock.innerText = `${curHours}:${curMinutes}:${curSeconds}`;
}

getClock();
setInterval(getClock, 1000);