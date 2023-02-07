let form1 = document.forms[0];
let form2 = document.forms[1];
let form3 = document.forms[2];
form1.querySelector("#forgot-password").addEventListener("click", function () {
  form1.classList.toggle("hidden");
  form3.classList.add("visibility");
});

form1.querySelector("#sign-up").addEventListener("click", function () {
  form1.classList.toggle("hidden");
  form2.classList.add("visibility");
});

form3.querySelector(".close-button").addEventListener("click", function () {
  
  form1.classList.toggle("hidden");
  form3.classList.remove("visibility");
});

form2.querySelector(".close-button").addEventListener("click", function () {
  
  form1.classList.toggle("hidden");
  form2.classList.remove("visibility");
});
