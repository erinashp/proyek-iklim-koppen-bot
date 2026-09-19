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
| Main Dashboard
|--------------------------------------------------------------------------
|
| Semua user yang sudah login masuk ke sini terlebih dahulu.
| Setelah itu diarahkan berdasarkan role.
|
*/

Route::get('/dashboard', function () {
    $user = request()->user();

    if ($user->role === 'teacher') {
        return redirect()->route('teacher.dashboard');
    }

    return redirect()->route('student.dashboard');

})->middleware(['auth', 'verified'])->name('dashboard');


/*
|--------------------------------------------------------------------------
| Student Dashboard
|--------------------------------------------------------------------------
*/

Route::get('/student/dashboard', function () {
    return Inertia::render('Student/Dashboard');
})->middleware([
    'auth',
    'verified',
    'role:student',
])->name('student.dashboard');


/*
|--------------------------------------------------------------------------
| Teacher Dashboard
|--------------------------------------------------------------------------
*/

Route::get('/teacher/dashboard', function () {
    return Inertia::render('Teacher/Dashboard');
})->middleware([
    'auth',
    'verified',
    'role:teacher',
])->name('teacher.dashboard');


/*
|--------------------------------------------------------------------------
| Profile
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
| Authentication
|--------------------------------------------------------------------------
*/

require __DIR__.'/auth.php';