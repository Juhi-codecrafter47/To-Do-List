function validateSignup() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Check for empty fields
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirm-password", confirmPassword);

    // Send data to PHP via fetch
    fetch("signup.php", {
        method: "GET",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error); // Show error message
        } else {
            alert(data.success); // Show success message
            // Optionally, redirect the user to another page
            // window.location.href = "login.html";
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });

    return false; // Prevent default form submission
}
