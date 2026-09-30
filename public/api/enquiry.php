<?php
/**
 * Prabhu Rockshape Machinery Ltd. — Enquiry Form Handler (PHP for Hostinger)
 * ---------------------------------------------------------------------------
 * Handles submissions from the Next.js static contact form.
 * Works seamlessly with Hostinger Apache / LiteSpeed hosting.
 */

// Allow cross-origin requests if needed
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method not allowed"]);
    exit;
}

// ---------------------------------------------------------------------------
// CONFIGURATION
// ---------------------------------------------------------------------------
$PRIMARY_RECIPIENT = "marketing@prabhurockshape.com";
$SECONDARY_RECIPIENT = "spchitte@prabhurockshape.com";
$FROM_EMAIL = "no-reply@prabhurockshape.com"; // Adjust to your domain email
$LOG_FILE = __DIR__ . "/enquiries_backup.log"; // Safe local backup log

// ---------------------------------------------------------------------------
// PARSE REQUEST
// ---------------------------------------------------------------------------
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

// Sanitize inputs
$fullName = isset($data['fullName']) ? trim(strip_tags((string)$data['fullName'])) : '';
$company  = isset($data['company']) ? trim(strip_tags((string)$data['company'])) : '';
$email    = isset($data['email']) ? trim(filter_var((string)$data['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone    = isset($data['phone']) ? trim(strip_tags((string)$data['phone'])) : '';
$industry = isset($data['industry']) ? trim(strip_tags((string)$data['industry'])) : '';
$product  = isset($data['product']) ? trim(strip_tags((string)$data['product'])) : '';
$message  = isset($data['message']) ? trim(strip_tags((string)$data['message'])) : '';

// ---------------------------------------------------------------------------
// VALIDATION
// ---------------------------------------------------------------------------
$errors = [];

if (empty($fullName)) {
    $errors['fullName'] = "Full name is required.";
}

if (empty($email)) {
    $errors['email'] = "Email is required.";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = "Enter a valid email address.";
}

if (empty($phone)) {
    $errors['phone'] = "Phone is required.";
} elseif (!preg_match('/^[+()\d][\d\s()-]{6,}$/', $phone)) {
    $errors['phone'] = "Enter a valid phone number.";
}

if (empty($message)) {
    $errors['message'] = "Message is required.";
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(["ok" => false, "errors" => $errors]);
    exit;
}

// ---------------------------------------------------------------------------
// FORMAT EMAIL
// ---------------------------------------------------------------------------
$subject = "New Website Enquiry: " . ($product ? $product : "General") . " — " . $fullName;
// Prevent header injection
$subject = str_replace(["\r", "\n"], ' ', $subject);

$emailBody = "=====================================================\n";
$emailBody .= "NEW ENQUIRY FROM PRABHU ROCKSHAPE MACHINERY LTD. WEB\n";
$emailBody .= "=====================================================\n\n";
$emailBody .= "Date & Time: " . date("Y-m-d H:i:s") . " (IST)\n";
$emailBody .= "Full Name:   " . $fullName . "\n";
$emailBody .= "Company:     " . ($company ?: "Not specified") . "\n";
$emailBody .= "Email:       " . $email . "\n";
$emailBody .= "Phone:       " . $phone . "\n";
$emailBody .= "Industry:    " . ($industry ?: "Not specified") . "\n";
$emailBody .= "Product:     " . ($product ?: "General Enquiry") . "\n\n";
$emailBody .= "Message:\n" . $message . "\n\n";
$emailBody .= "-----------------------------------------------------\n";
$emailBody .= "User IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
$emailBody .= "User Agent: " . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown') . "\n";

$headers = [];
$headers[] = "From: Prabhu Rockshape Website <" . $FROM_EMAIL . ">";
$headers[] = "Reply-To: " . $fullName . " <" . $email . ">";
$headers[] = "Cc: " . $SECONDARY_RECIPIENT;
$headers[] = "X-Mailer: PHP/" . phpversion();
$headers[] = "Content-Type: text/plain; charset=UTF-8";

// ---------------------------------------------------------------------------
// BACKUP LOGGING (Ensures no enquiry is ever lost)
// ---------------------------------------------------------------------------
$logEntry = "[" . date("Y-m-d H:i:s") . "] " . json_encode([
    "fullName" => $fullName,
    "company" => $company,
    "email" => $email,
    "phone" => $phone,
    "industry" => $industry,
    "product" => $product,
    "message" => $message,
    "ip" => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
], JSON_UNESCAPED_UNICODE) . PHP_EOL;

@file_put_contents($LOG_FILE, $logEntry, FILE_APPEND | LOCK_EX);

// ---------------------------------------------------------------------------
// DISPATCH EMAIL
// ---------------------------------------------------------------------------
// Uses PHP mail() function supported out of the box by Hostinger
$mailSuccess = @mail($PRIMARY_RECIPIENT, $subject, $emailBody, implode("\r\n", $headers));

// Return success to the Next.js frontend
http_response_code(200);
echo json_encode([
    "ok" => true,
    "message" => "Enquiry received successfully. Our team will contact you shortly."
]);
exit;
