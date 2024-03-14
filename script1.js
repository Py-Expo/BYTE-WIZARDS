function validateForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Simple frontend validation
    if (firstname === "" || lastname === "" || gender === "" || dob === "" || password === "" || confirmPassword === "") {
        document.getElementById("error-message").innerHTML = "Please fill in all fields.";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("error-message").innerHTML = "Passwords do not match.";
        return;
    }

    // Add your registration logic here (you may submit the form to the server)
    console.log("Registration successful!");
}
