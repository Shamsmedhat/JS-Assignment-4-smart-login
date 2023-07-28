var warningMsg = document.getElementsByClassName("warningMsg");
var signOutBtn = document.querySelector(".myNav .row .col-12 button");
var welcomName = document.querySelector(".welcome h1");
var storedUsers = JSON.parse(localStorage.getItem("allUsers"));

var currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
  welcomName.innerHTML = `welcome ${currentUser.name}`;
} else {
  location.assign("../index.html");
}
signOutBtn.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  location.assign("index.html");
});
