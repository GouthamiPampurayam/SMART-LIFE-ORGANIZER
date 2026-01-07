function saveDiary(){
 const text = document.getElementById("diaryText").value;
 if(!text) return;

 const entry = {
  text,
  time: new Date().toLocaleString()
 };

 const diary = JSON.parse(localStorage.getItem("diary")) || [];
 diary.push(entry);
 localStorage.setItem("diary", JSON.stringify(diary));

 displayDiary();
 document.getElementById("diaryText").value="";
}

function displayDiary(){
 const list = document.getElementById("diaryList");
 list.innerHTML="";
 const diary = JSON.parse(localStorage.getItem("diary")) || [];
 diary.forEach(d=>{
  const li=document.createElement("li");
  li.textContent = `${d.time} — ${d.text}`;
  list.appendChild(li);
 });
}

displayDiary();
