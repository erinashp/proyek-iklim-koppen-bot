<?php

use App\Http\Controllers\Admin\StudentController as AdminStudentController;
use App\Http\Controllers\Admin\TeacherController as AdminTeacherController;
use App\Http\Controllers\Admin\MaterialController as AdminMaterialController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Teacher\StudentController as TeacherStudentController;
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
|
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
|
| Semua route siswa:
|
| URL prefix : /student
| Route name : student.
| Middleware : auth, verified, role:student
|
*/

Route::middleware(['auth', 'verified', 'role:student'])
    ->prefix('student')
    ->name('student.')
    ->group(function () {

        /*
        |--------------------------------------------------------------------------
        | Dashboard Siswa
        |--------------------------------------------------------------------------
        */

        Route::get('/dashboard', function () {

            return Inertia::render('Student/Dashboard');

        })->name('dashboard');


        /*
        |--------------------------------------------------------------------------
        | Panduan Belajar
        |--------------------------------------------------------------------------
        */

        Route::get('/guide', function () {

            return Inertia::render('Student/Guide');

        })->name('guide');


        /*
        |--------------------------------------------------------------------------
        | Materi Pembelajaran
        |--------------------------------------------------------------------------
        */

        Route::get('/material', function () {

            return Inertia::render('Student/Material');

        })->name('material');


        /*
        |--------------------------------------------------------------------------
        | Tujuan Pembelajaran
        |--------------------------------------------------------------------------
        */

        Route::get('/objectives', function () {

            return Inertia::render('Student/Objectives');

        })->name('objectives');


        /*
        |--------------------------------------------------------------------------
        | Profil Siswa
        |--------------------------------------------------------------------------
        */

        Route::get('/profile', function (Request $request) {

            return Inertia::render('Student/Profile', [
                'user' => $request->user(),
            ]);

        })->name('profile');


        /*
        |--------------------------------------------------------------------------
        | Update Profil Siswa
        |--------------------------------------------------------------------------
        */

        Route::put(
            '/profile',
            [UserProfileController::class, 'update']
        )->name('profile.update');

    });


/*
|--------------------------------------------------------------------------
| Student Learning Modules
|--------------------------------------------------------------------------
|
| Modul pembelajaran iklim Köppen.
|
*/

Route::middleware(['auth', 'verified', 'role:student'])
    ->group(function () {

        /*
        |--------------------------------------------------------------------------
        | Modul 1
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-1', function () {

            return Inertia::render('Student/Modul1');

        })->name('student.modul1');


        /*
        |--------------------------------------------------------------------------
        | Modul 2
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-2', function () {

            return Inertia::render('Student/Modul2');

        })->name('student.modul2');


        /*
        |--------------------------------------------------------------------------
        | Modul 3
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-3', function () {

            return Inertia::render('Student/Modul3');

        })->name('student.modul3');


        /*
        |--------------------------------------------------------------------------
        | Modul 4
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-4', function () {

            return Inertia::render('Student/Modul4');

        })->name('student.modul4');


        /*
        |--------------------------------------------------------------------------
        | Modul 5
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-5', function () {

            return Inertia::render('Student/Modul5');

        })->name('student.modul5');


        /*
        |--------------------------------------------------------------------------
        | Modul 6
        |--------------------------------------------------------------------------
        */

        Route::get('/student/modul-6', function () {

            return Inertia::render('Student/Modul6');

        })->name('student.modul6');

    });


/*
|--------------------------------------------------------------------------
| Teacher Routes
|--------------------------------------------------------------------------
|
| Semua route guru:
|
| URL prefix : /teacher
| Route name : teacher.
| Middleware : auth, verified, role:teacher
|
*/

Route::middleware(['auth', 'verified', 'role:teacher'])
    ->prefix('teacher')
    ->name('teacher.')
    ->group(function () {

        /*
        |--------------------------------------------------------------------------
        | Dashboard Guru
        |--------------------------------------------------------------------------
        */

        Route::get('/dashboard', function () {

            return Inertia::render('Teacher/Dashboard');

        })->name('dashboard');


        /*
        |--------------------------------------------------------------------------
        | Profil Guru
        |--------------------------------------------------------------------------
        */

        Route::get('/profile', function (Request $request) {

            return Inertia::render('Teacher/Profile', [
                'user' => $request->user(),
            ]);

        })->name('profile');


        /*
        |--------------------------------------------------------------------------
        | Update Profil Guru
        |--------------------------------------------------------------------------
        */

        Route::put(
            '/profile',
            [UserProfileController::class, 'update']
        )->name('profile.update');


        /*
        |--------------------------------------------------------------------------
        | Panduan Guru
        |--------------------------------------------------------------------------
        */

        Route::get('/guide', function () {

            return Inertia::render('Teacher/Guide');

        })->name('guide');


        /*
        |--------------------------------------------------------------------------
        | Tujuan Pembelajaran
        |--------------------------------------------------------------------------
        */

        Route::get('/objectives', function () {

            return Inertia::render('Teacher/Objectives');

        })->name('objectives');


        /*
        |--------------------------------------------------------------------------
        | Daftar Materi
        |--------------------------------------------------------------------------
        */

        Route::get('/materials', function () {

            return Inertia::render('Teacher/Materials/Index');

        })->name('materials.index');


        /*
        |--------------------------------------------------------------------------
        | Detail Materi / Modul
        |--------------------------------------------------------------------------
        |
        | Contoh:
        |
        | /teacher/materials/1
        | /teacher/materials/2
        | ...
        | /teacher/materials/6
        |
        */

        Route::get('/materials/{material}', function ($material) {

            return Inertia::render(
                "Teacher/Materials/Modul{$material}"
            );

        })->whereNumber('material')
            ->name('materials.show');


        /*
        |--------------------------------------------------------------------------
        | Data Siswa Guru
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/students',
            [TeacherStudentController::class, 'index']
        )->name('students.index');


        /*
        |--------------------------------------------------------------------------
        | Tambah Siswa oleh Guru
        |--------------------------------------------------------------------------
        */

        Route::post(
            '/students',
            [TeacherStudentController::class, 'store']
        )->name('students.store');


        /*
        |--------------------------------------------------------------------------
        | Hapus Siswa oleh Guru
        |--------------------------------------------------------------------------
        */

        Route::delete(
            '/students/{student}',
            [TeacherStudentController::class, 'destroy']
        )->name('students.destroy');

    });


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Semua route admin:
|
| URL prefix : /admin
| Route name : admin.
| Middleware : auth, verified, role:admin
|
*/


