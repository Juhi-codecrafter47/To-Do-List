<?php
// Database connection
$servername = "localhost";
$dbUsername = "root"; // Default username for XAMPP
$dbPassword = ""; // Default password is empty for XAMPP
$dbname = "todo_list";

// Create connection
$conn = new mysqli($servername, $dbUsername, $dbPassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$response = [];

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm-password'];

    // Check if fields are empty
    if (empty($username) || empty($email) || empty($password) || empty($confirm_password)) {
        $response['error'] = "Please fill out all fields.";
    } 
    // Check if passwords match
    elseif ($password !== $confirm_password) {
        $response['error'] = "Passwords do not match.";
    } 
    else {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Insert user data into the database
        $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $username, $email, $hashed_password);

        if ($stmt->execute()) {
            $response['success'] = "User registered successfully!";
        } else {
            $response['error'] = "Error: " . $stmt->error;
        }

        $stmt->close();
    }
}

$conn->close();

// Return JSON response
echo json_encode($response);
?>
