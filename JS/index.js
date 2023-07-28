var storedUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
var enterEmailInp = document.getElementById("enterEmailInp");
var enterPasswordInp = document.getElementById("enterPasswordInp");
var logInBtn = document.getElementsByClassName("logInBtn");
var warningMsg = document.getElementsByClassName("warningMsg");
var welcomName = document.querySelector(".welcome h1");

var currentUser = logInBtn[0].addEventListener("click", function () {
  if (storedUsers) {
    var foundUser = storedUsers.find(
      (user) =>
        user.email === enterEmailInp.value &&
        user.password === enterPasswordInp.value
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      location.assign("home.html");
    } else {
      warningMsg[0].innerHTML = "Invalid email or password. Please try again.";
    }
  } else {
    warningMsg[0].innerHTML = "No users found. Please sign up first.";
  }

  clearInpsSignIn();
});

function clearInpsSignIn() {
  enterPasswordInp.value = "";
  enterEmailInp.value = "";
}
