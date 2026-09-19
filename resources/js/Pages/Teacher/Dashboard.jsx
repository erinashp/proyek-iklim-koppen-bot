import { Head, useForm } from '@inertiajs/react';

export default function Dashboard() {
    const { post } = useForm();

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

                        <button
                            onClick={logout}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                </nav>

                {/* Content */}
                <main className="max-w-7xl mx-auto px-6 py-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Dashboard Guru
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Selamat datang di media pembelajaran Iklim Köppen.
                    </p>

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