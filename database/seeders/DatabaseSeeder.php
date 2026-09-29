<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        //Data Peserta Didik
        User::updateOrCreate(
            ['email' => 'acintya@test.com'],
            [
                'name' => 'Acintya Ambarwati',
                'password' => '14833',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate( 
            ['email' => 'adelia@test.com'],
            [
                'name' => 'Adelia Martha Indria Putri',
                'password' => '14834',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'aldeq@test.com'],
            [
                'name' => 'Aldeq Sultan Pratama',
                'password' => '14847',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'alvin@test.com'],
            [
                'name' => 'Alvin Dwi Pramono',
                'password' => '14850',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'amelia@test.com'],
            [
                'name' => 'Amelia Maharani Wulandari',
                'password' => '14855',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'asyafira@test.com'],
            [
                'name' => 'Asyafira Leyna Fiolita',
                'password' => '14875',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'brian@test.com'],
            [
                'name' => 'Brian Naufal Abbasy',
                'password' => '14892',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'chantika@test.com'],
            [
                'name' => 'Chantika Efiyana Adhi Setya',
                'password' => '14898',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'chelsea@test.com'],
            [
                'name' => 'Chelsea Cahya Setiawan',
                'password' => '14902',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'chyntia@test.com'],
            [
                'name' => 'Chyntia Ariella',
                'password' => '14904',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'Dhika@test.com'],
            [
                'name' => 'Dika Firmansyah',
                'password' => '14919',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'emilie@test.com'],
            [
                'name' => 'Emilie Audrey Hamdoyo',
                'password' => '14929',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'farel@test.com'],
            [
                'name' => 'Farel Andriano Koentoro',
                'password' => '14937',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'farrena@test.com'],
            [
                'name' => 'Farrena Elyasa Winona',
                'password' => '14940',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'ferdian@test.com'],
            [
                'name' => 'Ferdian Pratama Putra',
                'password' => '14946',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'hanunnah@test.com'],
            [
                'name' => 'Hanunnah Ismahani Hanifah',
                'password' => '14960',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'hilmi@test.com'],
            [
                'name' => 'Hilmi Ali Musyaffa',
                'password' => '14965',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'melia@test.com'],
            [
                'name' => 'Melia Sumartono',
                'password' => '15000',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'moch.zheldano@test.com'],
            [
                'name' => 'Moch. Zheldano Agra Murphi',
                'password' => '15003',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

         User::updateOrCreate(
            ['email' => 'muhammad.farid@test.com'],
            [
                'name' => 'Muhammad Farid Abyansyah',
                'password' => '15014',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

         User::updateOrCreate(
            ['email' => 'muhammad.irfanuddaqiqi@test.com'],
            [
                'name' => 'Muhammad Irfanuddaqiqi Yaqin',
                'password' => '15019',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

         User::updateOrCreate(
            ['email' => 'mustika@test.com'],
            [
                'name' => 'Mustika Ramadhani',
                'password' => '15025',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        ser::updateOrCreate(
            ['email' => 'natasha@test.com'],
            [
                'name' => 'Natasha Aurora Fabriane',
                'password' => '15034',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        ser::updateOrCreate(
            ['email' => 'nisrina@test.com'],
            [
                'name' => 'Nisrina Nabil Ramadhanii',
                'password' => '15041',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        ser::updateOrCreate(
            ['email' => 'putra@test.com'],
            [
                'name' => 'Putra Danish Wijaya',
                'password' => '15047',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        ser::updateOrCreate(
            ['email' => 'putri@test.com'],
            [
                'name' => 'Putri Isnaini Kalyana',
                'password' => '15048',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        ser::updateOrCreate(
            ['email' => 'rafansyah@test.com'],
            [
                'name' => 'Rafansyah Ramadhan Elmar',
                'password' => '15053',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        ser::updateOrCreate(
            ['email' => 'rayhan@test.com'],
            [
                'name' => 'Rayhan Vai Arifin',
                'password' => '15058',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        ser::updateOrCreate(
            ['email' => 'rizky@test.com'],
            [
                'name' => 'Rizky Akhmal Minardi',
                'password' => '15063',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        ser::updateOrCreate(
            ['email' => 'rr.zakia@test.com'],
            [
                'name' => 'Rr. Zakia Nur Safitri',
                'password' => '15065',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        ser::updateOrCreate(
            ['email' => 'syavalia@test.com'],
            [
                'name' => 'Syavalia Sepzian Ramadhani',
                'password' => '15090',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        ser::updateOrCreate(
            ['email' => 'tennofallah@test.com'],
            [
                'name' => 'Tennofallah Regina Putri Utama',
                'password' => '15092',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'siswa@test.com'],
            [
                'name' => 'Siswa Test',
                'password' => 'password123',
                'role' => 'student',
                'email_verified_at' => now(),
            ]
        );

        //Data Guru
        User::updateOrCreate(
            ['email' => 'suaibatulislamiyah@test.com'],
            [
                'name' => 'Suaibatul Islamiyah',
                'password' => 'password123',
                'role' => 'teacher',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'royagata@test.com'],
            [
                'name' => 'Roy Agata',
                'password' => 'password123',
                'role' => 'teacher',
                'email_verified_at' => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'erinasaharani@test.com'],
            [
                'name' => 'Erina Saharani Hermanto Putri',
                'password' => 'password123',
                'role' => 'teacher',
                'email_verified_at' => now(),
            ]
        );
    }
}