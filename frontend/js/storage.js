function getData(k){ return JSON.parse(localStorage.getItem(k)) || []; }
function saveData(k,v){ localStorage.setItem(k,JSON.stringify(v)); }