Route::middleware(['auth', 'verified', 'role:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        /*
        |--------------------------------------------------------------------------
        | Dashboard Admin
        |--------------------------------------------------------------------------
        */

        Route::get('/dashboard', function () {

            return Inertia::render('Admin/Dashboard');

        })->name('dashboard');


        /*
        |--------------------------------------------------------------------------
        | Profil Admin
        |--------------------------------------------------------------------------
        */

        Route::get('/profile', function (Request $request) {

            return Inertia::render('Admin/Profile', [
                'user' => $request->user(),
            ]);

        })->name('profile');


        /*
        |--------------------------------------------------------------------------
        | Update Profil Admin
        |--------------------------------------------------------------------------
        */

        Route::put(
            '/profile',
            [UserProfileController::class, 'update']
        )->name('profile.update');


        /*
        |--------------------------------------------------------------------------
        | Data Siswa Admin
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/students',
            [AdminStudentController::class, 'index']
        )->name('students.index');


        /*
        |--------------------------------------------------------------------------
        | Tambah Siswa Admin
        |--------------------------------------------------------------------------
        */

        Route::post(
            '/students',
            [AdminStudentController::class, 'store']
        )->name('students.store');


        /*
        |--------------------------------------------------------------------------
        | Hapus Siswa Admin
        |--------------------------------------------------------------------------
        */

        Route::delete(
            '/students/{student}',
            [AdminStudentController::class, 'destroy']
        )->name('students.destroy');


        /*
        |--------------------------------------------------------------------------
        | Data Guru Admin
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/teachers',
            [AdminTeacherController::class, 'index']
        )->name('teachers.index');


        /*
        |--------------------------------------------------------------------------
        | Tambah Guru Admin
        |--------------------------------------------------------------------------
        */

        Route::post(
            '/teachers',
            [AdminTeacherController::class, 'store']
        )->name('teachers.store');


        /*
        |--------------------------------------------------------------------------
        | Hapus Guru Admin
        |--------------------------------------------------------------------------
        */

        Route::delete(
            '/teachers/{teacher}',
            [AdminTeacherController::class, 'destroy']
        )->name('teachers.destroy');

        /*
        |--------------------------------------------------------------------------
        | Materi Pembelajaran Admin
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/materials',
            [AdminMaterialController::class, 'index']
        )->name('materials.index');

        Route::get(
            '/materials/create',
            [AdminMaterialController::class, 'create']
        )->name('materials.create');

        Route::post(
            '/materials',
            [AdminMaterialController::class, 'store']
        )->name('materials.store');

        Route::get(
            '/materials/{material}/edit',
            [AdminMaterialController::class, 'edit']
        )->name('materials.edit');

        Route::put(
            '/materials/{material}',
            [AdminMaterialController::class, 'update']
        )->name('materials.update');

        Route::delete(
            '/materials/{material}',
            [AdminMaterialController::class, 'destroy']
        )->name('materials.destroy');

        Route::get('/materials', [AdminMaterialController::class, 'index'])
            ->name('materials.index');

        Route::get('/materials/create', [AdminMaterialController::class, 'create'])
            ->name('materials.create');

        Route::post('/materials', [AdminMaterialController::class, 'store'])
            ->name('materials.store');

        Route::get('/materials/{material}/edit', [AdminMaterialController::class, 'edit'])
            ->name('materials.edit');

        Route::put('/materials/{material}', [AdminMaterialController::class, 'update'])
            ->name('materials.update');

        Route::delete('/materials/{material}', [AdminMaterialController::class, 'destroy'])
            ->name('materials.destroy');

    });


/*
|--------------------------------------------------------------------------
| General Profile Routes
|--------------------------------------------------------------------------
|
| Route profil bawaan Laravel Breeze.
|
| URL:
| /profile
|
*/

Route::middleware('auth')
    ->group(function () {

        /*
        |--------------------------------------------------------------------------
        | Edit Profile Breeze
        |--------------------------------------------------------------------------
        */

        Route::get(
            '/profile',
            [ProfileController::class, 'edit']
        )->name('profile.edit');


        /*
        |--------------------------------------------------------------------------
        | Update Profile Breeze
        |--------------------------------------------------------------------------
        */

        Route::patch(
            '/profile',
            [ProfileController::class, 'update']
        )->name('profile.update');


        /*
        |--------------------------------------------------------------------------
        | Delete Profile Breeze
        |--------------------------------------------------------------------------
        */

        Route::delete(
            '/profile',
            [ProfileController::class, 'destroy']
        )->name('profile.destroy');

    });


/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
*/

require __DIR__ . '/auth.php';