<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Teacher\StudentController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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

        // Dashboard Siswa
        Route::get('/dashboard', function () {
            return Inertia::render('Student/Dashboard');
        })->name('dashboard');

        // Panduan Belajar
        Route::get('/guide', function () {
            return Inertia::render('Student/Guide');
        })->name('guide');

        // Materi Pembelajaran
        Route::get('/material', function () {
            return Inertia::render('Student/Material');
        })->name('material');

        // Tujuan Pembelajaran
        Route::get('/objectives', function () {
            return Inertia::render('Student/Objectives');
        })->name('objectives');

        // Profil Siswa
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
| Student Learning Modules
|--------------------------------------------------------------------------
|
| Route modul pembelajaran iklim Köppen.
| Route ini tetap menggunakan nama student.modul1 sampai student.modul6.
|
*/

Route::middleware(['auth', 'verified', 'role:student'])->group(function () {

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
});


/*
|--------------------------------------------------------------------------
| Teacher Routes
|--------------------------------------------------------------------------
|
| Semua route guru menggunakan:
| URL prefix : /teacher
| Route name : teacher.
| Middleware : auth, verified, role:teacher
|
*/

Route::middleware(['auth', 'verified', 'role:teacher'])
    ->prefix('teacher')
    ->name('teacher.')
    ->group(function () {

        // Dashboard Guru
        Route::get('/dashboard', function () {
            return Inertia::render('Teacher/Dashboard');
        })->name('dashboard');

        // Profil Guru
        Route::get('/profile', function (Request $request) {
            return Inertia::render('Teacher/Profile', [
                'user' => $request->user(),
            ]);
        })->name('profile');

        Route::put('/profile', [UserProfileController::class, 'update'])
            ->name('profile.update');

        Route::get('/guide', function () {
            return Inertia::render('Teacher/Guide');
        })->name('guide');

        Route::delete('/students/{student}', [StudentController::class, 'destroy'])
        ->name('students.destroy');

        /*
         * Data Siswa
         */

        // Menampilkan daftar siswa
        Route::get('/students', [StudentController::class, 'index'])
            ->name('students.index');

        // Menyimpan akun siswa baru
        Route::post('/students', [StudentController::class, 'store'])
            ->name('students.store');
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

Route::middleware(['auth', 'verified', 'role:teacher'])
    ->prefix('teacher')
    ->name('teacher.')
    ->group(function () {

        Route::get('/dashboard', fn () =>
            Inertia::render('Teacher/Dashboard')
        )->name('dashboard');

        Route::get('/profile', function (Request $request) {
            return Inertia::render('Teacher/Profile', [
                'user' => $request->user(),
            ]);
        })->name('profile');

        Route::put('/profile', [UserProfileController::class, 'update'])
            ->name('profile.update');

        Route::get('/students', [StudentController::class, 'index'])
            ->name('students.index');

        Route::post('/students', [StudentController::class, 'store'])
            ->name('students.store');

        // TUJUAN PEMBELAJARAN
        Route::get('/objectives', fn () =>
            Inertia::render('Teacher/Objectives')
        )->name('objectives');

        // PANDUAN
        Route::get('/guide', fn () =>
            Inertia::render('Teacher/Guide')
        )->name('guide');

        // DAFTAR MATERI
        Route::get('/materials', function () {
            return Inertia::render('Teacher/Materials/Index');
        })->name('materials.index');

        // DETAIL MODUL 1 - 6
        Route::get('/materials/{material}', function ($material) {
            return Inertia::render("Teacher/Materials/Modul{$material}");
        })->whereNumber('material')->name('materials.show');
    });

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

/*
|--------------------------------------------------------------------------
| General Profile Routes
|--------------------------------------------------------------------------
|
| Route profil bawaan Laravel Breeze.
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