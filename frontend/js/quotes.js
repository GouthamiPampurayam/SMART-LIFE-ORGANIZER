const quotes = [
 "Small steps every day lead to big success.",
 "You don’t have to be perfect, just consistent.",
 "Study now, shine later.",
 "Dream big. Work smart.",
 "Focus beats talent when talent doesn’t focus.",
 "Your future self will thank you.",
 "Little progress is still progress.",
 "Discipline today = freedom tomorrow."
];

function showQuote(){
  const q = quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById("quoteBox").innerText = q;
}

setInterval(showQuote, 6000);
window.onload = showQuote;
