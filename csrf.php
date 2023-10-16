<?php
session_start();

if (empty($_SESSION['csrf_token'])) {
    // Generate a random CSRF token and store it in the session
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$csrf_token = $_SESSION['csrf_token'];
?>
