function login(){
  const name = document.getElementById("username").value;
  localStorage.setItem("user", name);
  window.location.href="dashboard.html";
}

function saveDiary(){
  const text = document.getElementById("diaryText").value;
  localStorage.setItem("diary", text);
  alert("Diary saved 💖");
}
