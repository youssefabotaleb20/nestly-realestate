<?php
/**
 * Nestly Real Estate — Properties API
 * File: api/properties.php
 *
 * Run PHP dev server: php -S localhost:8000 -t api/
 * Vite proxy:  /api  →  http://localhost:8000
 *
 * Endpoints:
 *   GET  /api/properties.php            → all listings
 *   GET  /api/properties.php?type=sale  → filtered by type (sale|rent)
 *   GET  /api/properties.php?tag=luxury → luxury listings
 *   POST /api/properties.php            → submit enquiry
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ── Static demo data (replace with PDO/MySQL queries) ────────────────────────
$properties = [
    [
        'id'       => 1,
        'name'     => 'Palm Hills Compound Villa',
        'location' => 'Sheikh Zayed, Giza',
        'price'    => 'EGP 8,500,000',
        'unit'     => '/unit',
        'type'     => 'sale',
        'tag'      => 'luxury',
        'beds'     => 5,
        'baths'    => 4,
        'area'     => 420,
        'feature'  => 'Pool',
        'img'      => 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80',
    ],
    [
        'id'       => 2,
        'name'     => 'Modern Penthouse Apartment',
        'location' => 'Zamalek, Cairo',
        'price'    => 'EGP 18,000',
        'unit'     => '/month',
        'type'     => 'rent',
        'tag'      => '',
        'beds'     => 3,
        'baths'    => 2,
        'area'     => 210,
        'feature'  => 'View',
        'img'      => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    ],
    [
        'id'       => 3,
        'name'     => 'Garden View Townhouse',
        'location' => 'Maadi, Cairo',
        'price'    => 'EGP 3,200,000',
        'unit'     => '/unit',
        'type'     => 'sale',
        'tag'      => '',
        'beds'     => 4,
        'baths'    => 3,
        'area'     => 280,
        'feature'  => 'Garden',
        'img'      => 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80',
    ],
    [
        'id'       => 4,
        'name'     => 'Nile Riviera Penthouse',
        'location' => 'Garden City, Cairo',
        'price'    => 'EGP 15,000,000',
        'unit'     => '/unit',
        'type'     => 'sale',
        'tag'      => 'luxury',
        'beds'     => 6,
        'baths'    => 5,
        'area'     => 650,
        'feature'  => 'Nile',
        'img'      => 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80',
    ],
];

// ── GET: list properties with optional filters ────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $type = $_GET['type'] ?? null;
    $tag  = $_GET['tag']  ?? null;

    $result = array_filter($properties, function ($p) use ($type, $tag) {
        if ($type && $p['type'] !== $type) return false;
        if ($tag  && $p['tag']  !== $tag)  return false;
        return true;
    });

    echo json_encode(['data' => array_values($result), 'total' => count($result)]);
    exit;
}

// ── POST: submit property enquiry ─────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = json_decode(file_get_contents('php://input'), true);

    if (empty($body['propertyId']) || empty($body['name']) || empty($body['email'])) {
        http_response_code(422);
        echo json_encode(['error' => 'Missing required fields: propertyId, name, email']);
        exit;
    }

    /*
    // Save to DB:
    $pdo = new PDO('mysql:host=localhost;dbname=nestly;charset=utf8mb4', 'root', 'password');
    $stmt = $pdo->prepare("
        INSERT INTO enquiries (property_id, name, email, phone, message, created_at)
        VALUES (:propertyId, :name, :email, :phone, :message, NOW())
    ");
    $stmt->execute([
        ':propertyId' => $body['propertyId'],
        ':name'       => $body['name'],
        ':email'      => $body['email'],
        ':phone'      => $body['phone']   ?? '',
        ':message'    => $body['message'] ?? '',
    ]);
    */

    http_response_code(201);
    echo json_encode([
        'status'  => 'received',
        'message' => 'Your enquiry has been submitted. An agent will contact you within 24 hours.',
        'ref'     => 'ENQ-' . strtoupper(uniqid()),
    ]);
    exit;
}
