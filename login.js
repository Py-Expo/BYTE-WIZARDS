function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  // Perform your login validation here (e.g., check credentials against a database)
  // For simplicity, a basic check is used here (email: "user@example.com", password: "pass")
  if (email === "user@example.com" && password === "pass") {
      alert("Login successful!");
      // Redirect to another page on successful login
      window.location.href = "success.html";
  } else {
      // Display error message and reset password link
      errorMessage.textContent = "Invalid email or password. Please try again.";
  }
}
