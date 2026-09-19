import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard Siswa" />

            <div className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Dashboard Siswa
                </h1>

                <p className="mt-2 text-gray-600">
                    Selamat datang di media pembelajaran Iklim Köppen.
                </p>
            </div>
        </>
    );
}