<?php

/**
 * Vercel Serverless Function Bridge untuk Laravel
 */

// 1. Buat struktur folder storage di /tmp karena sistem file Vercel bersifat read-only
$storageDirs = [
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/framework/sessions',
    '/tmp/storage/logs',
    '/tmp/storage/app',
];

foreach ($storageDirs as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}

// 2. Arahkan direktori penyimpanan Laravel ke /tmp/storage
putenv('LARAVEL_STORAGE_PATH=/tmp/storage');
$_ENV['LARAVEL_STORAGE_PATH'] = '/tmp/storage';
$_SERVER['LARAVEL_STORAGE_PATH'] = '/tmp/storage';

// 3. Teruskan request ke entry point aplikasi Laravel
require __DIR__ . '/../public/index.php';
