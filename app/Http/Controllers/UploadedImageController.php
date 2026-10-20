<?php

namespace App\Http\Controllers;

use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class UploadedImageController extends Controller
{
    public function __invoke(string $path): StreamedResponse
    {
        abort_unless(
            preg_match('#^(profiles|challenge)/[A-Za-z0-9._/-]+$#', $path) === 1
            && !str_contains($path, '..'),
            404
        );

        /** @var FilesystemAdapter $disk */
        $disk = Storage::disk(config('filesystems.uploads'));

        abort_unless($disk->exists($path), 404);

        return $disk->response($path, null, [
            'Cache-Control' => 'private, max-age=3600',
            'X-Content-Type-Options' => 'nosniff',
        ]);
    }
}
