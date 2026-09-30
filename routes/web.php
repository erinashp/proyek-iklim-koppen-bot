<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserProfileController;
use Illuminate\Http\Request;

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
| Student
|--------------------------------------------------------------------------
*/

Route::get('/student/dashboard', function () {
    return Inertia::render('Student/Dashboard');
})->middleware([
    'auth',
    'verified',
    'role:student',
])->name('student.dashboard');


Route::get('/student/guide', function () {
    return Inertia::render('Student/Guide');
})->middleware([
    'auth',
    'verified',
    'role:student',
])->name('student.guide');


Route::get('/student/material', function () {
    return Inertia::render('Student/Material');
})->middleware([
    'auth',
    'verified',
    'role:student',
])->name('student.material');

Route::get('/student/objectives', function () {
    return Inertia::render('Student/Objectives');
})->middleware([
    'auth',
    'verified',
    'role:student',
])->name('student.objectives');

Route::get('/student/modul-1', function () {
    return Inertia::render('Student/Modul1');
})->name('student.modul1');

Route::get('/student/modul-2', function () {
    return Inertia::render('Student/Modul2');
})->name('student.modul2');

Route::get('/student/modul-3', function () {
    return Inertia::render('Student/Modul3');
})->name('student.modul3');

Route::get('/student/modul-4', function () {
    return Inertia::render('Student/Modul4');
})->name('student.modul4');

Route::get('/student/modul-5', function () {
    return Inertia::render('Student/Modul5');
})->name('student.modul5');

Route::get('/student/modul-6', function () {
    return Inertia::render('Student/Modul6');
})->name('student.modul6');

/*
|--------------------------------------------------------------------------
| Teacher
|--------------------------------------------------------------------------
*/

Route::get('/teacher/dashboard', function () {
    return Inertia::render('Teacher/Dashboard');
})->middleware([
    'auth',
    'verified',
    'role:teacher',
])->name('teacher.dashboard');

Route::middleware(['auth', 'verified', 'role:teacher'])->group(function () {
    Route::get('/teacher/profile', function (Request $request) {
        return Inertia::render('Teacher/Profile', [
            'user' => $request->user(),
        ]);
    })->name('teacher.profile');

    Route::put('/teacher/profile', [UserProfileController::class, 'update'])
        ->name('teacher.profile.update');
});



/*
|--------------------------------------------------------------------------
| Profile
|--------------------------------------------------------------------------
*/

// Halaman informasi profil untuk siswa dan guru
Route::get('/profile/view', function () {
    return Inertia::render('Profile/Show');
})->middleware(['auth', 'verified'])->name('profile.show');

// Profile bawaan Laravel Breeze
Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])
        ->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])
        ->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])
        ->name('profile.destroy');
});

Route::get('/student/profile', function () {
    return Inertia::render('Student/Profile');
})->middleware(['auth'])->name('student.profile');

Route::put('/profile', [UserProfileController::class, 'update'])
    ->middleware(['auth'])
    ->name('profile.update');

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

require __DIR__.'/auth.php';