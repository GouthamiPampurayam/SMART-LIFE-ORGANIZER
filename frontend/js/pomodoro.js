let time = 25*60;
let interval;

function updateTimer(){
  let m = Math.floor(time/60);
  let s = time % 60;
  document.getElementById("timer").innerText =
   `${m}:${s<10?'0'+s:s}`;
}

function startPomodoro(){
  if(interval) return;
  interval = setInterval(()=>{
    time--;
    updateTimer();
    if(time <= 0){
      stopPomodoro();
      completeSession();
      time = 25*60;
    }
  },1000);
}

function stopPomodoro(){
  clearInterval(interval);
  interval = null;
}

function resetPomodoro(){
  stopPomodoro();
  time = 25*60;
  updateTimer();
}
