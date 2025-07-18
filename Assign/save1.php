<?php
// filepath: c:\xampp\htdocs\save1.php

// Database connection
$servername = "localhost";
$username = "sangam"; // Replace with your database username
$password = "sangam23"; // Replace with your database password
$dbname = "fiber"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$address = $_POST['address'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$school = $_POST['school'];
$school_address = $_POST['school_address'];
$school_marks = $_POST['marks'];
$school_year = $_POST['year'];
$high_school = $_POST['high_school'];
$high_school_address = $_POST['high_school_address'];
$high_school_marks = $_POST['marks'];
$high_school_year = $_POST['high_year'];
$college = $_POST['college'];
$college_address = $_POST['college_address'];
$college_marks = $_POST['marks'];
$grad_year = $_POST['grad_year'];
$addr1 = $_POST['Addr1'];
$addr2 = $_POST['Addr2'];
$landmark = $_POST['landmark'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$country = $_POST['country'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$alternate_phone = $_POST['alternate_phone'];

// Insert data into the database
$sql = "INSERT INTO fiberbookingform (name, address, age, dob, gender, school_name, school_address, school_marks, school_year, high_school_name, high_school_address, high_school_marks, high_school_year, college_name, college_address, college_marks, college_year, addr_line1, addr_line2, landmark, city, state, zip_code, country, phone_number, email, alternate_phone)
VALUES ('$name', '$address', '$age', '$dob', '$gender', '$school', '$school_address', '$school_marks', '$school_year', '$high_school', '$high_school_address', '$high_school_marks', '$high_school_year', '$college', '$college_address', '$college_marks', '$grad_year', '$addr1', '$addr2', '$landmark', '$city', '$state', '$zip', '$country', '$phone', '$email', '$alternate_phone')";

if ($conn->query($sql) === TRUE) {
    echo "Data saved successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>