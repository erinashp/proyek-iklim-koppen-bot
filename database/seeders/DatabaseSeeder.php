<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'siswa@test.com'],
            [
                'name' => 'Siswa Test',
                'password' => 'password123',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'guru@test.com'],
            [
                'name' => 'Guru Test',
                'password' => 'password123',
                'role' => 'teacher',
                'email_verified_at' => now(),
            ]
        );
    }
}