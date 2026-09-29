
import { Head, Link, useForm } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const { post } = useForm();

    // Mengambil data user yang sedang login
    const user = auth.user;

    // Mengubah role menjadi label yang mudah dibaca
    const roleLabel = user.role === 'teacher' ? 'Guru' : 'Siswa';

    // Logout
    const logout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <>
            <Head title="Dashboard Siswa" />

            <div className="min-h-screen bg-gray-100">

                {/* Navbar */}
                <nav className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                        <h1 className="text-xl font-bold text-gray-800">
                            Media Pembelajaran Iklim Köppen
                        </h1>

                        <div className="flex items-center gap-4">

                            {/* Identitas User */}
                            <div className="text-right">
                                <p className="font-semibold text-gray-800">
                                    {user.name}
                                </p>

                                <span className="text-sm text-blue-600">
                                    {roleLabel}
                                </span>
                            </div>

                            {/* Foto Profil / Inisial */}
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                {user.name.charAt(0).toUpperCase()}
                            </div>


                            <div className="flex items-center gap-3">

                                <Link
                                    href="/student/profile"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Profil Saya
                                </Link>

                                <button
                                    onClick={logout}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                                >
                                    Logout
                                </button>

                            </div>

                        </div>
                    </div>
                </nav>

                {/* Content */}
                <main className="max-w-7xl mx-auto px-6 py-10">

                    <h2 className="text-3xl font-bold text-gray-800">
                        Dashboard Siswa
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Selamat datang, {user.name}! Selamat belajar di media pembelajaran Iklim Köppen.
                    </p>

                    {/* Profil Pengguna */}
                    <div className="mt-8 bg-white p-6 rounded-xl shadow">

                        <h3 className="text-xl font-bold text-gray-800 mb-5">
                            Profil Saya
                        </h3>

                        <div className="flex items-center gap-5">

                            {/* Avatar */}
                            <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
                                {user.name.charAt(0).toUpperCase()}
                            </div>

                            {/* Informasi Profil */}
                            <div>
                                <h4 className="text-2xl font-bold text-gray-800">
                                    {user.name}
                                </h4>

                                <p className="text-gray-600 mt-1">
                                    {user.email}
                                </p>

                                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                    {roleLabel}
                                </span>
                            </div>

                        </div>

                        <div className="mt-6 border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Nama Lengkap
                                </p>
                                <p className="font-medium text-gray-800">
                                    {user.name}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Email
                                </p>
                                <p className="font-medium text-gray-800">
                                    {user.email}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Role Pengguna
                                </p>
                                <p className="font-medium text-gray-800">
                                    {roleLabel}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    ID Pengguna
                                </p>
                                <p className="font-medium text-gray-800">
                                    {user.id}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Menu Pembelajaran */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-bold">
                                Materi
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Pelajari klasifikasi iklim Köppen.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-bold">
                                Kuis
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Uji pemahaman kamu tentang iklim Köppen.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-bold">
                                Nilai
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Lihat hasil kuis kamu.
                            </p>
                        </div>

                    </div>

                </main>
            </div>
        </>
    );
}