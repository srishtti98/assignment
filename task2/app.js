

function validateForm(event) {
    event.preventDefault();
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var usernameError = document.getElementById("usernameError");

    if (usernameInput.value === "") {
      usernameInput.classList.add("error");
      usernameError.style.border = "red";
      usernameError.textContent = "Please enter a username.";
    } else if (usernameInput.value.length < 5 || usernameInput.value.length > 15) {
      usernameInput.classList.add("error");
      usernameError.style.color = "red";
      usernameError.textContent = "Characters should be between 5-15.";
    } else {
      usernameInput.classList.remove("error");
      usernameInput.classList.add("success");
      usernameError.textContent = "";

      // Submit the form if validation passes
      alert("Form submitted successfully!");
    }
  }

  function validateUsername() {
    var usernameInput = document.getElementById("username");
    var usernameError = document.getElementById("usernameError");

    if (usernameInput.value === "") {
      usernameInput.classList.remove("success");
      usernameInput.classList.add("error");
      usernameError.style.color = "red";
      usernameError.textContent = "Please enter a username.";
    } else if (usernameInput.value.length < 5 || usernameInput.value.length > 15) {
      usernameInput.classList.add("error");
      usernameError.style.color = "red";
      usernameError.textContent = "Characters should be between 5-15.";
    } else {
      usernameInput.classList.remove("error");
      usernameInput.classList.add("success");
      usernameError.textContent = "";
    }
  }

  function validatePassword() {
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");

    if (passwordInput.value.length < 8 || passwordInput.value.length > 15) {
      passwordInput.classList.add("error");
      passwordError.style.color = "red";
      passwordError.textContent = "Characters should be between 8-15.";
    } else {
      passwordInput.classList.remove("error");
      passwordInput.classList.add("success");
      passwordError.textContent = "";
    }
  }