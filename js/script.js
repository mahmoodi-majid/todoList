// Variables
let $ = document;
let btnLogin = $.querySelector("#btnLogin");
const inputName = $.querySelector("#inputName");
const inputLastName = $.querySelector("#inputLastName");
const inputPhonNumber = $.querySelector("#inputPhon");
const inputEmail = $.querySelector("#inputEmail");
const inputPassword = $.querySelector("#inputPassword");
const mesaageName = $.querySelector(".mesaageName");
const mesaageLastName = $.querySelector(".mesaageLastName");
const mesaagephone = $.querySelector(".mesaagephone");
const mesaageemail = $.querySelector(".mesaageemail");
const mesaagePassword = $.querySelector(".mesaagePassword");

// function
function chekUserName() {
  let userNameValue = inputName.value.length;
  if (userNameValue > 9) {
    mesaageName.style.display = "block";
    mesaageName.style.backgroundColor = "red";
    mesaageName.textContent = "The length is very long"
  } else {
    mesaageName.style.display = "block";
    mesaageName.style.backgroundColor = "green";
    mesaageName.textContent = "Everything is great"
  }
  setTimeout(function () {
    mesaageName.style.display = "none";
  }, 3000);
}
function chekUserLastName() {
  let userLastNameValue = inputLastName.value.length;
  if (userLastNameValue < 9) {
    mesaageLastName.style.display = "block";
    mesaageLastName.style.backgroundColor = "red";
    mesaageLastName.textContent = "The length is very short"
  } else {
    mesaageLastName.style.display = "block";
    mesaageLastName.style.backgroundColor = "green";
    mesaageLastName.textContent = "Everything is great"
  }
  setTimeout(function () {
    mesaageLastName.style.display = "none";
  }, 3000);
}
function checkPhoneNumber() {
  let userPhoneNumberValue = inputPhonNumber.value.length;
  if (userPhoneNumberValue < 9) {
    mesaagephone.style.display = "block";
    mesaagephone.style.backgroundColor = "red";
    mesaagephone.textContent = "The length is very short"
  } else {
    mesaagephone.style.display = "block";
    mesaagephone.style.backgroundColor = "green";
    mesaagephone.textContent = "Everything is great"
  }
  setTimeout(function () {
    mesaagephone.style.display = "none";
  }, 3000);
}
function chekUserEmail() {
  let userEmail = inputEmail.value.length;
  if (userEmail < 9) {
    mesaageemail.style.display = "block";
    mesaageemail.style.backgroundColor = "red";
    mesaageemail.textContent = "The length is very short"
  } else {
    mesaageemail.style.display = "block";
    mesaageemail.style.backgroundColor = "green";
    mesaageemail.textContent = "Everything is great"
  }
  setTimeout(function () {
    mesaageemail.style.display = "none";
  }, 3000);
}
function chekUserPassword() {
  let userPassword = inputPassword.value.length;
  if (userPassword < 9) {
    mesaagePassword.style.display = "block";
    mesaagePassword.style.backgroundColor = "red";
    mesaagePassword.textContent = "The length is very short"
  } else {
    mesaagePassword.style.display = "block";
    mesaagePassword.style.backgroundColor = "green";
    mesaagePassword.textContent = "Everything is great"
  }
  setTimeout(function () {
    mesaagmesaagePasswordeemail.style.display = "none";
  }, 3000);
}

// event
inputName.addEventListener("keypress", chekUserName);
inputLastName.addEventListener("keypress", chekUserLastName);
inputPhon.addEventListener("keypress", checkPhoneNumber);
inputEmail.addEventListener("keypress", chekUserEmail);
inputPassword.addEventListener("keypress", chekUserPassword);
