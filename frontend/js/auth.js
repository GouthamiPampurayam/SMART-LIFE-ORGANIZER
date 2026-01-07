function login(){
  const name = document.getElementById("username").value;

  fetch("http://localhost:5000/api/auth/login",{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ name })
  })
  .then(res=>res.json())
  .then(data=>{
    localStorage.setItem("user", data.user);
    window.location.href="dashboard.html";
  });
}
