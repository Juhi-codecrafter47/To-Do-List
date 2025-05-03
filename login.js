function redirectToSignIn() {
    window.location.href = 'signup.html'; 
}
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return false;
    }
    return true;
}
