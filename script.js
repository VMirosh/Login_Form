let form1 = document.forms[0];
let form2 = document.forms[1];
let form3 = document.forms[2];

form1.querySelector("#forgot-password").addEventListener("click", function () {
  form1.classList.toggle("hidden");
  form3.classList.add("visibility");
});
form1.addEventListener("submit", function (e) {
  alert("Welcome")
});
form1.querySelector("#sign-up").addEventListener("click", function () {
  form1.classList.toggle("hidden");
  form2.classList.add("visibility");
});

form2.querySelector(".close-button").addEventListener("click", function () {
  form1.classList.toggle("hidden");
  form2.classList.remove("visibility");
});
form2.passwordConfirm.addEventListener("change", function () {
  debugger
  if (form2.passwordConfirm.value != form2.password.value) {
    form2.passwordConfirm.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
    form2.password.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
  } else {
    form2.passwordConfirm.setCustomValidity("");
    form2.password.setCustomValidity("");
  }
})

form3.querySelector(".close-button").addEventListener("click", function () {
  form1.classList.toggle("hidden");
  form3.classList.remove("visibility");
});
form3.addEventListener("submit", function (e) {
  if (form3.email.value.length == 0) {
    e.preventDefault();
  }
  alert("Мы отправили Вам письмо на почту");
});


