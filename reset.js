function validateForm(event) {
    event.preventDefault();
  
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address.';
    } else {
      // Reset error message
      emailError.textContent = '';
  
      // You can add additional logic for sending reset password link here
  
      // For demonstration purposes, show an alert
      alert('Password reset link sent to ' + emailInput.value);
    }
  }
  