var yourNameInp = document.getElementById("yourNameInp");
var yourEmailInp = document.getElementById("yourEmailInp");
var yourPasswordInp = document.getElementById("yourPasswordInp");
var signUpBtn = document.querySelector(".logInWindow h5 button");
var validMsgEmail = document.getElementsByClassName("msgMail")[0];
var validMsgPass = document.getElementsByClassName("msgPass")[0];
var validBoth = document.getElementsByClassName("msgSuc")[0];
var emailRegex = /^.*@.*\.com$/;
var passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

var users = [];

function addNewUser() {
  userInfo = {
    name: yourNameInp.value,
    email: yourEmailInp.value,
    password: yourPasswordInp.value,
  };
  users.push(userInfo);
}
function signUp() {
  if (
    emailRegex.test(yourEmailInp.value) &&
    passRegex.test(yourPasswordInp.value) === true
  ) {
    var storedUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    addNewUser();
    storedUsers.push(userInfo);
    localStorage.setItem("allUsers", JSON.stringify(storedUsers));
    clearInpsSignUp();
    validBoth.classList.replace("d-none", "d-flex");
    validMsgEmail.classList.add("d-none");
    validMsgPass.classList.add("d-none");
  } else if (
    emailRegex.test(yourEmailInp.value) === true &&
    passRegex.test(yourPasswordInp.value) != true
  ) {
    validMsgPass.classList.replace("d-none", "d-flex");
    validMsgEmail.classList.add("d-none");
    validBoth.classList.add("d-none");
  } else if (
    emailRegex.test(yourEmailInp.value) != true &&
    passRegex.test(yourPasswordInp.value) === true
  ) {
    validMsgEmail.classList.replace("d-none", "d-flex");
    validMsgPass.classList.add("d-none");
    validBoth.classList.add("d-none");
  } else if (
    emailRegex.test(yourEmailInp.value) != true &&
    passRegex.test(yourPasswordInp.value) != true
  ) {
    validMsgEmail.classList.replace("d-none", "d-flex");
    validMsgPass.classList.replace("d-none", "d-flex");
    validBoth.classList.add("d-none");
  }
}
function clearInpsSignUp() {
  yourNameInp.value = "";
  yourEmailInp.value = "";
  yourPasswordInp.value = "";
}

signUpBtn.addEventListener("click", function () {
  location.assign("index.html");
});
