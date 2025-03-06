<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $dogName = htmlspecialchars($_POST['dog-name']);
    $reason = htmlspecialchars($_POST['reason']);
    $pets = htmlspecialchars($_POST['pets']);
    $housing = htmlspecialchars($_POST['housing']);

    // Process the form data (e.g., save to a database, send an email, etc.)
    // For now, we'll just display the data
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Phone: $phone<br>";
    echo "Dog's Name: $dogName<br>";
    echo "Reason: $reason<br>";
    echo "Do you have other pets?: $pets<br>";
    echo "Type of housing: $housing<br>";
} else {
    echo "Invalid request method.";
}
?>
