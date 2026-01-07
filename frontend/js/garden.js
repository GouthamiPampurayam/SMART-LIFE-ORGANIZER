let level = parseInt(localStorage.getItem("garden")) || 0;
document.getElementById("gardenLevel").innerText = level;

function growGarden(){
  level++;
  localStorage.setItem("garden", level);
  document.getElementById("gardenLevel").innerText = level;
  renderGarden();
}

function renderGarden(){
  const box = document.getElementById("flowers");
  box.innerHTML="";
  for(let i=0;i<level;i++){
    const f=document.createElement("span");
    f.innerText="🌸";
    f.style.fontSize="24px";
    box.appendChild(f);
  }
}
renderGarden();
