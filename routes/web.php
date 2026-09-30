
<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Teacher\StudentController;

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
})->name('home');


/*
|--------------------------------------------------------------------------
| Main Dashboard
|--------------------------------------------------------------------------
|
| Setelah login, pengguna diarahkan berdasarkan role:
| admin   -> Admin Dashboard
| teacher -> Teacher Dashboard
| student -> Student Dashboard
|
*/

Route::get('/dashboard', function (Request $request) {
    $user = $request->user();

    return match ($user->role) {
        'admin' => redirect()->route('admin.dashboard'),
        'teacher' => redirect()->route('teacher.dashboard'),
        'student' => redirect()->route('student.dashboard'),
        default => abort(403, 'Role pengguna tidak dikenali.'),
    };
})->middleware(['auth', 'verified'])->name('dashboard');


/*
|--------------------------------------------------------------------------
| Student Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified', 'role:student'])
    ->prefix('student')
    ->name('student.')
    ->group(function () {

        Route::get('/dashboard', function () {
            return Inertia::render('Student/Dashboard');
        })->name('dashboard');

        Route::get('/guide', function () {
            return Inertia::render('Student/Guide');
        })->name('guide');

        Route::get('/material', function () {
            return Inertia::render('Student/Material');
        })->name('material');

        Route::get('/objectives', function () {
            return Inertia::render('Student/Objectives');
        })->name('objectives');

        Route::get('/profile', function (Request $request) {
            return Inertia::render('Student/Profile', [
                'user' => $request->user(),
            ]);
        })->name('profile');

        Route::put('/profile', [UserProfileController::class, 'update'])
            ->name('profile.update');
    });


/*
|--------------------------------------------------------------------------
| Teacher Routes
|--------------------------------------------------------------------------
|
| Guru dapat:
| - Mengelola data siswa
| - Melihat hasil kuis siswa
| - Mengelola profil sendiri
|
| Guru tidak memiliki route untuk membuat materi atau kuis.
|
*/

Route::middleware(['auth', 'verified', 'role:teacher'])
    ->prefix('teacher')
    ->name('teacher.')
    ->group(function () {

        Route::get('/dashboard', function () {
            return Inertia::render('Teacher/Dashboard');
        })->name('dashboard');

        Route::get('/profile', function (Request $request) {
            return Inertia::render('Teacher/Profile', [
                'user' => $request->user(),
            ]);
        })->name('profile');

        Route::put('/profile', [UserProfileController::class, 'update'])
            ->name('profile.update');

            Route::get('/students', [StudentController::class, 'index'])
        ->name('students.index');

        /*
         * Route Hasil Kuis
         *
         * Tambahkan route hasil kuis di sini ketika controller
         * hasil kuis sudah dibuat.
         */
    });


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Admin memiliki akses ke:
| - Dashboard admin
| - Data guru
| - Data siswa
| - Materi pembelajaran
| - Kuis atau tantangan
| - Hasil kuis
|
*/

Route::middleware(['auth', 'verified', 'role:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        Route::get('/dashboard', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('dashboard');

        Route::get('/profile', function (Request $request) {
            return Inertia::render('Admin/Profile', [
                'user' => $request->user(),
            ]);
        })->name('profile');

        Route::put('/profile', [UserProfileController::class, 'update'])
            ->name('profile.update');

        /*
         * Route Data Guru
         *
         * Tambahkan route CRUD guru di sini.
         */

        /*
         * Route Data Siswa
         *
         * Tambahkan route CRUD siswa di sini.
         */

        /*
         * Route Materi Pembelajaran
         *
         * Tambahkan route CRUD materi di sini.
         */

        /*
         * Route Kuis
         *
         * Tambahkan route CRUD kuis di sini.
         */

        /*
         * Route Hasil Kuis
         *
         * Tambahkan route hasil kuis di sini.
         */
    });


/*
|--------------------------------------------------------------------------
| General Profile Routes
|--------------------------------------------------------------------------
|
| Route profil bawaan Laravel Breeze.
| Nama route profile.update tetap digunakan oleh Breeze.
|
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

require __DIR__ . '/auth.php';