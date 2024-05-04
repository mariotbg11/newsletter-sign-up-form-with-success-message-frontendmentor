const form = document.querySelector("form");
const email = document.getElementById("email");
const invalidMessage = document.getElementById("invalid-message");
const signUp = document.getElementById("sign-up-container");
const success = document.getElementById("sign-up-success");
const emailSubmit = document.getElementById("email-submit");
const dismiss = document.getElementById("dismiss");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener("load", () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed email address.
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    invalidMessage.textContent = "";
    invalidMessage.className = "error";
  } else {
    email.className = "invalid";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    invalidMessage.textContent = "Valid email required";
    invalidMessage.className = "error active";
  } else {
    email.className = "valid";
    invalidMessage.textContent = "";
    invalidMessage.className = "error";
    signUp.classList.remove("sign-up-container");
    signUp.classList.add("display-none");
    success.classList.remove("display-none");
    success.classList.add("sign-up-success");
    emailSubmit.innerHTML = email.value;
  }
});

dismiss.addEventListener("click", () => {
  success.classList.remove("success");
  success.classList.add("display-none");
  signUp.classList.remove("display-none");
  signUp.classList.add("sign-up-container");
  email.value = "";
});
