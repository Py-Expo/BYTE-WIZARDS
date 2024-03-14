function registerUser() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var successMessage = document.getElementById("success-message");

  // Perform your registration logic here (e.g., store user data in a database)
  // For simplicity, a basic success message is displayed here
  // In a real-world scenario, implement server-side validation and storage
  if (username && email && password) {
      successMessage.textContent = "Registration successful! Redirecting to home page...";
      // Redirect to home page after a brief delay
      setTimeout(function () {
          window.location.href = "home.html";
      }, 2000);
  } else {
      successMessage.textContent = "Registration failed. Please fill in all the fields.";
  }
}
