import React from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth?.user;

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <>
            <Head title="Dashboard Guru" />

            <div className="min-h-screen bg-gray-100">
                {/* Navbar */}
                <nav className="bg-white shadow-sm">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                        <div>
                            <h1 className="text-xl font-bold text-green-700">
                                Dashboard Guru
                            </h1>
                            <p className="text-sm text-gray-500">
                                Media Pembelajaran Iklim Köppen
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="font-semibold text-gray-800">
                                    {user?.name ?? 'Guru'}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {user?.email ?? ''}
                                </p>
                            </div>

                            <Link
                                href={route('teacher.profile')}
                                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                            >
                                Profil
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Konten Dashboard */}
                <main className="mx-auto max-w-7xl px-6 py-8">
                    <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Selamat datang, {user?.name ?? 'Guru'}!
                        </h2>

                        <p className="mt-2 text-gray-600">
                            Kelola materi pembelajaran, kuis, dan nilai siswa
                            melalui dashboard ini.
                        </p>
                    </div>

                    {/* Menu Dashboard */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Link
                            href="/teacher/materials"
                            className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">
                                Materi Pembelajaran
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Kelola materi klasifikasi iklim Köppen.
                            </p>
                        </Link>

                        <Link
                            href="/teacher/quizzes"
                            className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">
                                Kuis
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Buat dan kelola kuis untuk siswa.
                            </p>
                        </Link>

                        <Link
                            href="/teacher/grades"
                            className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">
                                Nilai Siswa
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Lihat hasil pengerjaan kuis siswa.
                            </p>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}