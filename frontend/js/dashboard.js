// Welcome
document.getElementById("welcome").innerText =
 "Hi, " + (localStorage.getItem("user") || "Friend") + " 💗";

// Date
document.getElementById("today").innerText =
 new Date().toDateString();

// Sessions
let sessions = parseInt(localStorage.getItem("sessions")) || 0;
document.getElementById("sessions").innerText = sessions;

function completeSession(){
  sessions++;
  localStorage.setItem("sessions", sessions);
  document.getElementById("sessions").innerText = sessions;
  growGarden();
}

// Reminders
function addReminder(){
 const t=document.getElementById("reminderInput").value;
 if(!t) return;
 const r=getData("reminders");
 r.push(t);
 saveData("reminders",r);
 displayReminders();
}

function displayReminders(){
 const ul=document.getElementById("reminderList");
 ul.innerHTML="";
 getData("reminders").forEach(x=>{
  const li=document.createElement("li");
  li.textContent=x;
  ul.appendChild(li);
 });
}
displayReminders();

// Goals
function saveGoal(){
 const g=document.getElementById("goalInput").value;
 localStorage.setItem("goal",g);
 document.getElementById("goalDisplay").innerText=g;
}
document.getElementById("goalDisplay").innerText =
 localStorage.getItem("goal")||"";
