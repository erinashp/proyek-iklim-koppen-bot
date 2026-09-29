
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function Profile() {
    // Mengambil data user yang sedang login
    const { auth } = usePage().props;
    const user = auth.user;

    const { post } = useForm();

    // Role pengguna
    const roleLabel = 'Guru';

    // Logout
    const logout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    // Inisial nama untuk avatar
    const initial = user.name
        ? user.name.charAt(0).toUpperCase()
        : 'G';

    return (
        <>
            <Head title="Profil Guru" />

            <div className="min-h-screen bg-gray-100">

                {/* Navbar */}
                <nav className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                        <h1 className="text-xl font-bold text-gray-800">
                            Media Pembelajaran Iklim Köppen
                        </h1>

                        <div className="flex items-center gap-4">

                            {/* Identitas Guru */}
                            <div className="text-right">
                                <p className="font-semibold text-gray-800">
                                    {user.name}
                                </p>

                                <span className="text-sm text-green-600">
                                    {roleLabel}
                                </span>
                            </div>

                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                                {initial}
                            </div>

                            {/* Logout */}
                            <button
                                onClick={logout}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                            >
                                Logout
                            </button>

                        </div>
                    </div>
                </nav>

                {/* Content */}
                <main className="max-w-5xl mx-auto px-6 py-10">

                    {/* Tombol Kembali */}
                    <Link
                        href={route('teacher.dashboard')}
                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium mb-6"
                    >
                        ← Kembali ke Dashboard
                    </Link>

                    {/* Judul */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Profil Guru
                        </h2>

                        <p className="mt-2 text-gray-600">
                            Informasi akun guru media pembelajaran Iklim Köppen.
                        </p>
                    </div>

                    {/* Kartu Profil */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

                        {/* Header Profil */}
                        <div className="bg-green-600 px-8 py-10">
                            <div className="flex flex-col sm:flex-row items-center gap-6">

                                {/* Avatar */}
                                <div className="w-24 h-24 rounded-full bg-white text-green-600 flex items-center justify-center text-4xl font-bold shadow-lg">
                                    {initial}
                                </div>

                                {/* Identitas */}
                                <div className="text-center sm:text-left">
                                    <h3 className="text-2xl font-bold text-white">
                                        {user.name}
                                    </h3>

                                    <p className="text-green-100 mt-1">
                                        {user.email}
                                    </p>

                                    <span className="inline-block mt-3 px-4 py-1 bg-white text-green-700 rounded-full text-sm font-semibold">
                                        {roleLabel}
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Informasi Akun */}
                        <div className="p-8">

                            <h3 className="text-lg font-bold text-gray-800 mb-6">
                                Informasi Pengguna
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Nama */}
                                <div className="border-b border-gray-200 pb-4">
                                    <p className="text-sm text-gray-500 mb-2">
                                        Nama Lengkap
                                    </p>

                                    <p className="font-semibold text-gray-800">
                                        {user.name}
                                    </p>
                                </div>

                                {/* Username */}
                                <div className="border-b border-gray-200 pb-4">
                                    <p className="text-sm text-gray-500 mb-2">
                                        Username
                                    </p>

                                    <p className="font-semibold text-gray-800">
                                        {user.username || '-'}
                                    </p>
                                </div>

                                {/* Email */}
                                <div className="border-b border-gray-200 pb-4">
                                    <p className="text-sm text-gray-500 mb-2">
                                        Email
                                    </p>

                                    <p className="font-semibold text-gray-800 break-all">
                                        {user.email}
                                    </p>
                                </div>

                                {/* Role */}
                                <div className="border-b border-gray-200 pb-4">
                                    <p className="text-sm text-gray-500 mb-2">
                                        Role Pengguna
                                    </p>

                                    <p className="font-semibold text-gray-800">
                                        {roleLabel}
                                    </p>
                                </div>

                                {/* ID */}
                                <div className="border-b border-gray-200 pb-4">
                                    <p className="text-sm text-gray-500 mb-2">
                                        ID Pengguna
                                    </p>

                                    <p className="font-semibold text-gray-800">
                                        {user.id}
                                    </p>
                                </div>

                            </div>

                            {/* Tombol Aksi */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">

                                <button
                                    type="button"
                                    disabled
                                    className="px-5 py-3 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed"
                                    title="Fitur edit profil akan ditambahkan nanti"
                                >
                                    Edit Profil (Segera Hadir)
                                </button>

                                <button
                                    onClick={logout}
                                    className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                                >
                                    Logout
                                </button>

                            </div>

                        </div>
                    </div>

                </main>
            </div>
        </>
    );
}