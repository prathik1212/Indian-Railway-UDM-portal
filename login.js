function fakeLogin() {
  let user = document.getElementById("userid").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    alert("✅ Welcome " + user + "! Redirecting...");
    window.location.href = "dashboard.html"; 
  } else {
    alert("❌ Invalid Username or Password");
  }
}
