<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


/*
|--------------------------------------------------------------------------
| Default Dashboard
|--------------------------------------------------------------------------
|
| Route bawaan Laravel/Breeze.
| Untuk sementara kita biarkan tetap ada.
|
*/

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


/*
|--------------------------------------------------------------------------
| Student Dashboard
|--------------------------------------------------------------------------
|
| Hanya user dengan role "student" yang boleh mengakses.
|
*/

Route::middleware(['auth', 'verified', 'role:student'])->group(function () {

    Route::get('/student/dashboard', function () {
        return Inertia::render('Student/Dashboard');
    })->name('student.dashboard');

});


/*
|--------------------------------------------------------------------------
| Teacher Dashboard
|--------------------------------------------------------------------------
|
| Hanya user dengan role "teacher" yang boleh mengakses.
|
*/

Route::middleware(['auth', 'verified', 'role:teacher'])->group(function () {

    Route::get('/teacher/dashboard', function () {
        return Inertia::render('Teacher/Dashboard');
    })->name('teacher.dashboard');

});


/*
|--------------------------------------------------------------------------
| Profile Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])
        ->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])
        ->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])
        ->name('profile.destroy');

});


/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
*/

require __DIR__.'/auth.php';